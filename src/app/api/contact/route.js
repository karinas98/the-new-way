import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("✅ Form data received:", data);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "noreply@yourdomain.com", // Ensure this is your Gmail address
      to: process.env.EMAIL_USER, // Send to yourself (check spam)
      subject: "New Contact Form Submission",
      text: `Name: ${data.first_name} ${data.last_name}\nCompany: ${data.company}\nEmail: ${data.email}\nMessage: ${data.message}`,
    };

    console.log("🚀 Sending email...");

    // Send email and capture response
    const emailResponse = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ message: "Form submitted successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
