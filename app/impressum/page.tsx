import { getTranslations } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default async function ImpressumPage() {
  const t = await getTranslations("legal.impressum")

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <h1 className="text-4xl font-light text-foreground mb-8">{t("title")}</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                {t("responsiblePerson")}
              </h2>
              <div className="bg-secondary/30 rounded-xl p-6 space-y-4">
                <p className="text-foreground font-medium text-lg">
                  Dipl. Psych. Raluca Diana Tocoian
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {t("professionalTitle")}
                    </p>
                    <p className="text-foreground">{t("professionalTitleValue")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t("issuedBy")}</p>
                    <p className="text-foreground">{t("issuedByValue")}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                {t("germanAddress")}
              </h2>
              <div className="bg-secondary/30 rounded-xl p-6">
                <p className="text-foreground">Tannenstrasse 36</p>
                <p className="text-foreground">73207 Plochingen</p>
                <p className="text-foreground">Deutschland</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                {t("romanianAddress")}
              </h2>
              <div className="bg-secondary/30 rounded-xl p-6">
                <p className="text-foreground">Str. Poetului 1-3, Bl. R11, Ap.1, Et. 1</p>
                <p className="text-foreground">Arad</p>
                <p className="text-foreground">România</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">{t("taxInfo")}</h2>
              <div className="bg-secondary/30 rounded-xl p-6 space-y-2">
                <p className="text-foreground">
                  <span className="text-muted-foreground">ANAF: </span>
                  Cabinet individual de psihologie Tocoian Raluca Diana
                </p>
                <p className="text-foreground">
                  <span className="text-muted-foreground">C.I.F: </span>
                  46373067
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">{t("copyright")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("copyrightText")}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
