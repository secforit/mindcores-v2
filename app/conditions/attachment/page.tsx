import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisorderPage } from "@/components/disorder-page"

export default function AttachmentPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="attachment" iconName="Heart" />
      <Footer />
    </>
  )
}
