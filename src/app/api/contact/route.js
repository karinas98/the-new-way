import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("✅ Form data received:", data);

    // Create transporter with dedicated Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: true,
      },
    });

    // Email content remains the same
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "karina.savoie@new-way.ai",
      replyTo: data.email,
      subject: "New Contact Form Submission",
      text: `Name: ${data.first_name} ${data.last_name}\nCompany: ${data.company}\nEmail: ${data.email}\nMessage: ${data.message}`,
    };

    // Verify connection configuration
    await transporter.verify();
    console.log("✅ SMTP connection verified");

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
