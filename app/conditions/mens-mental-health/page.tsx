import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisorderPage } from "@/components/disorder-page"

export default function MensMentalHealthPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="mensMentalHealth" iconName="User" />
      <Footer />
    </>
  )
}
