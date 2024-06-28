import type { Metadata } from 'next'
import UserMenu from '../../components/features/UserMenu/UserMenu'
import WrapperContent from '../../components/features/WrapperContent'

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
         <WrapperContent>{children}</WrapperContent>
      </div>
   )
}
