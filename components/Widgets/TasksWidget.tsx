import WrapperWidget from './WrapperWidget'

export default function TasksWidget() {
   return (
      <WrapperWidget>
         <div className="flex flex-row gap-4">
            <p className="text-xl font-bold">Задачи</p>
            <p className="my-auto">5 / 3 / 2</p>
         </div>

         <div className="my-3">
            <p>Последняя задача:</p>
            <p className="italic">Выучить наизусть описание дуба из произведения "Война и Мир"</p>
         </div>

         <p className="ml-auto cursor-pointer">Все задачи →</p>
      </WrapperWidget>
   )
}
