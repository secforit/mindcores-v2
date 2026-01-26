import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TherapyPage } from "@/components/therapy-page"

export default function MindfulnessPage() {
  return (
    <>
      <Header />
      <TherapyPage therapyKey="mindfulness" iconName="Brain" />
      <Footer />
    </>
  )
}
