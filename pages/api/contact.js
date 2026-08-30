const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO || "gabriellakhayutin@gmail.com";
const CONTACT_EMAIL_FROM =
  process.env.CONTACT_EMAIL_FROM || "Portfolio Contact <onboarding@resend.dev>";
const RESEND_API_URL = "https://api.resend.com/emails";
const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000;
const RATE_LIMIT_MAX_MESSAGES = 2;

const rateLimitStore = globalThis.__portfolioContactRateLimitStore || new Map();
globalThis.__portfolioContactRateLimitStore = rateLimitStore;

function getClientIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];

  if (typeof forwardedFor === "string") {
    return forwardedFor.split(",")[0].trim();
  }

  return req.headers["x-real-ip"] || req.socket?.remoteAddress || "unknown";
}

function getRateLimitRecord(key, now) {
  const existingRecord = rateLimitStore.get(key);

  if (!existingRecord || existingRecord.resetAt <= now) {
    return {
      count: 0,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    };
  }

  return existingRecord;
}

function isRateLimited(keys, now) {
  return keys.some((key) => {
    const record = getRateLimitRecord(key, now);
    return record.count >= RATE_LIMIT_MAX_MESSAGES;
  });
}

function recordSuccessfulSend(keys, now) {
  keys.forEach((key) => {
    const record = getRateLimitRecord(key, now);

    rateLimitStore.set(key, {
      count: record.count + 1,
      resetAt: record.resetAt,
    });
  });
}

function pruneExpiredRateLimits(now) {
  rateLimitStore.forEach((record, key) => {
    if (record.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  });
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed." });
  }

  const name = normalizeText(req.body?.name);
  const email = normalizeText(req.body?.email).toLowerCase();
  const message = normalizeText(req.body?.message);
  const website = normalizeText(req.body?.website);

  if (website) {
    return res.status(200).json({ message: "Message sent successfully." });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill in all fields." });
  }

  if (name.length > 80) {
    return res.status(400).json({ message: "Name must be 80 characters or fewer." });
  }

  if (!isValidEmail(email) || email.length > 120) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }

  if (message.length < 10 || message.length > 1500) {
    return res.status(400).json({
      message: "Message must be between 10 and 1500 characters.",
    });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({
      message: "Email sending is not configured yet. Please contact me directly by email.",
    });
  }

  const now = Date.now();
  const clientIp = getClientIp(req);
  const rateLimitKeys = [`email:${email}`, `ip:${clientIp}`];

  pruneExpiredRateLimits(now);

  if (isRateLimited(rateLimitKeys, now)) {
    return res.status(429).json({
      message:
        "You have reached the 2-message limit for today. Please email me directly if your message is urgent.",
    });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const submittedAt = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Amsterdam",
  }).format(new Date(now));

  let emailResponse;

  try {
    emailResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `portfolio-contact-${email}-${now}`,
        "User-Agent": "gabriella-portfolio-contact-form",
      },
      body: JSON.stringify({
        from: CONTACT_EMAIL_FROM,
        to: [CONTACT_EMAIL_TO],
        reply_to: email,
        subject: `Portfolio contact from ${name}`,
        html: `
        <div style="margin:0; padding:0; background:#f6f8fb; font-family:Arial, Helvetica, sans-serif; color:#111827;">
          <div style="max-width:640px; margin:0 auto; padding:28px 16px;">
            <div style="background:#ffffff; border:1px solid #e5e7eb; border-radius:14px; overflow:hidden;">
              <div style="padding:22px 24px; background:#0b1224; color:#ffffff;">
                <p style="margin:0 0 8px; color:#67e8f9; font-size:12px; font-weight:700; letter-spacing:1.8px; text-transform:uppercase;">Portfolio Contact</p>
                <h1 style="margin:0; font-size:24px; line-height:1.3; font-weight:700;">New message from ${safeName}</h1>
              </div>

              <div style="padding:24px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; margin:0 0 24px;">
                  <tr>
                    <td style="padding:0 0 12px; width:110px; color:#6b7280; font-size:14px; font-weight:700;">Name</td>
                    <td style="padding:0 0 12px; color:#111827; font-size:15px;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 12px; width:110px; color:#6b7280; font-size:14px; font-weight:700;">Email</td>
                    <td style="padding:0 0 12px; color:#111827; font-size:15px;">
                      <a href="mailto:${safeEmail}" style="color:#2563eb; text-decoration:none;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0; width:110px; color:#6b7280; font-size:14px; font-weight:700;">Submitted</td>
                    <td style="padding:0; color:#111827; font-size:15px;">${submittedAt}</td>
                  </tr>
                </table>

                <div style="margin:0 0 22px; padding:18px 20px; background:#f9fafb; border:1px solid #e5e7eb; border-radius:12px;">
                  <p style="margin:0 0 10px; color:#374151; font-size:14px; font-weight:700;">Message</p>
                  <div style="color:#111827; font-size:16px; line-height:1.7;">${safeMessage}</div>
                </div>

                <a href="mailto:${safeEmail}?subject=Re%3A%20Portfolio%20contact" style="display:inline-block; padding:12px 18px; background:#2563eb; border-radius:10px; color:#ffffff; font-size:14px; font-weight:700; text-decoration:none;">Reply to ${safeName}</a>

                <p style="margin:22px 0 0; color:#6b7280; font-size:12px; line-height:1.6;">
                  This message was sent from the contact form on your portfolio website. Replies should go directly to ${safeEmail}.
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
        text: `New portfolio message

Name: ${name}
Email: ${email}
Submitted: ${submittedAt}

Message:
${message}`,
      }),
    });
  } catch (error) {
    console.error("Email provider request failed:", error);

    return res.status(502).json({
      message: "Email could not be sent right now. Please contact me directly by email.",
    });
  }

  if (!emailResponse.ok) {
    const providerError = await emailResponse.text();
    console.error("Email provider failed:", providerError);

    return res.status(502).json({
      message: "Email could not be sent right now. Please contact me directly by email.",
    });
  }

  recordSuccessfulSend(rateLimitKeys, now);

  return res.status(200).json({ message: "Message sent successfully." });
}
