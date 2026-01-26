import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TherapyPage } from "@/components/therapy-page"

export default function ACTPage() {
  return (
    <>
      <Header />
      <TherapyPage therapyKey="act" iconName="Compass" />
      <Footer />
    </>
  )
}
