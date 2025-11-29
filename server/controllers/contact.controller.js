import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { logger } from "../utils/logger.js";
import { transporter } from "../utils/mailer.js";

const sendContactMail = asyncHandler(async (req, res) => {
  const { name, email, phone, message, subject } = req.body;

  // 1. Validation
  if (!name || !email || !message) {
    throw new ApiError(400, "Name, email, and message are required fields");
  }

  // 2. Build Email Template
  const mailOptions = {
    from: process.env.SMTP_USER, // Sender address (must be verified in SendGrid for production)
    to: process.env.CONTACT_EMAIL,   // Receiver address (yourself)
    replyTo: email,               // Reply to the user
    subject: `New Portfolio Contact: ${name} ${subject ? `- ${subject}` : ''}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #0f172a;
            color: #e2e8f0;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #1e293b;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            border: 1px solid #334155;
          }
          .header {
            background: linear-gradient(to right, #06b6d4, #3b82f6);
            padding: 24px;
            text-align: center;
          }
          .header h2 {
            margin: 0;
            color: #ffffff;
            font-size: 24px;
            letter-spacing: 0.5px;
          }
          .content {
            padding: 32px;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            color: #94a3b8;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 4px;
            font-weight: 600;
          }
          .value {
            color: #f1f5f9;
            font-size: 16px;
            line-height: 1.5;
          }
          .message-box {
            background-color: #0f172a;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid #334155;
            margin-top: 8px;
            white-space: pre-wrap;
          }
          .footer {
            background-color: #0f172a;
            padding: 16px;
            text-align: center;
            font-size: 12px;
            color: #64748b;
            border-top: 1px solid #334155;
          }
          .highlight {
            color: #22d3ee;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Request</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">From</div>
              <div class="value"><strong>${name}</strong></div>
            </div>
            
            <div class="field">
              <div class="label">Contact Details</div>
              <div class="value">
                Email: <a href="mailto:${email}" class="highlight">${email}</a><br>
                ${phone ? `Phone: ${phone}` : ''}
              </div>
            </div>

            ${subject ? `
            <div class="field">
              <div class="label">Subject</div>
              <div class="value">${subject}</div>
            </div>
            ` : ''}

            <div class="field">
              <div class="label">Message</div>
              <div class="value message-box">${message}</div>
            </div>
          </div>
          <div class="footer">
            <p>Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</p>
            <p>Portfolio Contact Form</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  // 3. Send Email
  try {
    const info = await transporter.sendMail(mailOptions);
    logger.info(`Email sent: ${info.messageId}`);
  } catch (error) {
    logger.error(`Email sending failed: ${error.message}`);
    throw new ApiError(500, "Failed to send email. Please try again later.");
  }

  // 4. Send Response
  return res.status(200).json(
    new ApiResponse(200, {}, "Message delivered successfully.")
  );
});

export { sendContactMail };
