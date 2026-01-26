"use client"

import { useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { AssessmentForm } from "@/components/assessment-form"
import { ClipboardList } from "lucide-react"

export function AssessmentPageContent() {
  const searchParams = useSearchParams()
  const t = useTranslations("assessment")
  const tConditions = useTranslations("conditions")

  const disorder = searchParams.get("disorder") || "trauma"

  // Get the disorder title from translations
  let disorderTitle = "Trauma"
  try {
    disorderTitle = tConditions(`${disorder}.title`)
  } catch {
    disorderTitle = disorder.charAt(0).toUpperCase() + disorder.slice(1)
  }

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 bg-secondary/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <ClipboardList className="h-8 w-8 text-primary" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-4">
              {t("title")}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("intro")}
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Form Section */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AssessmentForm disorderKey={disorder} disorderTitle={disorderTitle} />
        </div>
      </section>
    </main>
  )
}
