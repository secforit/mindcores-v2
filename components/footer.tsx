"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Mail, Phone, MapPin, Award } from "lucide-react"

export function Footer() {
  const t = useTranslations("footer")
  const tNav = useTranslations("nav")
  const tContact = useTranslations("contact")

  const quickLinks = [
    { name: tNav("home"), href: "/" },
    { name: tNav("about"), href: "/#about" },
    { name: tNav("services"), href: "/#services" },
    { name: tNav("therapies"), href: "/#therapies" },
    { name: tNav("contact"), href: "/#contact" },
  ]

  const services = [
    { name: t("anxietyTreatment"), href: "/conditions/anxiety" },
    { name: t("depressionTherapy"), href: "/conditions/depression" },
    { name: t("traumaPTSD"), href: "/conditions/trauma" },
    { name: t("couplesCounseling"), href: "/conditions/relationships" },
    { name: t("assessment"), href: "/assessment" },
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
                alt="Mindcores"
                width={50}
                height={50}
                className="h-12 w-12 brightness-0 invert"
              />
              <div>
                <p className="text-lg font-semibold tracking-wide">{t("brandName")}</p>
                <p className="text-xs text-background/60 tracking-widest uppercase">Psychology</p>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              {t("brandDescription")}
            </p>
            <div className="flex items-center gap-2 text-xs text-background/50">
              <Award className="h-4 w-4 text-primary" />
              <span>{t("professionalLicense")}</span>
            </div>
            <div className="text-xs text-background/50 leading-relaxed mt-2">
              {t("accreditations")}
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-3">
              {[
                { src: "/accreditations/cpr-romania.jpeg", alt: "CPR Romania" },
                { src: "/accreditations/bdp.png", alt: "BDP" },
                { src: "/accreditations/iopt.png", alt: "IoPT" },
                { src: "/accreditations/dvnlp.png", alt: "DVNLP" },
                { src: "/accreditations/vfp.jpeg", alt: "VFP" },
                { src: "/accreditations/eca-nexus.jpg", alt: "Schweizerische Eidgenossenschaft" },
              ].map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={40}
                  height={40}
                  className="h-8 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
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
                <div className="text-sm text-background/70">
                  <p className="font-medium text-background/90 mb-1">Germany</p>
                  <span>{tContact("locationGermany")}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm text-background/70">
                  <p className="font-medium text-background/90 mb-1">Romania</p>
                  <span>{tContact("locationRomania")}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${tContact("phoneValue").replace(/\s/g, "")}`}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {tContact("phoneValue")}
                  </a>
                  <a
                    href={`tel:${tContact("phoneValueRo").replace(/\s/g, "")}`}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {tContact("phoneValueRo")}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href={`mailto:${tContact("emailValue")}`}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {tContact("emailValue")}
                </a>
              </li>
            </ul>
          </div>
        </div>


        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Mindcores - Raluca-Diana Tocoian. {t("allRightsReserved")}
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
