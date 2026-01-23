import React from "react"
import type { Metadata } from 'next'
import { Cormorant_Garamond, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant"
});
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Diana Raluca | Psychology Practice',
  description: 'Professional psychology services offering EMDR, Mindfulness, NLP, and various therapeutic approaches for anxiety, depression, trauma, and more.',
  generator: 'v0.app',
  keywords: ['psychology', 'therapy', 'EMDR', 'mindfulness', 'counseling', 'mental health', 'anxiety', 'depression', 'trauma'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
