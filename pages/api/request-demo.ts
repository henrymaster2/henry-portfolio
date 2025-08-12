// pages/api/request-demo.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, company, email, phone, message } = req.body;

  if (!name || !company || !email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Create reusable transporter object using SMTP transport.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: (process.env.SMTP_SECURE === "true") || true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "your-email@gmail.com", // your Gmail address
        pass: process.env.SMTP_PASS || "fxoycknhepdjbruj", // your 16-digit app password (no spaces)
      },
    });

    // Prepare email content
    const mailOptions = {
      from: `"${name}" <${email}>`, // sender address as user input
      to: process.env.DEMO_REQUEST_RECEIVER_EMAIL || "your-email@gmail.com", // your receiving email address
      subject: "New Demo Request from FinLink Pay Website",
      text: `
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone ?? "N/A"}
Message: ${message ?? "N/A"}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Demo request received successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send demo request email." });
  }
}
