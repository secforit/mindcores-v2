import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TherapyPage } from "@/components/therapy-page"

export default function DBTPage() {
  return (
    <>
      <Header />
      <TherapyPage therapyKey="dbt" iconName="Scale" />
      <Footer />
    </>
  )
}
