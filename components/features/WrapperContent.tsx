import UserMenu from './UserMenu/UserMenu'

export default function WrapperContent({ children }: { children: React.ReactNode }) {
   return (
      <div className="flex h-full flex-row">
         <UserMenu />
         <div className="box-border h-full w-full overflow-y-auto p-4">{children}</div>
      </div>
   )
}
