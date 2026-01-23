import { Card, CardContent } from "@/components/ui/card"

const therapies = [
  {
    name: "EMDR Therapy",
    description: "Eye Movement Desensitization and Reprocessing - a powerful treatment for trauma and PTSD that helps the brain process disturbing memories.",
    highlight: true,
  },
  {
    name: "Mindfulness-Based Therapy",
    description: "Integrate mindfulness practices into your healing journey, developing present-moment awareness and emotional regulation skills.",
    highlight: false,
  },
  {
    name: "Cognitive Behavioral Therapy",
    description: "A structured, goal-oriented approach that helps identify and change negative thought patterns and behaviors.",
    highlight: false,
  },
  {
    name: "NLP Techniques",
    description: "Neuro-Linguistic Programming methods to transform limiting beliefs and create positive behavioral changes.",
    highlight: true,
  },
  {
    name: "Family Therapy",
    description: "Address family dynamics, improve communication, and strengthen relationships within the family system.",
    highlight: false,
  },
  {
    name: "Couples Counseling",
    description: "Build stronger connections, resolve conflicts, and develop healthy communication patterns with your partner.",
    highlight: false,
  },
]

export function TherapiesSection() {
  return (
    <section id="therapies" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div className="space-y-4">
            <p className="text-sm tracking-widest uppercase text-primary font-medium">
              Therapeutic Approaches
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-foreground leading-tight">
              Evidence-Based{" "}
              <span className="text-primary font-medium italic">Therapies</span>{" "}
              for Lasting Change
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Each treatment plan is personalized, combining multiple therapeutic 
            modalities to address your specific needs and goals.
          </p>
        </div>

        {/* Therapies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapies.map((therapy, index) => (
            <Card 
              key={therapy.name} 
              className={`group transition-all duration-300 ${
                therapy.highlight 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-card border-border/50 hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <span className={`text-5xl font-light ${
                    therapy.highlight ? "text-primary-foreground/30" : "text-primary/20"
                  }`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`text-xl font-medium ${
                    therapy.highlight ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    {therapy.name}
                  </h3>
                  <p className={`leading-relaxed ${
                    therapy.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    {therapy.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Not sure which approach is right for you? During your initial consultation, 
            we will discuss your concerns and create a personalized treatment plan together.
          </p>
        </div>
      </div>
    </section>
  )
}
