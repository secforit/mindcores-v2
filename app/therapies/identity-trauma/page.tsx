import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TherapyPage } from "@/components/therapy-page"

export default function IdentityTraumaPage() {
  return (
    <>
      <Header />
      <TherapyPage therapyKey="identityTrauma" iconName="Shield" />
      <Footer />
    </>
  )
}
