"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/components/providers/locale-provider"
import { localeFlags, type Locale, locales } from "@/i18n/config"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations("nav")
  const { locale, setLocale } = useLocale()

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "#about" },
    { name: t("services"), href: "#services" },
    { name: t("therapies"), href: "#therapies" },
    { name: t("contact"), href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Diana Raluca Psychology"
            width={50}
            height={50}
            className="h-12 w-12"
          />
          <div className="hidden sm:block">
            <p className="text-lg font-semibold text-foreground tracking-wide">Diana Raluca</p>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">Psychology</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Language Switcher & CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <div className="flex items-center gap-1 border border-border rounded-full px-1 py-1">
            {locales.map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang as Locale)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                  locale === lang
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {localeFlags[lang as Locale]}
              </button>
            ))}
          </div>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
          >
            <Link href="#contact">{t("bookConsultation")}</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-6 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center gap-2 mb-4">
                {locales.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLocale(lang as Locale)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      locale === lang
                        ? "bg-primary text-primary-foreground"
                        : "border border-border text-muted-foreground"
                    }`}
                  >
                    {localeFlags[lang as Locale]}
                  </button>
                ))}
              </div>
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              >
                <Link href="#contact">{t("bookConsultation")}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
