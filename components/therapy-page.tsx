"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  ClipboardList,
  Eye,
  Brain,
  MessageSquare,
  Lightbulb,
  Users,
  Heart,
  Sparkles,
  Network,
  Target,
  Shield,
  Layers,
  Scale,
  Hand,
  Compass,
  Activity,
  type LucideIcon,
} from "lucide-react"

type IconName =
  | "Eye"
  | "Brain"
  | "MessageSquare"
  | "Lightbulb"
  | "Users"
  | "Heart"
  | "Sparkles"
  | "Network"
  | "Target"
  | "Shield"
  | "Layers"
  | "Scale"
  | "Hand"
  | "Compass"
  | "Activity"

const iconMap: Record<IconName, LucideIcon> = {
  Eye,
  Brain,
  MessageSquare,
  Lightbulb,
  Users,
  Heart,
  Sparkles,
  Network,
  Target,
  Shield,
  Layers,
  Scale,
  Hand,
  Compass,
  Activity,
}

interface TherapyPageProps {
  therapyKey: string
  iconName: IconName
}

export function TherapyPage({ therapyKey, iconName }: TherapyPageProps) {
  const t = useTranslations(`therapies.items.${therapyKey}`)
  const tNav = useTranslations("nav")
  const tAssessment = useTranslations("assessment")

  const Icon = iconMap[iconName]

  // Get benefits array if available
  const hasBenefits = t.has("benefits.items")
  const benefits = hasBenefits ? (t.raw("benefits.items") as string[]) : []
  const benefitsTitle = hasBenefits ? t("benefits.title") : ""

  // Get techniques array if available
  const hasTechniques = t.has("techniques.items")
  const techniques = hasTechniques ? (t.raw("techniques.items") as string[]) : []
  const techniquesTitle = hasTechniques ? t("techniques.title") : ""

  // Get principles array if available
  const hasPrinciples = t.has("principles.items")
  const principles = hasPrinciples ? (t.raw("principles.items") as string[]) : []
  const principlesTitle = hasPrinciples ? t("principles.title") : ""

  // Get elements array if available
  const hasElements = t.has("elements.items")
  const elements = hasElements ? (t.raw("elements.items") as string[]) : []
  const elementsTitle = hasElements ? t("elements.title") : ""

  // Get skills array if available
  const hasSkills = t.has("skills.items")
  const skills = hasSkills ? (t.raw("skills.items") as string[]) : []
  const skillsTitle = hasSkills ? t("skills.title") : ""

  // Get methods array if available
  const hasMethods = t.has("methods.items")
  const methods = hasMethods ? (t.raw("methods.items") as string[]) : []
  const methodsTitle = hasMethods ? t("methods.title") : ""

  // Get exercises array if available
  const hasExercises = t.has("exercises.items")
  const exercises = hasExercises ? (t.raw("exercises.items") as string[]) : []
  const exercisesTitle = hasExercises ? t("exercises.title") : ""

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
                {tNav("therapies")}
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6">
              {t("fullTitle")}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">{t("intro")}</p>

            {/* Detailed Description (EMDR) */}
            {t.has("detailedDescription") && (
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">{t("detailedDescription")}</p>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Additional Content */}
            <div className="space-y-8">
              {/* How It Works */}
              {t.has("howItWorks") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-4">How It Works</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("howItWorks")}</p>
                </div>
              )}

              {/* How It Helps */}
              {t.has("howItHelps") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-4">How It Helps</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("howItHelps")}</p>
                </div>
              )}

              {/* Goal */}
              {t.has("goal") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-4">Goal</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("goal")}</p>
                </div>
              )}

              {/* Framework */}
              {t.has("framework") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-4">The Framework</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("framework")}</p>
                </div>
              )}

              {/* Approach */}
              {t.has("approach") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-4">Our Approach</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("approach")}</p>
                </div>
              )}

              {/* Concept */}
              {t.has("concept") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-4">Key Concept</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("concept")}</p>
                </div>
              )}

              {/* Understanding */}
              {t.has("understanding") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-4">Understanding</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("understanding")}</p>
                </div>
              )}

              {/* Explanation */}
              {t.has("explanation") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-4">Understanding</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("explanation")}</p>
                </div>
              )}

              {/* Scope */}
              {t.has("scope") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-4">Scope</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("scope")}</p>
                </div>
              )}

              {/* Body Memory */}
              {t.has("bodyMemory.title") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-4">{t("bodyMemory.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("bodyMemory.description")}</p>
                </div>
              )}

              {/* VAKOG */}
              {t.has("vakog") && (
                <div className="bg-secondary/30 p-6 rounded-xl">
                  <p className="text-foreground leading-relaxed">{t("vakog")}</p>
                </div>
              )}

              {/* Example */}
              {t.has("example") && (
                <div className="bg-secondary/30 p-6 rounded-xl">
                  <h3 className="text-lg font-medium text-foreground mb-3">Example</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("example")}</p>
                </div>
              )}

              {/* What To Expect (CBT) */}
              {t.has("whatToExpect") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-4">{t("whatToExpect.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("whatToExpect.description")}</p>
                </div>
              )}

              {/* Session Info (Family) */}
              {t.has("sessionInfo") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-4">{t("sessionInfo.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("sessionInfo.description")}</p>
                </div>
              )}

              {/* Miracle Question (Solution-Focused) */}
              {t.has("miracleQuestion") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-4">{t("miracleQuestion.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("miracleQuestion.description")}</p>
                </div>
              )}

              {/* Schema Explanation (Schema Therapy) */}
              {t.has("schemaExplanation") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-4">{t("schemaExplanation.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("schemaExplanation.description")}</p>
                </div>
              )}
            </div>

            {/* Right Column - Lists */}
            <div className="space-y-8">
              {/* Benefits */}
              {hasBenefits && benefits.length > 0 && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-6">{benefitsTitle}</h2>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl"
                      >
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-foreground leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Techniques */}
              {hasTechniques && techniques.length > 0 && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-6">{techniquesTitle}</h2>
                  <div className="space-y-3">
                    {techniques.map((technique, index) => (
                      <Card
                        key={index}
                        className="bg-card border-border/50"
                      >
                        <CardContent className="p-4">
                          <p className="text-foreground leading-relaxed">{technique}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Principles */}
              {hasPrinciples && principles.length > 0 && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-6">{principlesTitle}</h2>
                  <div className="space-y-3">
                    {principles.map((principle, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl"
                      >
                        <span className="text-xl font-light text-primary">{index + 1}</span>
                        <p className="text-foreground leading-relaxed">{principle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Elements */}
              {hasElements && elements.length > 0 && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-6">{elementsTitle}</h2>
                  <div className="space-y-3">
                    {elements.map((element, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl"
                      >
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-foreground leading-relaxed">{element}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {hasSkills && skills.length > 0 && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-6">{skillsTitle}</h2>
                  <div className="space-y-3">
                    {skills.map((skill, index) => (
                      <Card
                        key={index}
                        className="bg-card border-border/50"
                      >
                        <CardContent className="p-4">
                          <p className="text-foreground leading-relaxed">{skill}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Methods */}
              {hasMethods && methods.length > 0 && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-6">{methodsTitle}</h2>
                  <div className="space-y-3">
                    {methods.map((method, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl"
                      >
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-foreground leading-relaxed">{method}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Exercises */}
              {hasExercises && exercises.length > 0 && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-6">{exercisesTitle}</h2>
                  <div className="space-y-4">
                    {exercises.map((exercise, index) => (
                      <Card
                        key={index}
                        className="bg-card border-border/50"
                      >
                        <CardContent className="p-5">
                          <p className="text-foreground leading-relaxed">{exercise}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Phases (EMDR) */}
              {t.has("phases") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-6">{t("phases.title")}</h2>
                  <div className="space-y-3">
                    {(t.raw("phases.items") as string[]).map((phase, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl"
                      >
                        <span className="text-xl font-light text-primary">{index + 1}</span>
                        <p className="text-foreground leading-relaxed">{phase}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Techniques (EMDR) */}
              {t.has("additionalTechniques") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-6">{t("additionalTechniques.title")}</h2>
                  <div className="space-y-3">
                    {(t.raw("additionalTechniques.items") as string[]).map((technique, index) => (
                      <Card
                        key={index}
                        className="bg-card border-border/50"
                      >
                        <CardContent className="p-4">
                          <p className="text-foreground leading-relaxed">{technique}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Principles (Identity-Trauma) */}
              {t.has("keyPrinciples") && (
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-6">{t("keyPrinciples.title")}</h2>
                  <div className="space-y-3">
                    {(t.raw("keyPrinciples.items") as string[]).map((principle, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl"
                      >
                        <span className="text-xl font-light text-primary">{index + 1}</span>
                        <p className="text-foreground leading-relaxed">{principle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition (if available) */}
      {t.has("recognition") && (
        <section className="py-12 bg-primary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-foreground leading-relaxed italic">
                {t("recognition")}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Applications (if available) */}
      {t.has("applications") && (
        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-light text-foreground mb-4 text-center">Applications</h2>
              <p className="text-muted-foreground leading-relaxed text-center">{t("applications")}</p>
            </div>
          </div>
        </section>
      )}

      {/* Conclusion (if available) */}
      {t.has("conclusion") && (
        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-foreground leading-relaxed text-center italic">
                {t("conclusion")}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Business (if available - for constellations) */}
      {t.has("business") && (
        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-light text-foreground mb-4 text-center">Business Constellations</h2>
              <p className="text-muted-foreground leading-relaxed text-center">{t("business")}</p>
            </div>
          </div>
        </section>
      )}

      {/* Key Insight (if available) */}
      {t.has("keyInsight") && (
        <section className="py-12 bg-primary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card border border-primary/20 rounded-xl p-6">
                <p className="text-foreground leading-relaxed text-center italic">{t("keyInsight")}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trauma Biography (if available) */}
      {t.has("traumaBiography.title") && (
        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-light text-foreground mb-4 text-center">{t("traumaBiography.title")}</h2>
              <p className="text-muted-foreground leading-relaxed text-center">{t("traumaBiography.description")}</p>
            </div>
          </div>
        </section>
      )}

      {/* Advantages (if available) */}
      {t.has("advantages") && (
        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-light text-foreground mb-4 text-center">Advantages</h2>
              <p className="text-muted-foreground leading-relaxed text-center">{t("advantages")}</p>
            </div>
          </div>
        </section>
      )}

      {/* Balance Model (if available) */}
      {t.has("balanceModel") && (
        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-light text-foreground mb-4 text-center">Balance Model</h2>
              <p className="text-muted-foreground leading-relaxed text-center">{t("balanceModel")}</p>
            </div>
          </div>
        </section>
      )}

      {/* Principle (if available) */}
      {t.has("principle") && (
        <section className="py-12 bg-primary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-foreground leading-relaxed text-center italic">
                {t("principle")}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Schemas (if available) */}
      {t.has("schemas") && (
        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-light text-foreground mb-4 text-center">Understanding Schemas</h2>
              <p className="text-muted-foreground leading-relaxed text-center">{t("schemas")}</p>
            </div>
          </div>
        </section>
      )}

      {/* Unique Advantage (Family) */}
      {t.has("uniqueAdvantage") && (
        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card border border-primary/20 rounded-xl p-6">
                <p className="text-foreground leading-relaxed text-center">{t("uniqueAdvantage")}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Expert Principle (Systemic Counseling) */}
      {t.has("expertPrinciple") && (
        <section className="py-12 bg-primary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-foreground leading-relaxed text-center italic">
                {t("expertPrinciple")}
              </p>
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
                <Link href="/assessment">
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
