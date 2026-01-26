import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TherapyPage } from "@/components/therapy-page"

export default function NLPPage() {
  return (
    <>
      <Header />
      <TherapyPage therapyKey="nlp" iconName="Lightbulb" />
      <Footer />
    </>
  )
}
