"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"

type TherapyKey = "emdr" | "mindfulness" | "cbt" | "nlp" | "family" | "couples"

interface TherapyConfig {
  key: TherapyKey
  highlight: boolean
}

const therapyConfigs: TherapyConfig[] = [
  { key: "emdr", highlight: true },
  { key: "mindfulness", highlight: false },
  { key: "cbt", highlight: false },
  { key: "nlp", highlight: true },
  { key: "family", highlight: false },
  { key: "couples", highlight: false },
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
            <Card
              key={therapy.key}
              className={`group transition-all duration-300 ${
                therapy.highlight
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border/50 hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <span
                    className={`text-5xl font-light ${
                      therapy.highlight ? "text-primary-foreground/30" : "text-primary/20"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
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
