import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/common/BackToTop'
import { LanguageProvider } from '@/components/common/LanguageContext'

// 使用两种字体：Inter 用于正文，Playfair Display 用于标题
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'AIEA ART FOUNDATION',
  description: 'AIEA Art Foundation is an African art foundation dedicated to supporting local artists, promoting cultural exchange, and enhancing the global influence of African art.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <LanguageProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  )
}
