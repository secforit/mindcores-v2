import Image from "next/image"
import { CheckCircle } from "lucide-react"

const qualifications = [
  "Licensed Clinical Psychologist",
  "EMDR Certified Practitioner",
  "Certified NLP Master Practitioner",
  "Family & Couples Therapy Specialist",
  "Mindfulness-Based Therapy Expert",
]

const values = [
  {
    title: "Compassionate Care",
    description: "Every session is approached with empathy, understanding, and genuine care for your wellbeing."
  },
  {
    title: "Evidence-Based Methods",
    description: "Utilizing scientifically proven therapeutic approaches tailored to your unique needs."
  },
  {
    title: "Confidential & Safe",
    description: "A secure, judgment-free environment where you can explore your thoughts and feelings freely."
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              {/* Placeholder for therapist photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Diana Raluca"
                  width={200}
                  height={200}
                  className="opacity-20"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/30 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-8 left-8 bg-card shadow-xl rounded-xl p-6 border border-border">
              <p className="text-4xl font-light text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm tracking-widest uppercase text-primary font-medium">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl font-light text-foreground leading-tight">
                Dedicated to Your{" "}
                <span className="text-primary font-medium italic">Mental Health</span>{" "}
                Journey
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 15 years of experience in clinical psychology, I am committed to 
              providing personalized, evidence-based therapy that addresses your unique 
              challenges. My approach integrates multiple therapeutic modalities to create 
              a comprehensive treatment plan tailored specifically for you.
            </p>

            {/* Qualifications */}
            <div className="space-y-3">
              {qualifications.map((qual) => (
                <div key={qual} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{qual}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-border">
              {values.map((value) => (
                <div key={value.title} className="space-y-2">
                  <h3 className="font-medium text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
