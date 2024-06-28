export default function WrapperContent({ children }: { children: React.ReactNode }) {
   return <div className="box-border h-full w-full overflow-y-auto p-4">{children}</div>
}
