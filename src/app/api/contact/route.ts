import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email and message are required." },
      { status: 422 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please provide a valid email." }, { status: 422 });
  }

  // ---------------------------------------------------------------------------
  // TODO: deliver the enquiry.
  // The form is fully wired up to this endpoint; plug in your delivery method:
  //
  //   • SMTP (nodemailer) using SMTP_* vars from .env, or
  //   • Resend: await resend.emails.send({ ... }) with RESEND_API_KEY, or
  //   • Persist to Supabase `enquiries` table (matches the target architecture).
  //
  // For now we log server-side and acknowledge success so the UI flow works.
  // ---------------------------------------------------------------------------
  console.log("[contact] new enquiry:", {
    name,
    email,
    phone: body.phone,
    subject: body.subject,
    message,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
