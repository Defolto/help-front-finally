type Props = {
   params: {
      subject: string
   }
}

export default async function Theme({ params: { subject } }: Props) {
   // Тут отображаем главный md файл предмета. Внутри файла должны быть ссылки на темы
   return <div>{subject}</div>
}
