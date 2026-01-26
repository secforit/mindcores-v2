import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TherapyPage } from "@/components/therapy-page"

export default function CouplesTherapyPage() {
  return (
    <>
      <Header />
      <TherapyPage therapyKey="couples" iconName="Heart" />
      <Footer />
    </>
  )
}
