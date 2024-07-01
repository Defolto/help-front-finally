'use client'

import MarksWidget from '../../components/Widgets/MarksWidget'
import ResourcesWidget from '../../components/Widgets/ResourcesWidget'
import TasksWidget from '../../components/Widgets/TasksWidget'
import Hello from '../../components/features/Hello'
import ConfirmAccount from '../../components/icons/ConfirmAccount'
import Like from '../../components/icons/Like'
import Money from '../../components/icons/Money'
import { useAppSelector } from '../../store/hooks'

function LineStat({ money, thanks }: { money?: number; thanks?: number }) {
   return (
      <div className="flex gap-7">
         {!!money && (
            <div className="flex" title="Денег на балансе">
               <Money />
               <span className="ml-1 text-lg">{money}</span>
            </div>
         )}
         {!!thanks && (
            <div className="flex" title="Лайков">
               <Like />
               <span className="ml-1 text-lg">{thanks}</span>
            </div>
         )}
      </div>
   )
}

export default function Home() {
   const { info, confirmAccount, money, thanks } = useAppSelector((state) => state.user)

   return (
      <div className="flex h-full flex-col">
         <div className="mb-1 flex flex-row">
            <span className="text-2xl">
               <Hello />, {info.name}
            </span>
            {!confirmAccount && (
               <div className="flex" title="Подтверждённый аккаунт">
                  <ConfirmAccount className="my-auto ml-2 h-[22px] w-[22px]" />
               </div>
            )}
         </div>
         <LineStat thanks={thanks} money={money} />
         <div className="mt-4 flex h-full flex-row">
            <div className="box-border flex w-9/12 flex-col pr-3">Тут будут новости</div>
            <div className="box-border flex h-full w-3/12 flex-col gap-5 border-0 border-l-2 border-solid border-gray px-3">
               <TasksWidget />
               <MarksWidget />
               <ResourcesWidget />
            </div>
         </div>
      </div>
   )
}
