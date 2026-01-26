import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisorderPage } from "@/components/disorder-page"

export default function AddictionPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="addiction" iconName="Link2" />
      <Footer />
    </>
  )
}
