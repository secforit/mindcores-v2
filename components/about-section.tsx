"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  const t = useTranslations("about")

  const qualifications = t.raw("qualifications.items") as string[]

  const values = [
    {
      title: t("values.compassionateCare.title"),
      description: t("values.compassionateCare.description"),
    },
    {
      title: t("values.evidenceBased.title"),
      description: t("values.evidenceBased.description"),
    },
    {
      title: t("values.confidential.title"),
      description: t("values.confidential.description"),
    },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Logo Side */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl blur-2xl" />
              <div className="absolute -inset-4 border-2 border-primary/10 rounded-3xl" />

              {/* Logo container */}
              <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-12 border border-border shadow-xl">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                  <Image
                    src="/logo.png"
                    alt="Mindcores Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-light text-foreground">Mindcores</h3>
                  <p className="text-sm text-muted-foreground">Psychology Practice</p>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-card shadow-xl rounded-xl p-4 border border-border">
                <p className="text-3xl font-light text-primary">15+</p>
                <p className="text-xs text-muted-foreground">{t("yearsOfExcellence")}</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
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

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("description")}
            </p>

            {/* Qualifications */}
            <div className="space-y-3">
              {qualifications.map((qual) => (
                <div key={qual} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{qual}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-border">
              {values.map((value) => (
                <div key={value.title} className="space-y-2">
                  <h3 className="font-medium text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
