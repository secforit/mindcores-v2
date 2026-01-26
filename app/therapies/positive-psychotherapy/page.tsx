import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TherapyPage } from "@/components/therapy-page"

export default function PositivePsychotherapyPage() {
  return (
    <>
      <Header />
      <TherapyPage therapyKey="positivePsychotherapy" iconName="Sparkles" />
      <Footer />
    </>
  )
}
