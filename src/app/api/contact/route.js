import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("✅ Form data received:", data);

    // Create transporter for Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // ✅ Gmail email from .env.local
        pass: process.env.EMAIL_PASS, // ✅ Gmail App Password from .env.local
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "karina.savoie@new-way.ai", // ✅ Your receiving email
      replyTo: data.email, // ✅ User’s email
      subject: "New Contact Form Submission",
      text: `Name: ${data.first_name} ${data.last_name}\nCompany: ${data.company}\nEmail: ${data.email}\nMessage: ${data.message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
