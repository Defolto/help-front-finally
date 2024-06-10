import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'HelpFront | Профиль',
   description: 'профиль helpFront',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return <div>{children}</div>
}
