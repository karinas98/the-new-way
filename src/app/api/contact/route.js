import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("✅ Form data received:", data);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // Use a separate sender email if possible
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Website Contact" <no-reply@yourdomain.com>`, // Use a no-reply email
      to: "karina.savoie@new-way.ai", // Your receiving email
      subject: `New Contact Form Submission`,
      text: `Message from ${first_name} ${last_name}: ${message}`,
    };

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
