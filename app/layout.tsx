import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({ 
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A showcase of my professional work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        {/* Link to the favicon */}
        <link rel="icon" href="/../favicon.ico" />
      </Head>
      <body className={`${poppins.className} bg-white text-gray-800 antialiased`}>
        {children}
      </body>
    </html>
  )
}