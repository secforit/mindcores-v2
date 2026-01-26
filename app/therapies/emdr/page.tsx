import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TherapyPage } from "@/components/therapy-page"

export default function EMDRPage() {
  return (
    <>
      <Header />
      <TherapyPage therapyKey="emdr" iconName="Eye" />
      <Footer />
    </>
  )
}
