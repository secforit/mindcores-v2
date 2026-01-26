import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisorderPage } from "@/components/disorder-page"

export default function PerinatalPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="perinatal" iconName="Baby" />
      <Footer />
    </>
  )
}
