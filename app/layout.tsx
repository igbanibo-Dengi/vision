import NavBar from '@/components/nav/navBar'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Footer from '@/components/Footer'


const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wanda',
  description: 'Web Hosting solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
