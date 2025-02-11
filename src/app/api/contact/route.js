import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("✅ Form data received:", data);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailResponse = await resend.emails.send({
      from: "hello@new-way.ai",
      to: "karina.savoie@new-way.ai",
      reply_to: data.email,
      subject: "New Contact Form Submission",
      text: `Name: ${data.first_name} ${data.last_name}\nCompany: ${data.company}\nEmail: ${data.email}\nMessage: ${data.message}`,
    });

    console.log("✅ Email sent successfully:", emailResponse);

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error sending email via Resend:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
