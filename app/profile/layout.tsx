import type { Metadata } from 'next'
import { StoreProvider } from '../../store/StoreProvider'

export const metadata: Metadata = {
   title: 'HelpFront | Профиль',
   description: 'профиль helpFront',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return <StoreProvider>{children}</StoreProvider>
}
