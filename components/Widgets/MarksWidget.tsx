import WrapperWidget from './WrapperWidget'

export default function MarksWidget() {
   return (
      <WrapperWidget>
         <div className="flex flex-row gap-4">
            <p className="text-xl font-bold">Успеваемость</p>
            <p className="my-auto">4.27</p>
         </div>

         <div className="my-3">
            <p>Оценки за сегодня:</p>
            {/*TODO: добавить возможность фильтровать за сегодня, неделю и месяц*/}
            <p className="italic">4, 2, 2, 5, 5, 3</p>
         </div>

         <p className="ml-auto cursor-pointer">Журнал →</p>
      </WrapperWidget>
   )
}
