type Props = {
   params: {
      subject: string
   }
}


export default async function Theme({ params: { subject } }: Props) {
   return <div className="flex flex-col">{subject}</div>
}
