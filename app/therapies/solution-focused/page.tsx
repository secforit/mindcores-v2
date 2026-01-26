import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TherapyPage } from "@/components/therapy-page"

export default function SolutionFocusedPage() {
  return (
    <>
      <Header />
      <TherapyPage therapyKey="solutionFocused" iconName="Target" />
      <Footer />
    </>
  )
}
