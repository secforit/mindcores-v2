"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const t = useTranslations("footer")
  const tNav = useTranslations("nav")

  const quickLinks = [
    { name: tNav("home"), href: "/" },
    { name: tNav("about"), href: "#about" },
    { name: tNav("services"), href: "#services" },
    { name: tNav("therapies"), href: "#therapies" },
    { name: tNav("contact"), href: "#contact" },
  ]

  const services = [
    { name: t("anxietyTreatment"), href: "#services" },
    { name: t("depressionTherapy"), href: "#services" },
    { name: t("traumaPTSD"), href: "#services" },
    { name: t("couplesCounseling"), href: "#services" },
    { name: t("groupPrograms"), href: "#services" },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Diana Raluca Psychology"
                width={50}
                height={50}
                className="h-12 w-12 brightness-0 invert"
              />
              <div>
                <p className="text-lg font-semibold tracking-wide">Diana Raluca</p>
                <p className="text-xs text-background/60 tracking-widest uppercase">Psychology</p>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              {t("brandDescription")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">
              {t("services")}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">
              {t("contact")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">
                  Str. Poetului 1-3
                  <br />
                  Arad, Romania
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+40700000000"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  +40 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:contact@mindcores.org"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  contact@mindcores.org
                </a>
              </li>
            </ul>
          </div>
        </div>


        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Diana Raluca Psychology. {t("allRightsReserved")}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-background/50 hover:text-primary transition-colors"
              >
                {t("privacyPolicy")}
              </Link>
              <Link
                href="/impressum"
                className="text-sm text-background/50 hover:text-primary transition-colors"
              >
                {t("impressum")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
