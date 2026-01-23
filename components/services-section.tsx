import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Heart, Shield, Users, Sparkles, Leaf } from "lucide-react"

const disorders = [
  {
    icon: Brain,
    title: "Anxiety Disorders",
    description: "Comprehensive treatment for generalized anxiety, panic attacks, social anxiety, and phobias using proven therapeutic techniques.",
  },
  {
    icon: Heart,
    title: "Depression",
    description: "Evidence-based approaches to help you overcome depression, regain motivation, and rediscover joy in everyday life.",
  },
  {
    icon: Shield,
    title: "Trauma & PTSD",
    description: "Specialized EMDR therapy and trauma-focused treatment to help process difficult experiences and find healing.",
  },
  {
    icon: Users,
    title: "Relationship Issues",
    description: "Individual and couples counseling to improve communication, resolve conflicts, and build stronger connections.",
  },
  {
    icon: Sparkles,
    title: "Stress Management",
    description: "Learn effective coping strategies, mindfulness techniques, and lifestyle changes to manage chronic stress.",
  },
  {
    icon: Leaf,
    title: "Personal Growth",
    description: "Explore your potential, build self-esteem, and develop emotional intelligence for a more fulfilling life.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm tracking-widest uppercase text-primary font-medium mb-4">
            Areas of Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-foreground leading-tight mb-6">
            Specialized Treatment for{" "}
            <span className="text-primary font-medium italic">Mental Health</span>{" "}
            Challenges
          </h2>
          <p className="text-lg text-muted-foreground">
            Offering comprehensive psychological services for a wide range of conditions, 
            using evidence-based therapeutic approaches.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disorders.map((disorder) => (
            <Card 
              key={disorder.title} 
              className="group bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <disorder.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">
                    {disorder.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {disorder.description}
                  </p>
                  <Link 
                    href="#contact"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
          >
            <Link href="#contact">
              Schedule Your Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
