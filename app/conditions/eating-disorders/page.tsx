import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisorderPage } from "@/components/disorder-page"

export default function EatingDisordersPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="eatingDisorders" iconName="Utensils" />
      <Footer />
    </>
  )
}
