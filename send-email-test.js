// send-email-test.js
const nodemailer = require("nodemailer");

async function sendTest() {
  try {
    // Create transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "your.email@gmail.com",       // Replace with your Gmail address
        pass: "your_16_char_app_password",  // Replace with your 16-character app password (no spaces)
      },
    });

    // Send mail
    let info = await transporter.sendMail({
      from: '"Test" <your.email@gmail.com>', // sender address
      to: "your.email@gmail.com",             // your email (receiver)
      subject: "Nodemailer Test Email",
      text: "This is a test email sent using Nodemailer with Gmail SMTP.",
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

sendTest();
