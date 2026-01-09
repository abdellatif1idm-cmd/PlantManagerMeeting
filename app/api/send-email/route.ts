import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { to, subject, text, html } = body;

    if (!to || !subject || (!text && !html)) {
      return NextResponse.json(
        { error: "Missing required fields (to, subject, text/html)" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your App Password
      },
    });

    // Send mail
    const info = await transporter.sendMail({
      from: `${subject} <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error },
      { status: 500 }
    );
  }
}
