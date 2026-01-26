import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisorderPage } from "@/components/disorder-page"

export default function TraumaPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="trauma" iconName="Shield" />
      <Footer />
    </>
  )
}
