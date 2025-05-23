// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const { GMAIL_USER, GMAIL_PASS, CONTACT_TO } = process.env;

// Configure le transporter SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: GMAIL_USER, pass: GMAIL_PASS },
});

export async function POST(req: Request) {
  const { nom, email, message } = await req.json();

  if (!nom || !email || !message) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"${nom}" <${GMAIL_USER}>`,
      to: CONTACT_TO,
      subject: `Nouveau message de ${nom}`,
      text: `Nom : ${nom}\nEmail : ${email}\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error", err);
    return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
  }
}
