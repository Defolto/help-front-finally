import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'HelpFront | Предметы',
   description: 'Предметы helpFront',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return <>{children}</>
}
