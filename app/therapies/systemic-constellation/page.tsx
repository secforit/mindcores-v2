import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TherapyPage } from "@/components/therapy-page"

export default function SystemicConstellationPage() {
  return (
    <>
      <Header />
      <TherapyPage therapyKey="systemicConstellation" iconName="Network" />
      <Footer />
    </>
  )
}
