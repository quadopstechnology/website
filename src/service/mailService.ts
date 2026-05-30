import { createTransport } from "nodemailer";
import { env } from "@/src/config/env";

export const mailTransporter = createTransport({
  host: env.smtpHost,
  port: env.smtpPort,
  secure: env.smtpPort === 465, // true for 465, false for other ports like 587
  auth: {
    user: env.smtpLogin,
    pass: env.smtpPassword,
  },
});

export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, text, replyTo }: SendEmailOptions) {
  const fromEmail = env.companyEmail || env.smtpLogin;
  
  if (!fromEmail) {
    throw new Error("Sender email (NEXT_PUBLIC_COMPANY_EMAIL or NEXT_PUBLIC_SMTP_LOGIN) is not configured.");
  }

  return mailTransporter.sendMail({
    from: `"QuadOps" <${fromEmail}>`,
    to,
    subject,
    html,
    text,
    replyTo,
  });
}
