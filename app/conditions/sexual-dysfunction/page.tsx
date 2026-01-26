import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisorderPage } from "@/components/disorder-page"

export default function SexualDysfunctionPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="sexualDysfunction" iconName="HeartPulse" />
      <Footer />
    </>
  )
}
