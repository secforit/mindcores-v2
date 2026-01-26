import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisorderPage } from "@/components/disorder-page"

export default function GriefPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="grief" iconName="Flower2" />
      <Footer />
    </>
  )
}
