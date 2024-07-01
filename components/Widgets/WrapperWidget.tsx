export default function WrapperWidget({ children }: { children: React.ReactNode }) {
   return <div className="box-border flex flex-col rounded-lg bg-gray p-2">{children}</div>
}
