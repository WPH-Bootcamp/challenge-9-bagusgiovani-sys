// 📁 app/layout.tsx

import type { ReactNode } from "react"
import { Nunito } from "next/font/google"
import { ReduxProvider } from "@/store/provider"
import "@/app/globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ReduxProvider>
          <div className="px-8 md:px-16 lg:px-24">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}