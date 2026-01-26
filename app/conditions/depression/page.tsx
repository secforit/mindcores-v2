import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisorderPage } from "@/components/disorder-page"

export default function DepressionPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="depression" iconName="CloudRain" />
      <Footer />
    </>
  )
}
