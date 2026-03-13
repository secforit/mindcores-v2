"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Calendar, Globe, Users, Clock, CheckCircle } from "lucide-react"

export default function IoPTTrainingPage() {
  const t = useTranslations("ioptTraining")

  const modules = t.raw("training.modules") as Array<{ title: string; description: string }>
  const facilitates = t.raw("training.facilitates") as string[]
  const requirements = t.raw("training.requirements") as string[]

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <p className="text-sm tracking-widest uppercase text-primary font-medium mb-4">
              {t("training.tagline")}
            </p>
            <h1 className="text-3xl sm:text-5xl font-light text-foreground leading-tight mb-6">
              {t("pageTitle")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("training.intro")}
            </p>
          </div>
        </section>

        {/* Training Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <p className="text-lg font-medium text-foreground">{t("training.trainerName")}</p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>{t("training.description1")}</p>
              <p>{t("training.description2")}</p>
              <p>{t("training.description3")}</p>
              <p>{t("training.description4")}</p>
            </div>

            {/* Facilitates */}
            <div className="mt-12">
              <h2 className="text-2xl font-light text-foreground mb-6">{t("training.facilitatesTitle")}</h2>
              <ul className="space-y-3">
                {facilitates.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program Structure */}
            <div className="mt-16">
              <h2 className="text-2xl font-light text-foreground mb-4">{t("training.structureTitle")}</h2>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full">
                  <Clock className="h-4 w-4 text-primary" />
                  {t("training.duration")}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full">
                  <Globe className="h-4 w-4 text-primary" />
                  {t("training.format")}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {modules.map((module, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl font-light text-primary/30">{index + 1}</span>
                        <div>
                          <h3 className="font-medium text-foreground mb-2">{module.title}</h3>
                          <p className="text-sm text-muted-foreground">{module.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-16">
              <h2 className="text-2xl font-light text-foreground mb-6">{t("training.requirementsTitle")}</h2>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center bg-primary/5 rounded-2xl p-12">
              <h2 className="text-2xl font-light text-foreground mb-4">{t("training.ctaTitle")}</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t("training.ctaDescription")}</p>
              <Button size="lg" asChild>
                <a href="/#contact">{t("training.ctaButton")}</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Intervision Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <p className="text-sm tracking-widest uppercase text-primary font-medium mb-4">
              {t("intervision.tagline")}
            </p>
            <h2 className="text-3xl font-light text-foreground leading-tight mb-8">
              {t("intervision.title")}
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>{t("intervision.intro")}</p>
              <p>{t("intervision.purpose")}</p>
            </div>

            {/* Details */}
            <div className="mt-10">
              <h3 className="text-xl font-medium text-foreground mb-6">{t("intervision.detailsTitle")}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{t("intervision.format")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{t("intervision.context")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{t("intervision.language")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{t("intervision.calendar")}</span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-muted-foreground leading-relaxed">
              {t("intervision.openInvitation")}
            </p>

            <div className="mt-6 space-y-2">
              <p className="text-muted-foreground font-medium">{t("intervision.registration")}</p>
              <p className="text-muted-foreground">{t("intervision.cost")}</p>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-background rounded-2xl p-10 text-center">
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">{t("intervision.ctaDescription")}</p>
              <Button size="lg" asChild className="mb-6">
                <a href={`mailto:${t("intervision.email")}`}>{t("intervision.ctaButton")}</a>
              </Button>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>{t("intervision.emailLabel")}</span>
                <a href={`mailto:${t("intervision.email")}`} className="text-primary hover:underline">
                  {t("intervision.email")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
