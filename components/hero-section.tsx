"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award } from "lucide-react"

export function HeroSection() {
  const t = useTranslations("hero")
  const tAbout = useTranslations("about")
  const tFooter = useTranslations("footer")

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Main Hero - Photo and Introduction First */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          {/* Photo - First on mobile */}
          <div className="relative flex justify-center order-1 lg:order-1">
            <div className="relative">
              {/* Decorative elements around photo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-full blur-2xl" />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-105" />

              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="/diana-raluca.jpg"
                  alt="Dipl. Psych. Raluca Diana Tocoian"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating credential badge */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-0 bg-background border border-primary/20 rounded-xl px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">15+ {t("yearsExperience")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction - Name and Description */}
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-2">
            <div className="space-y-2">
              <p className="text-sm tracking-widest uppercase text-primary font-medium">
                {t("tagline")}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground leading-tight">
                {tAbout("titleStart")}{" "}
                <span className="text-primary font-medium">{tAbout("titleHighlight")}</span>
              </h1>
            </div>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t("heroIntro")}
            </p>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base"
              >
                <Link href="#contact">
                  {t("bookConsultation")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base border-primary/30 hover:bg-primary/5 bg-transparent"
              >
                <Link href="#services">{t("exploreServices")}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Accreditations */}
        <div className="mt-8 pt-6 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground">
            {tFooter("professionalLicense")} • {tFooter("accreditations")}
          </p>
        </div>
      </div>

    </section>
  )
}
