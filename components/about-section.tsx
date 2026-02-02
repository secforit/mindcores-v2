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
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[2/3] max-w-md mx-auto rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/diana-raluca-2.jpg"
                alt="Dipl. Psych. Raluca Diana Tocoian"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/30 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-8 left-8 bg-card shadow-xl rounded-xl p-6 border border-border">
              <p className="text-4xl font-light text-primary">15+</p>
              <p className="text-sm text-muted-foreground">{t("yearsOfExcellence")}</p>
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
