import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nivora Tech - Desarrollo Web y Aplicaciones Móviles",
  description:
    "Casa de desarrollo especializada en crear soluciones web innovadoras, aplicaciones móviles y sistemas personalizados que impulsan el crecimiento de tu negocio.",
  keywords: "desarrollo web, aplicaciones móviles, e-commerce, UI/UX design, consultoría tecnológica",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
