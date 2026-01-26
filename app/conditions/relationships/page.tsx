import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisorderPage } from "@/components/disorder-page"

export default function RelationshipsPage() {
  return (
    <>
      <Header />
      <DisorderPage disorderKey="relationships" iconName="Users" />
      <Footer />
    </>
  )
}
