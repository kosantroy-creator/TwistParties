import { Resend } from "resend";

// Vercel Node serverless function: POST /api/inquiry
// Receives the booking form payload and emails it to the business via Resend.
// Works in "simulated" mode (logs + returns ok) until RESEND_API_KEY is set,
// so the form is testable locally before email is wired up.

type Inquiry = Record<string, unknown> & {
  name?: string;
  email?: string;
  services?: string[];
  referencePhotos?: string[];
};

function row(label: string, value: unknown): string {
  if (value == null || value === "" || (Array.isArray(value) && value.length === 0))
    return "";
  const v = Array.isArray(value) ? value.join(", ") : String(value);
  return `<tr><td style="padding:6px 12px;color:#5B6B82;border-bottom:1px solid #E4EDF4">${label}</td><td style="padding:6px 12px;color:#16233D;border-bottom:1px solid #E4EDF4"><strong>${v}</strong></td></tr>`;
}

function renderEmail(d: Inquiry): string {
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto">
    <div style="background:linear-gradient(135deg,#FF7A1F,#FF5DA2,#7C4DFF);padding:20px 24px;border-radius:14px 14px 0 0">
      <h2 style="color:#fff;margin:0">🎈 New booking inquiry</h2>
    </div>
    <table style="width:100%;border-collapse:collapse;border:1px solid #E4EDF4;border-top:none">
      ${row("Name", d.name)}
      ${row("Email", d.email)}
      ${row("Phone", d.phone)}
      ${row("Preferred contact", d.contactMethod)}
      ${row("Event date", d.date)}
      ${row("Start time", d.startTime)}
      ${row("End time", d.endTime)}
      ${row("Duration", d.duration)}
      ${row("Event type", d.eventType)}
      ${row("Guests / children", d.guests)}
      ${row("Address", d.address)}
      ${row("City", d.city)}
      ${row("Postal code", d.postal)}
      ${row("Interested in", d.services)}
      ${row("Theme / requests", d.theme)}
      ${row("Reference photos", d.referencePhotos)}
      ${row("Additional info", d.additional)}
    </table>
  </div>`;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const data: Inquiry = req.body ?? {};
  if (!data.name || !data.email) {
    res.status(400).json({ error: "Name and email are required." });
    return;
  }

  const to = process.env.BOOKING_TO || "hello@twistparties.ca";
  const from = process.env.BOOKING_FROM || "Twist Parties <onboarding@resend.dev>";
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("[inquiry] No RESEND_API_KEY — simulating send:", JSON.stringify(data));
    res.status(200).json({ ok: true, simulated: true });
    return;
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: String(data.email),
      subject: `New booking inquiry — ${data.name}`,
      html: renderEmail(data),
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[inquiry] send failed:", err);
    res.status(502).json({ error: "Failed to send inquiry. Please email or WhatsApp us." });
  }
}
