"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  ClipboardList,
  AlertTriangle,
  Stethoscope,
  Brain,
  CloudRain,
  Shield,
  Link2,
  Zap,
  Heart,
  Utensils,
  Flower2,
  Users,
  Flame,
  Baby,
  HeartPulse,
  User,
  Activity,
  Puzzle,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

type IconName =
  | "Brain"
  | "CloudRain"
  | "Shield"
  | "Link2"
  | "Zap"
  | "Heart"
  | "Utensils"
  | "Flower2"
  | "Users"
  | "Flame"
  | "Baby"
  | "HeartPulse"
  | "User"
  | "Activity"
  | "Puzzle"
  | "Sparkles"

const iconMap: Record<IconName, LucideIcon> = {
  Brain,
  CloudRain,
  Shield,
  Link2,
  Zap,
  Heart,
  Utensils,
  Flower2,
  Users,
  Flame,
  Baby,
  HeartPulse,
  User,
  Activity,
  Puzzle,
  Sparkles,
}

interface DisorderPageProps {
  disorderKey: string
  iconName: IconName
}

export function DisorderPage({ disorderKey, iconName }: DisorderPageProps) {
  const t = useTranslations(`conditions.${disorderKey}`)
  const tNav = useTranslations("nav")
  const tAssessment = useTranslations("assessment")

  const Icon = iconMap[iconName]

  // Get symptoms array
  const symptoms = t.raw("symptoms.items") as string[]

  // Get types - we need to handle this dynamically
  const typesData = t.raw("types") as Record<string, { name: string; description: string } | string>
  const typeKeys = Object.keys(typesData).filter((key) => key !== "title")

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-secondary/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm tracking-widest uppercase text-primary font-medium">
                {tNav("conditions")}
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6">
              {t("title")}
            </h1>

            <p className="text-xl text-primary font-medium italic mb-8">{t("subtitle")}</p>

            <p className="text-lg text-muted-foreground leading-relaxed">{t("intro")}</p>

            {t.has("detailedDescription") && (
              <p className="text-base text-muted-foreground leading-relaxed mt-6">
                {t("detailedDescription")}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-light text-foreground mb-8">
                {t("symptoms.title")}
              </h2>
              <div className="space-y-4">
                {symptoms.map((symptom, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl"
                  >
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{symptom}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Types Section */}
            <div>
              <h2 className="text-3xl font-light text-foreground mb-8">{t("types.title")}</h2>
              <div className="space-y-4">
                {typeKeys.map((typeKey, index) => {
                  const typeData = typesData[typeKey] as { name: string; description: string }
                  return (
                    <Card
                      key={typeKey}
                      className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <span className="text-3xl font-light text-primary/30">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h3 className="text-lg font-medium text-foreground mb-2">
                              {typeData.name}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {typeData.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics (if available) */}
      {t.has("statistics") && (
        <section className="py-12 bg-primary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-foreground leading-relaxed italic">
                {t("statistics")}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* PTSD Note (if available) */}
      {t.has("ptsdNote") && (
        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card border border-primary/20 rounded-xl p-6">
                <p className="text-foreground leading-relaxed">{t("ptsdNote")}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Physical Symptoms (anxiety, trauma) */}
      {t.has("physicalSymptoms.title") && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-8">
                {t("physicalSymptoms.title")}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {(t.raw("physicalSymptoms.items") as string[]).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl"
                  >
                    <Stethoscope className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Triggers (anxiety) */}
      {t.has("triggers.title") && (
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-4">
                {t("triggers.title")}
              </h2>
              {t.has("triggers.description") && (
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t("triggers.description")}
                </p>
              )}
              <div className="space-y-3">
                {(t.raw("triggers.items") as string[]).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-background rounded-xl"
                  >
                    <AlertTriangle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Causes (11 conditions) */}
      {t.has("causes.title") && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-8">
                {t("causes.title")}
              </h2>
              <div className="space-y-3">
                {(t.raw("causes.items") as string[]).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl"
                  >
                    <span className="text-xl font-light text-primary shrink-0">{index + 1}</span>
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Warning Signs Detailed (depression) */}
      {t.has("warningSignsDetailed.title") && (
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-4">
                {t("warningSignsDetailed.title")}
              </h2>
              {t.has("warningSignsDetailed.description") && (
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t("warningSignsDetailed.description")}
                </p>
              )}
              <div className="space-y-3">
                {(t.raw("warningSignsDetailed.items") as string[]).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-background rounded-xl"
                  >
                    <AlertTriangle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PTSD Detailed (trauma) */}
      {t.has("ptsdDetailed.title") && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-4">
                {t("ptsdDetailed.title")}
              </h2>
              {t.has("ptsdDetailed.description") && (
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t("ptsdDetailed.description")}
                </p>
              )}
              {t.has("ptsdDetailed.ptsdSymptoms") && (
                <div className="space-y-3">
                  {(t.raw("ptsdDetailed.ptsdSymptoms") as string[]).map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl"
                    >
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Attachment Styles (attachment) */}
      {t.has("attachmentStyles.title") && (
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-8">
                {t("attachmentStyles.title")}
              </h2>
              <div className="space-y-4">
                {(["secure", "anxious", "avoidant", "disorganized"] as const).map((style) =>
                  t.has(`attachmentStyles.${style}.name`) ? (
                    <Card key={style} className="bg-card border-border/50">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-medium text-foreground mb-2">
                          {t(`attachmentStyles.${style}.name`)}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t(`attachmentStyles.${style}.description`)}
                        </p>
                      </CardContent>
                    </Card>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Long Term Effects (attachment) */}
      {t.has("longTermEffects.title") && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-8">
                {t("longTermEffects.title")}
              </h2>
              <div className="space-y-3">
                {(t.raw("longTermEffects.items") as string[]).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl"
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stages of Grief (grief) */}
      {t.has("stages.title") && (
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-8">
                {t("stages.title")}
              </h2>
              <div className="space-y-4">
                {(t.raw("stages.items") as { stage: string; description: string }[]).map((item, index) => (
                  <Card key={index} className="bg-card border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl font-light text-primary/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-lg font-medium text-foreground mb-2">{item.stage}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {t.has("stages.note") && (
                <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <p className="text-foreground leading-relaxed italic">{t("stages.note")}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Effects of Grief (grief) */}
      {t.has("effects.title") && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-4">
                {t("effects.title")}
              </h2>
              {t.has("effects.description") && (
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t("effects.description")}
                </p>
              )}
              <div className="grid md:grid-cols-3 gap-6">
                {t.has("effects.physical") && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-primary mb-4">{t("effects.physicalLabel")}</h3>
                    {(t.raw("effects.physical") as string[]).map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                )}
                {t.has("effects.emotional") && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-primary mb-4">{t("effects.emotionalLabel")}</h3>
                    {(t.raw("effects.emotional") as string[]).map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                )}
                {t.has("effects.cognitive") && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-primary mb-4">{t("effects.cognitiveLabel")}</h3>
                    {(t.raw("effects.cognitive") as string[]).map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Relationship Types (relationships) */}
      {t.has("relationshipTypes.title") && (
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-8">
                {t("relationshipTypes.title")}
              </h2>
              <div className="space-y-4">
                {(t.raw("relationshipTypes.items") as { name: string; description: string }[]).map((item, index) => (
                  <Card key={index} className="bg-card border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl font-light text-primary/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-lg font-medium text-foreground mb-2">{item.name}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Physical Effects of Stress (stress) */}
      {t.has("physicalEffects.title") && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-4">
                {t("physicalEffects.title")}
              </h2>
              {t.has("physicalEffects.description") && (
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t("physicalEffects.description")}
                </p>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                {(t.raw("physicalEffects.items") as string[]).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl"
                  >
                    <Stethoscope className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Common Issues (sexual-dysfunction) */}
      {t.has("commonIssues.title") && (
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-8">
                {t("commonIssues.title")}
              </h2>
              <div className="space-y-3">
                {(t.raw("commonIssues.items") as string[]).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-background rounded-xl"
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Self Care (perinatal, mens-mental-health) */}
      {t.has("selfCare.title") && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-8">
                {t("selfCare.title")}
              </h2>
              <div className="space-y-3">
                {(t.raw("selfCare.items") as string[]).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl"
                  >
                    <span className="text-xl font-light text-primary shrink-0">{index + 1}</span>
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Treatment Approach (all 16 conditions) */}
      {t.has("treatmentApproach.title") && (
        <section className="py-16 lg:py-24 bg-primary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-4">
                {t("treatmentApproach.title")}
              </h2>
              {t.has("treatmentApproach.description") && (
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t("treatmentApproach.description")}
                </p>
              )}
              <div className="space-y-3">
                {(t.raw("treatmentApproach.methods") as string[]).map((method, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-background rounded-xl"
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{method}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* When To Seek Help (anxiety) */}
      {t.has("whenToSeekHelp") && (
        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card border border-primary/20 rounded-xl p-6">
                <p className="text-foreground leading-relaxed">{t("whenToSeekHelp")}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xl text-primary font-medium italic mb-8">{t("cta")}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              >
                <Link href={`/assessment?disorder=${disorderKey}`}>
                  {tAssessment("takeAssessment")}
                  <ClipboardList className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-primary/30 hover:bg-primary/5"
              >
                <Link href="/#contact">
                  {tNav("bookConsultation")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
