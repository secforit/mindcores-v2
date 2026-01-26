import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TherapyPage } from "@/components/therapy-page"

export default function FamilyTherapyPage() {
  return (
    <>
      <Header />
      <TherapyPage therapyKey="family" iconName="Users" />
      <Footer />
    </>
  )
}
