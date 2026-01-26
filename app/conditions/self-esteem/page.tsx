import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisorderPage } from "@/components/disorder-page"

export default function SelfEsteemPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="selfEsteem" iconName="Sparkles" />
      <Footer />
    </>
  )
}
