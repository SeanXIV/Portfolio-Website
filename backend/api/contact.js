const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Initialize transporter outside of the handler
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Middleware to handle CORS
const corsMiddleware = cors({
  origin: process.env.ALLOWED_ORIGIN || '*', // Replace with your frontend URL
  methods: ['POST', 'OPTIONS'],
});

// Helper function to run middleware
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(req, res) {
  // Handle CORS
  await runMiddleware(req, res, corsMiddleware);

  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, contactReason } = req.body;

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `
        New contact form submission:
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Reason for Contact: ${contactReason}
      `,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Reason for Contact:</strong> ${contactReason}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
