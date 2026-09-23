const GENERIC_ERROR = 'Something went wrong while sending your message. Please try again later.'

export async function sendContactMessage(payload) {
  let response
  try {
    response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Error(GENERIC_ERROR)
  }

  if (!response.ok) {
    const data = await response.json().catch(() => null)
    throw new Error(data?.error ?? GENERIC_ERROR)
  }
}
