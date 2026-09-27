function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export function renderContactEmail({ name, email, message }) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br>')

  return `<!doctype html>
<html>
  <head>
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <style>
      @media (prefers-color-scheme: dark) {
        .email-bg { background: #16171d !important; }
        .email-card { background: #232335 !important; }
        .email-text { color: #f3f4f6 !important; }
        .email-label { color: #a89bff !important; }
        .email-link { color: #a89bff !important; }
      }
    </style>
  </head>
  <body class="email-bg" style="margin:0;padding:32px;background:#f6f6f6;font-family:Arial,Helvetica,sans-serif;color:#2f2e41;">
    <table role="presentation" width="100%" class="email-card" style="max-width:480px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;">
      <tr>
        <td style="background:#4f46e2;padding:24px 32px;">
          <h1 style="margin:0;color:#ffffff;font-size:20px;">New message from your portfolio</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:32px;">
          <p class="email-label" style="margin:0 0 8px;font-size:14px;color:#6c63ff;text-transform:uppercase;letter-spacing:0.05em;">From</p>
          <p class="email-text" style="margin:0 0 24px;font-size:16px;"><strong>${safeName}</strong> &mdash; <a href="mailto:${safeEmail}" class="email-link" style="color:#4f46e2;">${safeEmail}</a></p>
          <p class="email-label" style="margin:0 0 8px;font-size:14px;color:#6c63ff;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
          <p class="email-text" style="margin:0;font-size:16px;line-height:1.5;">${safeMessage}</p>
        </td>
      </tr>
    </table>
  </body>
</html>`
}
