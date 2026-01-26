import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisorderPage } from "@/components/disorder-page"

export default function BipolarPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="bipolar" iconName="Activity" />
      <Footer />
    </>
  )
}
