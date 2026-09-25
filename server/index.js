import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'

const REQUIRED_ENV = ['SMTP_HOST', 'MAIL_FROM', 'MAIL_TO']
const missing = REQUIRED_ENV.filter((key) => !process.env[key])
if (missing.length > 0) {
  console.error(`Missing environment variables: ${missing.join(', ')} (see .env.example)`)
  process.exit(1)
}

const { SMTP_HOST, SMTP_PORT = '25', SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } = process.env
const PORT = process.env.PORT ?? 3000
const distDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist')

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const isImplicitTls = Number(SMTP_PORT) === 465

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: isImplicitTls,
  ignoreTLS: !isImplicitTls,
  auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
})

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Too many messages sent. Please try again in a few minutes.' },
})

const singleLine = (value) =>
  String(value ?? '')
    .replace(/[\r\n]+/g, ' ')
    .trim()

function validate(body) {
  const name = singleLine(body?.name)
  const email = singleLine(body?.email)
  const message = String(body?.message ?? '').trim()

  if (!name || name.length > 100) return { error: 'Please enter your name.' }
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { error: 'Please enter a valid e-mail address.' }
  }
  if (!message || message.length > 5000) {
    return { error: 'Please enter a message (5000 characters max).' }
  }
  return { name, email, message }
}

const app = express()

// Needed behind the hosting reverse proxy so the rate limiter sees the real client IP.
app.set('trust proxy', 1)
app.use(express.json({ limit: '16kb' }))

app.post('/api/contact', contactLimiter, async (req, res) => {
  // Honeypot: real visitors never see this field, bots fill it. Pretend it worked.
  if (req.body?.website) return res.json({ ok: true })

  const { error, name, email, message } = validate(req.body)
  if (error) return res.status(400).json({ error })

  try {
    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: { name, address: email },
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    })
    res.json({ ok: true })
  } catch (mailError) {
    console.error('Contact mail failed:', mailError)
    res.status(500).json({
      error: 'Something went wrong while sending your message. Please try again later.',
    })
  }
})

app.use(express.static(distDir))

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
