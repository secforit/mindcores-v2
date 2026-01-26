import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisorderPage } from "@/components/disorder-page"

export default function ADHDPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="adhd" iconName="Zap" />
      <Footer />
    </>
  )
}
