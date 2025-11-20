import type { Metadata } from 'next'
import { Belleza } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import NewsletterModal from '@/components/NewsletterModal' // TODO: Enable when needed

const belleza = Belleza({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-belleza',
})

export const metadata: Metadata = {
  title: 'SGMA - Art & Learning',
  description: 'Explore watercolor courses and book personalized art sessions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={belleza.variable}>
      <body className="bg-white text-gray-900 font-belleza">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
