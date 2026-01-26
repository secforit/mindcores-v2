import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisorderPage } from "@/components/disorder-page"

export default function AnxietyPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="anxiety" iconName="Brain" />
      <Footer />
    </>
  )
}
