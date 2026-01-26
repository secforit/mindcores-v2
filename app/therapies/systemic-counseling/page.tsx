import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TherapyPage } from "@/components/therapy-page"

export default function SystemicCounselingPage() {
  return (
    <>
      <Header />
      <TherapyPage therapyKey="systemicCounseling" iconName="Network" />
      <Footer />
    </>
  )
}
