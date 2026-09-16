import nodemailer from 'nodemailer'

const FIELDS = ['name', 'phone', 'email', 'subject', 'message']
const REQUIRED = ['name', 'phone', 'email', 'message']
const MAX_LENGTH = 5000
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function readBody(req) {
  if (!req.body) return {}
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body)
    } catch {
      return {}
    }
  }
  return req.body
}

// Keeps header injection out of the subject line and trims runaway payloads.
function clean(value) {
  return String(value ?? '')
    .replace(/[\r\n]+/g, ' ')
    .trim()
    .slice(0, MAX_LENGTH)
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO } = process.env

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error('Contact form: GMAIL_USER or GMAIL_APP_PASSWORD is not set')
    return res.status(500).json({ error: 'Mail is not configured' })
  }

  const body = readBody(req)
  const data = {}
  for (const field of FIELDS) {
    data[field] = clean(body[field])
  }

  // Message keeps its line breaks; only the header-bound fields are flattened.
  data.message = String(body.message ?? '').trim().slice(0, MAX_LENGTH)

  const missing = REQUIRED.filter((field) => !data[field])
  if (missing.length) {
    return res.status(400).json({ error: `Missing required field(s): ${missing.join(', ')}` })
  }

  if (!EMAIL_PATTERN.test(data.email)) {
    return res.status(400).json({ error: 'Please enter a valid email address' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD
    }
  })

  const subject = data.subject
    ? `94 Cabs website enquiry: ${data.subject}`
    : `94 Cabs website enquiry from ${data.name}`

  const lines = [
    `Name:    ${data.name}`,
    `Email:   ${data.email}`,
    `Phone:   ${data.phone || '—'}`,
    `Subject: ${data.subject || '—'}`,
    '',
    data.message
  ]

  try {
    await transporter.sendMail({
      // Gmail rewrites this to the authenticated mailbox unless GMAIL_USER is a
      // verified "Send mail as" alias, so the display name carries the branding.
      from: `"94 Cabs Red Deer" <${GMAIL_USER}>`,
      to: CONTACT_TO || GMAIL_USER,
      replyTo: `"${data.name}" <${data.email}>`,
      subject,
      text: lines.join('\n'),
      html: `
        <h2 style="margin:0 0 16px">New website enquiry</h2>
        <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p style="margin:0 0 4px"><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p style="margin:0 0 4px"><strong>Phone:</strong> ${escapeHtml(data.phone) || '&mdash;'}</p>
        <p style="margin:0 0 16px"><strong>Subject:</strong> ${escapeHtml(data.subject) || '&mdash;'}</p>
        <div style="white-space:pre-wrap">${escapeHtml(data.message)}</div>
      `
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact form: sendMail failed', error)
    return res.status(502).json({ error: 'Could not send your message. Please call dispatch.' })
  }
}
