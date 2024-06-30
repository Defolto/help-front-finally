const times = {
   0: 'Доброй ночи',
   4: 'Доброе утро',
   11: 'Добрый день',
   18: 'Добрый вечер',
}

export default function Hello() {
   const now = new Date()
   const currentHour = now.getHours()

   const greeting = Object.entries(times)
      .toReversed()
      .find((time) => {
         const [startMinutes, greeting] = time
         return currentHour >= +startMinutes
      })

   if (!greeting) {
      return <span>Приветствуем</span>
   }

   return <span>{greeting[1]}</span>
}
