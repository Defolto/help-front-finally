import type { Metadata } from 'next'
import UserMenu from '../../components/features/UserMenu/UserMenu'
import WrapperContent from '../../components/features/WrapperContent'
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
   return (
      <div className="flex h-full flex-row">
         <StoreProvider>
            <UserMenu />
            <WrapperContent>{children}</WrapperContent>
         </StoreProvider>
      </div>
   )
}
