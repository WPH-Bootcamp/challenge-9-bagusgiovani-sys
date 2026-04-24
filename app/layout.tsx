// 📁 app/layout.tsx

import type { ReactNode } from "react"
import { Nunito } from "next/font/google"
import { ReduxProvider } from "@/store/provider"
import "@/app/globals.css"

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
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}