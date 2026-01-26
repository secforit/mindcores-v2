"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { useLocale } from "@/components/providers/locale-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { submitAssessment, type AssessmentFormData } from "@/app/actions/assessment"
import { getTraumaChecklist, type TraumaChecklist } from "@/lib/assessment-data"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Loader2,
  ClipboardList,
  User,
  Mail,
  Phone,
  FileText,
} from "lucide-react"

interface AssessmentFormProps {
  disorderKey: string
  disorderTitle: string
}

export function AssessmentForm({ disorderKey, disorderTitle }: AssessmentFormProps) {
  const t = useTranslations("assessment")
  const { locale } = useLocale()
  const traumaChecklist = getTraumaChecklist(locale)

  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    additionalNotes: "",
  })

  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({})

  const handleItemToggle = (itemId: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }))
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    // Build responses object with text labels instead of IDs
    const responses: Record<string, boolean | string> = {}

    traumaChecklist.sections.forEach((section) => {
      section.items.forEach((item) => {
        if (selectedItems[item.id]) {
          responses[`[${section.title}] ${item.text}`] = true
        }
      })
    })

    traumaChecklist.healthyIdentity.items.forEach((item) => {
      if (selectedItems[item.id]) {
        responses[`[${traumaChecklist.healthyIdentity.title}] ${item.text}`] = true
      }
    })

    const data: AssessmentFormData = {
      clientName: formData.clientName,
      clientEmail: formData.clientEmail,
      clientPhone: formData.clientPhone || undefined,
      disorder: disorderTitle,
      language: locale.toUpperCase(),
      responses,
      additionalNotes: formData.additionalNotes || undefined,
    }

    try {
      const result = await submitAssessment(data)
      setSubmitResult(result)
      if (result.success) {
        setStep(4)
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: t("error"),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const totalSections = traumaChecklist.sections.length + 1
  const selectedCount = Object.values(selectedItems).filter(Boolean).length

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            {t("step")} {step} {t("of")} 3
          </span>
          <span className="text-sm text-primary font-medium">
            {selectedCount} {t("itemsSelected")}
          </span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Personal Information */}
      {step === 1 && (
        <Card className="border-border/50">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl font-light">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              {t("personalInfo")}
            </CardTitle>
            <p className="text-muted-foreground">{t("personalInfoDesc")}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="clientName" className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                {t("fullName")} *
              </Label>
              <Input
                id="clientName"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
                placeholder={t("fullNamePlaceholder")}
                required
                className="border-border/50 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientEmail" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                {t("email")} *
              </Label>
              <Input
                id="clientEmail"
                name="clientEmail"
                type="email"
                value={formData.clientEmail}
                onChange={handleInputChange}
                placeholder={t("emailPlaceholder")}
                required
                className="border-border/50 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientPhone" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                {t("phone")}
              </Label>
              <Input
                id="clientPhone"
                name="clientPhone"
                type="tel"
                value={formData.clientPhone}
                onChange={handleInputChange}
                placeholder={t("phonePlaceholder")}
                className="border-border/50 focus:border-primary"
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button
                type="button"
                onClick={() => setStep(2)}
                disabled={!formData.clientName || !formData.clientEmail}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              >
                {t("continue")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Trauma Checklist */}
      {step === 2 && (
        <Card className="border-border/50">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl font-light">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <ClipboardList className="h-5 w-5 text-primary" />
              </div>
              {traumaChecklist.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground italic">
              {traumaChecklist.author}
            </p>
            <p className="text-muted-foreground mt-2">{t("checklistDesc")}</p>
          </CardHeader>
          <CardContent className="space-y-8">
            {traumaChecklist.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4">
                <h3 className="text-lg font-medium text-foreground border-b border-border/50 pb-2">
                  {section.title}
                </h3>
                <div className="grid gap-3">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-start gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                        selectedItems[item.id]
                          ? "bg-primary/10 border border-primary/30"
                          : "bg-secondary/30 hover:bg-secondary/50"
                      }`}
                      onClick={() => handleItemToggle(item.id)}
                    >
                      <Checkbox
                        id={item.id}
                        checked={selectedItems[item.id] || false}
                        onCheckedChange={() => handleItemToggle(item.id)}
                        className="mt-0.5"
                      />
                      <Label
                        htmlFor={item.id}
                        className="text-sm leading-relaxed cursor-pointer flex-1"
                      >
                        {item.text}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Healthy Identity Section */}
            <div className="space-y-4 pt-4 border-t border-primary/20">
              <h3 className="text-lg font-medium text-primary">
                {traumaChecklist.healthyIdentity.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("healthyIdentityDesc")}
              </p>
              <div className="grid gap-3">
                {traumaChecklist.healthyIdentity.items.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                      selectedItems[item.id]
                        ? "bg-green-500/10 border border-green-500/30"
                        : "bg-secondary/30 hover:bg-secondary/50"
                    }`}
                    onClick={() => handleItemToggle(item.id)}
                  >
                    <Checkbox
                      id={item.id}
                      checked={selectedItems[item.id] || false}
                      onCheckedChange={() => handleItemToggle(item.id)}
                      className="mt-0.5"
                    />
                    <Label
                      htmlFor={item.id}
                      className="text-sm leading-relaxed cursor-pointer flex-1"
                    >
                      {item.text}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="rounded-full px-8 border-primary/30"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("back")}
              </Button>
              <Button
                type="button"
                onClick={() => setStep(3)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              >
                {t("continue")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Additional Notes & Submit */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <Card className="border-border/50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-2xl font-light">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                {t("additionalInfo")}
              </CardTitle>
              <p className="text-muted-foreground">{t("additionalInfoDesc")}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="additionalNotes">{t("notes")}</Label>
                <Textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  placeholder={t("notesPlaceholder")}
                  rows={5}
                  className="border-border/50 focus:border-primary resize-none"
                />
              </div>

              {/* Summary */}
              <div className="bg-secondary/30 rounded-xl p-6 space-y-4">
                <h4 className="font-medium text-foreground">{t("summary")}</h4>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("fullName")}:</span>
                    <span className="font-medium">{formData.clientName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("email")}:</span>
                    <span className="font-medium">{formData.clientEmail}</span>
                  </div>
                  {formData.clientPhone && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("phone")}:</span>
                      <span className="font-medium">{formData.clientPhone}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("condition")}:</span>
                    <span className="font-medium">{disorderTitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("itemsSelected")}:</span>
                    <span className="font-medium text-primary">{selectedCount}</span>
                  </div>
                </div>
              </div>

              {submitResult && !submitResult.success && (
                <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-600">
                  <AlertCircle className="h-5 w-5" />
                  <span>{submitResult.message}</span>
                </div>
              )}

              <p className="text-xs text-muted-foreground">{t("privacyNotice")}</p>

              <div className="flex justify-between pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="rounded-full px-8 border-primary/30"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t("back")}
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("submitting")}
                    </>
                  ) : (
                    <>
                      {t("submit")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      )}

      {/* Step 4: Success */}
      {step === 4 && (
        <Card className="border-border/50">
          <CardContent className="py-16 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-light text-foreground">
                {t("successTitle")}
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                {t("successMessage")}
              </p>
            </div>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
            >
              <a href="/">{t("backToHome")}</a>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
