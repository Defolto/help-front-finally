type Props = {
   params: {
      subject: string
      theme: string
   }
}

export default async function Theme({ params: { subject, theme } }: Props) {
   // Тут отображаем md файл темы, по выбранному предметы.
   return <div>{theme}</div>
}
