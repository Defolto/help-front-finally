import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'HelpFront | Главная',
   description: 'Главная страница helpFront',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={`bg-firstBg h-screen text-white ${inter.className}`}>{children}</body>
      </html>
   )
}
