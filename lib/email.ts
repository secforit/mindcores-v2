import nodemailer from "nodemailer"

export interface EmailConfig {
  host: string
  port: number
  secure: boolean
  auth: {
    user: string
    pass: string
  }
}

export interface AssessmentEmailData {
  recipientEmail: string
  clientName: string
  clientEmail: string
  clientPhone?: string
  disorder: string
  language: string
  responses: Record<string, boolean | string>
  additionalNotes?: string
}

export async function sendAssessmentEmail(
  config: EmailConfig,
  data: AssessmentEmailData
): Promise<{ success: boolean; error?: string }> {
  try {
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.auth,
    })

    const responsesList = Object.entries(data.responses)
      .filter(([_, value]) => value === true || (typeof value === "string" && value.trim() !== ""))
      .map(([key, value]) => {
        if (typeof value === "boolean") {
          return `• ${key}`
        }
        return `• ${key}: ${value}`
      })
      .join("\n")

    const htmlResponses = Object.entries(data.responses)
      .filter(([_, value]) => value === true || (typeof value === "string" && value.trim() !== ""))
      .map(([key, value]) => {
        if (typeof value === "boolean") {
          return `<li style="margin-bottom: 8px;">${key}</li>`
        }
        return `<li style="margin-bottom: 8px;"><strong>${key}:</strong> ${value}</li>`
      })
      .join("")

    const mailOptions = {
      from: config.auth.user,
      to: data.recipientEmail,
      subject: `New Assessment Form: ${data.disorder} - ${data.clientName}`,
      text: `
NEW ASSESSMENT FORM SUBMISSION
==============================

Client Information:
- Name: ${data.clientName}
- Email: ${data.clientEmail}
- Phone: ${data.clientPhone || "Not provided"}

Assessment Details:
- Disorder/Condition: ${data.disorder}
- Language: ${data.language}

Selected Items:
${responsesList}

Additional Notes:
${data.additionalNotes || "None"}

-------------------------------
Submitted via Mindcores Assessment Form
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Georgia', serif; line-height: 1.6; color: #1a1a1a; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #b8860b 0%, #daa520 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-weight: 300; font-size: 24px; }
    .content { background: #faf9f6; padding: 30px; border: 1px solid #e8e4dc; }
    .section { margin-bottom: 25px; }
    .section-title { color: #b8860b; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; border-bottom: 1px solid #e8e4dc; padding-bottom: 5px; }
    .info-row { margin-bottom: 8px; }
    .info-label { font-weight: 600; color: #666; }
    .responses-list { list-style: none; padding: 0; margin: 0; }
    .responses-list li { padding: 10px; background: white; margin-bottom: 5px; border-radius: 4px; border-left: 3px solid #b8860b; }
    .notes { background: white; padding: 15px; border-radius: 4px; font-style: italic; color: #666; }
    .footer { text-align: center; padding: 20px; color: #888; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Assessment Form Submission</h1>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Client Information</div>
        <div class="info-row"><span class="info-label">Name:</span> ${data.clientName}</div>
        <div class="info-row"><span class="info-label">Email:</span> ${data.clientEmail}</div>
        <div class="info-row"><span class="info-label">Phone:</span> ${data.clientPhone || "Not provided"}</div>
      </div>

      <div class="section">
        <div class="section-title">Assessment Details</div>
        <div class="info-row"><span class="info-label">Condition:</span> ${data.disorder}</div>
        <div class="info-row"><span class="info-label">Language:</span> ${data.language}</div>
      </div>

      <div class="section">
        <div class="section-title">Selected Items</div>
        <ul class="responses-list">
          ${htmlResponses || "<li>No items selected</li>"}
        </ul>
      </div>

      ${data.additionalNotes ? `
      <div class="section">
        <div class="section-title">Additional Notes</div>
        <div class="notes">${data.additionalNotes}</div>
      </div>
      ` : ""}
    </div>
    <div class="footer">
      Submitted via Mindcores Assessment Form<br>
      © ${new Date().getFullYear()} Mindcores - Diana Raluca Tocoian
    </div>
  </div>
</body>
</html>
      `,
    }

    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Email send error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    }
  }
}
