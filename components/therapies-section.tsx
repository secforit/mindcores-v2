"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

type TherapyKey = "emdr" | "mindfulness" | "cbt" | "nlp" | "family" | "couples" | "positivePsychotherapy" | "systemicConstellation" | "solutionFocused" | "identityTrauma" | "schemaTherapy" | "dbt" | "act" | "systemicCounseling" | "bioenergetic"

interface TherapyConfig {
  key: TherapyKey
  highlight: boolean
  slug: string
}

const therapyConfigs: TherapyConfig[] = [
  { key: "emdr", highlight: true, slug: "emdr" },
  { key: "mindfulness", highlight: false, slug: "mindfulness" },
  { key: "cbt", highlight: false, slug: "cbt" },
  { key: "nlp", highlight: true, slug: "nlp" },
  { key: "family", highlight: false, slug: "family" },
  { key: "couples", highlight: false, slug: "couples" },
  { key: "positivePsychotherapy", highlight: false, slug: "positive-psychotherapy" },
  { key: "systemicConstellation", highlight: true, slug: "systemic-constellation" },
  { key: "solutionFocused", highlight: false, slug: "solution-focused" },
  { key: "identityTrauma", highlight: false, slug: "identity-trauma" },
  { key: "schemaTherapy", highlight: false, slug: "schema-therapy" },
  { key: "dbt", highlight: true, slug: "dbt" },
  { key: "act", highlight: false, slug: "act" },
  { key: "systemicCounseling", highlight: false, slug: "systemic-counseling" },
  { key: "bioenergetic", highlight: false, slug: "bioenergetic" },
]

export function TherapiesSection() {
  const t = useTranslations("therapies")

  return (
    <section id="therapies" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div className="space-y-4">
            <p className="text-sm tracking-widest uppercase text-primary font-medium">
              {t("tagline")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-foreground leading-tight">
              {t("titleStart")}{" "}
              <span className="text-primary font-medium italic">{t("titleHighlight")}</span>{" "}
              {t("titleEnd")}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            {t("description")}
          </p>
        </div>

        {/* Therapies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapyConfigs.map((therapy, index) => (
            <Link key={therapy.key} href={`/therapies/${therapy.slug}`}>
              <Card
                className={`group transition-all duration-300 h-full cursor-pointer ${
                  therapy.highlight
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                    : "bg-card border-border/50 hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span
                        className={`text-5xl font-light ${
                          therapy.highlight ? "text-primary-foreground/30" : "text-primary/20"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <ArrowRight
                        className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                          therapy.highlight ? "text-primary-foreground/60" : "text-primary/40"
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-xl font-medium ${
                        therapy.highlight ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {t(`items.${therapy.key}.name`)}
                    </h3>
                    <p
                      className={`leading-relaxed ${
                        therapy.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                      }`}
                    >
                      {t(`items.${therapy.key}.description`)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("bottomNote")}
          </p>
        </div>
      </div>
    </section>
  )
}
