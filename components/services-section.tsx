"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Brain,
  CloudRain,
  Shield,
  Users,
  Sparkles,
  Flame,
  Link2,
  Zap,
  Heart,
  Utensils,
  Flower2,
  Baby,
  HeartPulse,
  User,
  Activity,
  Puzzle,
  type LucideIcon
} from "lucide-react"

type DisorderKey =
  | "anxiety"
  | "depression"
  | "trauma"
  | "addiction"
  | "adhd"
  | "attachment"
  | "eatingDisorders"
  | "grief"
  | "relationships"
  | "stress"
  | "perinatal"
  | "sexualDysfunction"
  | "mensMentalHealth"
  | "bipolar"
  | "personality"
  | "selfEsteem"

interface DisorderConfig {
  icon: LucideIcon
  href: string
}

const disorderConfig: Record<DisorderKey, DisorderConfig> = {
  anxiety: { icon: Brain, href: "/conditions/anxiety" },
  depression: { icon: CloudRain, href: "/conditions/depression" },
  trauma: { icon: Shield, href: "/conditions/trauma" },
  addiction: { icon: Link2, href: "/conditions/addiction" },
  adhd: { icon: Zap, href: "/conditions/adhd" },
  attachment: { icon: Heart, href: "/conditions/attachment" },
  eatingDisorders: { icon: Utensils, href: "/conditions/eating-disorders" },
  grief: { icon: Flower2, href: "/conditions/grief" },
  relationships: { icon: Users, href: "/conditions/relationships" },
  stress: { icon: Flame, href: "/conditions/stress" },
  perinatal: { icon: Baby, href: "/conditions/perinatal" },
  sexualDysfunction: { icon: HeartPulse, href: "/conditions/sexual-dysfunction" },
  mensMentalHealth: { icon: User, href: "/conditions/mens-mental-health" },
  bipolar: { icon: Activity, href: "/conditions/bipolar" },
  personality: { icon: Puzzle, href: "/conditions/personality" },
  selfEsteem: { icon: Sparkles, href: "/conditions/self-esteem" },
}

const featuredKeys: DisorderKey[] = ["anxiety", "depression", "trauma"]

const compactKeys: DisorderKey[] = [
  "addiction",
  "adhd",
  "attachment",
  "eatingDisorders",
  "grief",
  "relationships",
  "stress",
  "perinatal",
  "sexualDysfunction",
  "mensMentalHealth",
  "bipolar",
  "personality",
  "selfEsteem",
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

        {/* Featured Conditions */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {featuredKeys.map((key) => {
            const config = disorderConfig[key]
            const Icon = config.icon
            return (
              <Link
                key={key}
                href={config.href}
                className="group relative flex flex-col gap-5 p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-300" />
                <div className="relative flex flex-col gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-foreground mb-2">
                      {t(`disorders.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {t(`disorders.${key}.description`)}
                    </p>
                  </div>
                  <div className="flex items-center text-sm font-medium text-primary">
                    {t("learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Additional Specializations */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {compactKeys.map((key) => {
            const config = disorderConfig[key]
            const Icon = config.icon
            return (
              <Link
                key={key}
                href={config.href}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/40 bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200 whitespace-nowrap">
                  {t(`disorders.${key}.title`)}
                </span>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
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
