import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisorderPage } from "@/components/disorder-page"

export default function StressPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="stress" iconName="Flame" />
      <Footer />
    </>
  )
}
