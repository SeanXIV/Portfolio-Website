// server.js
const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, contactReason } = req.body;

    const msg = {
      to: 'andrewseanego14@gmail.com', // Your email
      from: process.env.SENDGRID_VERIFIED_SENDER, // Your verified SendGrid sender
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

    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});