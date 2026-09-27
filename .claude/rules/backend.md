## Backend (contact form)

- `server/index.js` — small Express app: serves the built site from `dist/` and exposes `POST /api/contact` (validation, honeypot field `website`, rate limit of 5 requests / 15 min per IP, e-mail sent with Nodemailer over SMTP).
- Configuration comes from environment variables only (see `.env.example`): `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`, `MAIL_TO`, plus `PORT` locally. Never commit `.env`.
- Local development runs two processes: `npm run dev` (Vite, proxies `/api` to port 3000) and `npm run server` (the API, reads `.env`).
- Production runs `npm start`; `scripts/postinstall.js` builds automatically on deploy (cross-platform, no-op locally).
- Frontend code calls the API through `src/services/contact.js`; the form UI lives in `src/components/ui/ContactForm.vue`.
