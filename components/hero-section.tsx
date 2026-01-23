"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <p className="text-sm tracking-widest uppercase text-primary font-medium">
                {t("tagline")}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground leading-tight text-balance">
                {t("titleStart")}{" "}
                <span className="text-primary font-medium italic">{t("titleHighlight")}</span>{" "}
                {t("titleEnd")}
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border/50">
              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                <div className="text-center">
                  <p className="text-3xl font-light text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">{t("yearsExperience")}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-primary">1000+</p>
                  <p className="text-sm text-muted-foreground">{t("clientsHelped")}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-primary">3</p>
                  <p className="text-sm text-muted-foreground">{t("languages")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo/Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-110 animate-pulse" />
              <div className="absolute inset-0 border border-primary/10 rounded-full scale-125" />

              {/* Logo */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Diana Raluca Psychology"
                  width={350}
                  height={350}
                  className="w-full h-full object-contain drop-shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">{t("scroll")}</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
