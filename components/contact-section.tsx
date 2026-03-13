"use client"

import React from "react"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export function ContactSection() {
  const t = useTranslations("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ name: "", email: "", phone: "", message: "" })
    alert(t("form.successMessage"))
  }

  const languages = [
    { key: "romanian", label: t("romanian") },
    { key: "german", label: t("german") },
    { key: "english", label: t("english") },
  ]

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
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
          <p className="text-lg text-muted-foreground">{t("description")}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone */}
            <Card className="bg-secondary/30 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t("phone")}</p>
                    <a href={`tel:${t("phoneValue").replace(/\s/g, "")}`} className="block font-medium text-foreground hover:text-primary transition-colors">
                      {t("phoneValue")}
                    </a>
                    <a href={`tel:${t("phoneValueRo").replace(/\s/g, "")}`} className="block font-medium text-foreground hover:text-primary transition-colors">
                      {t("phoneValueRo")}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-secondary/30 border-border/50">
              <CardContent className="p-6">
                <a href={`mailto:${t("emailValue")}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t("email")}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {t("emailValue")}
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Location Germany */}
            <Card className="bg-secondary/30 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t("location")} - Germany</p>
                    <p className="font-medium text-foreground text-sm leading-relaxed">
                      {t("locationGermany")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Romania */}
            <Card className="bg-secondary/30 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t("location")} - Romania</p>
                    <p className="font-medium text-foreground text-sm leading-relaxed">
                      {t("locationRomania")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="bg-secondary/30 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t("hours")}</p>
                    <p className="font-medium text-foreground">
                      {t("hoursValue")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">{t("availableIn")}</p>
              <div className="flex gap-3">
                {languages.map((lang) => (
                  <span
                    key={lang.key}
                    className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground"
                  >
                    {lang.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-3 bg-card border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      {t("form.fullName")}
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t("form.yourName")}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      {t("form.emailAddress")}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t("form.emailPlaceholder")}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    {t("form.phoneNumber")}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t("form.phonePlaceholder")}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    {t("form.yourMessage")}
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("form.messagePlaceholder")}
                    rows={5}
                    required
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                >
                  {isSubmitting ? (
                    t("form.sending")
                  ) : (
                    <>
                      {t("form.sendMessage")}
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  {t("form.privacyNotice")}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
