import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TherapyPage } from "@/components/therapy-page"

export default function SchemaTherapyPage() {
  return (
    <>
      <Header />
      <TherapyPage therapyKey="schemaTherapy" iconName="Layers" />
      <Footer />
    </>
  )
}
