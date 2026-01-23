"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Brain,
  Heart,
  Shield,
  Users,
  Sparkles,
  Leaf,
  type LucideIcon
} from "lucide-react"

type DisorderKey =
  | "anxiety"
  | "depression"
  | "trauma"
  | "relationships"
  | "stress"
  | "personalGrowth"

const disorderIcons: Record<DisorderKey, LucideIcon> = {
  anxiety: Brain,
  depression: Heart,
  trauma: Shield,
  relationships: Users,
  stress: Sparkles,
  personalGrowth: Leaf,
}

const disorderKeys: DisorderKey[] = [
  "anxiety",
  "depression",
  "trauma",
  "relationships",
  "stress",
  "personalGrowth",
]

export function ServicesSection() {
  const t = useTranslations("services")

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm tracking-widest uppercase text-primary font-medium mb-4">
            {t("tagline")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-foreground leading-tight mb-6">
            {t("titleStart")}{" "}
            <span className="text-primary font-medium italic">{t("titleHighlight")}</span>{" "}
            {t("titleEnd")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disorderKeys.map((key) => {
            const Icon = disorderIcons[key]
            return (
              <Card
                key={key}
                className="group bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground">
                      {t(`disorders.${key}.title`)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`disorders.${key}.description`)}
                    </p>
                    <Link
                      href="#contact"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {t("learnMore")}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
          >
            <Link href="#contact">
              {t("scheduleConsultation")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
