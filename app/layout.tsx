import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cairo, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const cairo = Cairo({ subsets: ["arabic", "latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "انجنيروتيك | أجهزة كمبيوتر ولاب توب في مصر",
  description:
    "وجهتك الأولى لشراء وصيانة أجهزة الكمبيوتر واللاب توب في مصر. Dell, HP, Lenovo, ASUS, MSI, Samsung مع ضمان سنتين وتوصيل مجاني",
  generator: "v0.app",
  keywords: ["كمبيوتر", "لاب توب", "مصر", "Dell", "HP", "Lenovo", "ASUS", "MSI", "صيانة", "انجنيروتيك"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#00d4ff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
