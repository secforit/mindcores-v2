import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TherapyPage } from "@/components/therapy-page"

export default function BioenergeticPage() {
  return (
    <>
      <Header />
      <TherapyPage therapyKey="bioenergetic" iconName="Activity" />
      <Footer />
    </>
  )
}
