import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TherapyPage } from "@/components/therapy-page"

export default function CBTPage() {
  return (
    <>
      <Header />
      <TherapyPage therapyKey="cbt" iconName="MessageSquare" />
      <Footer />
    </>
  )
}
