"use server"

import { sendAssessmentEmail, type AssessmentEmailData } from "@/lib/email"

export interface AssessmentFormData {
  clientName: string
  clientEmail: string
  clientPhone?: string
  disorder: string
  language: string
  responses: Record<string, boolean | string>
  additionalNotes?: string
}

export async function submitAssessment(
  formData: AssessmentFormData
): Promise<{ success: boolean; message: string }> {
  // Validate required fields
  if (!formData.clientName || !formData.clientEmail) {
    return {
      success: false,
      message: "Name and email are required",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.clientEmail)) {
    return {
      success: false,
      message: "Invalid email address",
    }
  }

  // Get SMTP configuration from environment variables
  const smtpConfig = {
    host: process.env.SMTP_HOST || "",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || "",
    },
  }

  // Check if SMTP is configured
  if (!smtpConfig.host || !smtpConfig.auth.user || !smtpConfig.auth.pass) {
    console.error("SMTP not configured")
    // In development, log the form data instead
    console.log("Assessment form submission:", formData)
    return {
      success: true,
      message: "Form submitted successfully (development mode)",
    }
  }

  const emailData: AssessmentEmailData = {
    recipientEmail: process.env.ASSESSMENT_RECIPIENT_EMAIL || "lisman.razvan@icloud.com",
    clientName: formData.clientName,
    clientEmail: formData.clientEmail,
    clientPhone: formData.clientPhone,
    disorder: formData.disorder,
    language: formData.language,
    responses: formData.responses,
    additionalNotes: formData.additionalNotes,
  }

  const result = await sendAssessmentEmail(smtpConfig, emailData)

  if (result.success) {
    return {
      success: true,
      message: "Assessment submitted successfully. We will contact you soon.",
    }
  } else {
    return {
      success: false,
      message: result.error || "Failed to submit assessment. Please try again.",
    }
  }
}
