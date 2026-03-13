"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Globe } from "lucide-react"

export default function SexualAbusePage() {
  const t = useTranslations("conditions.sexualAbuse")
  const tContact = useTranslations("contact")

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-5xl font-light text-foreground leading-tight mb-6">
              {t("title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("intro")}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {t("couplesContext")}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {t("dynamics")}
              </p>

              <p className="text-foreground font-medium text-lg">
                {t("genderNote")}
              </p>

              <p className="text-primary font-medium text-xl">
                {t("cta")}
              </p>
            </div>

            {/* Contact Card */}
            <div className="mt-16 bg-secondary/30 rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Raluca Diana Tocoian</p>
                  <p className="text-sm text-muted-foreground">{t("languagesAvailable")}</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">{t("sessionInfo")}</p>

                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{t("appointmentsLabel")}:</span>
                  <a href={`tel:${tContact("phoneValueRo").replace(/\s/g, "")}`} className="text-sm text-primary hover:underline">
                    {tContact("phoneValueRo")}
                  </a>
                  <span className="text-muted-foreground">|</span>
                  <a href={`tel:${tContact("phoneValue").replace(/\s/g, "")}`} className="text-sm text-primary hover:underline">
                    {tContact("phoneValue")}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:connect@mindcores.org" className="text-sm text-primary hover:underline">
                    connect@mindcores.org
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild>
                  <a href="/#contact">
                    <Phone className="h-4 w-4 mr-2" />
                    {tContact("phone")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
