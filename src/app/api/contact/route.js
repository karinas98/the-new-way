const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false, // Use true for port 465
  auth: {
    user: "apikey", // This is required, literally "apikey"
    pass: process.env.SENDGRID_API_KEY, // Store your key in environment variables
  },
});

const mailOptions = {
  from: "your-email@yourdomain.com",
  to: "recipient@example.com",
  subject: "Test Email from Nodemailer via SendGrid",
  text: "Hello! This is a test email sent using Nodemailer with SendGrid SMTP.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error sending email:", error);
  } else {
    console.log("Email sent successfully:", info.response);
  }
});
