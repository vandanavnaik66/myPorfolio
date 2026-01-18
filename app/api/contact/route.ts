import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { site } from "@/lib/site";

const ContactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(200),
  message: z.string().min(10).max(4000),
});

function getTransport() {
  const mode = process.env.MAIL_MODE ?? "smtp";
  if (mode === "console") {
    return null;
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = ContactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;
  const transport = getTransport();

  const subject = `Portfolio contact from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  if (!transport) {
    // Dev-friendly fallback (or when env vars aren't configured yet).
    console.log("[contact] Subject:", subject);
    console.log("[contact] Body:\n", text);

    return NextResponse.json({ ok: true, mode: "console" });
  }

  const from = process.env.MAIL_FROM ?? process.env.SMTP_USER ?? "no-reply@example.com";
  const to = site.contactEmailTo;

  await transport.sendMail({
    from: `Portfolio <${from}>`,
    to,
    replyTo: email,
    subject,
    text,
  });

  return NextResponse.json({ ok: true, mode: "smtp" });
}
