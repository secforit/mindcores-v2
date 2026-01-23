import { getTranslations } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default async function PrivacyPage() {
  const t = await getTranslations("legal.privacy")

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <h1 className="text-4xl font-light text-foreground mb-8">{t("title")}</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">{t("intro")}</p>

            <section className="bg-secondary/30 rounded-xl p-6">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                {t("dataCollection")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect personal data that you voluntarily provide to us when you contact us
                through the website, including your name, email address, phone number, and the
                content of your message. This information is used solely to respond to your
                inquiries and provide the services you request.
              </p>
            </section>

            <section className="bg-secondary/30 rounded-xl p-6">
              <h2 className="text-2xl font-medium text-foreground mb-4">{t("cookies")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies to enhance your browsing experience. Cookies are small
                text files stored on your device. We use:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Session cookies for basic website functionality</li>
                <li>Language preference cookies to remember your selected language</li>
                <li>Analytics cookies to understand how visitors use our site</li>
              </ul>
            </section>

            <section className="bg-secondary/30 rounded-xl p-6">
              <h2 className="text-2xl font-medium text-foreground mb-4">{t("serverLogs")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our web servers automatically log certain information when you visit our website,
                including your IP address, browser type, referring page, and the date and time of
                your visit. This information is used for security purposes and to improve our
                services.
              </p>
            </section>

            <section className="bg-secondary/30 rounded-xl p-6">
              <h2 className="text-2xl font-medium text-foreground mb-4">{t("contactForm")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you submit a contact form on our website, the information you provide
                (name, email, phone, message) is sent to us via email and stored securely. We
                retain this information only as long as necessary to respond to your inquiry
                and for legal documentation purposes.
              </p>
            </section>

            <section className="bg-secondary/30 rounded-xl p-6">
              <h2 className="text-2xl font-medium text-foreground mb-4">{t("yourRights")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                Under GDPR and applicable privacy laws, you have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, please contact us at contact@dianaraluca.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
