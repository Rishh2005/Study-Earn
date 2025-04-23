import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StudyEarn - Smart Learning Platform",
  description: "AI-powered study platform for personalized learning",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-[url('/grid.svg')] bg-fixed">
          <Sidebar />
          <div className="flex-1 md:ml-[70px] transition-all duration-300">
            <Navbar />
            <main className="min-h-[calc(100vh-3.5rem-200px)]">{children}</main>
            <Footer />
          </div>
          <Chatbot />
        </div>
      </body>
    </html>
  )
}



import './globals.css'