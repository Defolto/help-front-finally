import type { Metadata } from 'next'
import UserMenu from '../../components/features/UserMenu/UserMenu'

export const metadata: Metadata = {
   title: 'HelpFront | Предметы',
   description: 'Предметы helpFront',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <div className="flex h-full flex-row">
         <UserMenu />
         {children}
      </div>
   )
}
