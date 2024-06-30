'use client'

import Hello from '../../components/features/Hello'
import ConfirmAccount from '../../components/icons/ConfirmAccount'
import Like from '../../components/icons/Like'
import Money from '../../components/icons/Money'
import { useAppSelector } from '../../store/hooks'

export default function Home() {
   const { info, confirmAccount, money, thanks } = useAppSelector((state) => state.user)

   return (
      <>
         <div>
            <span className="text-2xl">
               <Hello />, {info.name}
            </span>
            {!confirmAccount && <ConfirmAccount className="ml-2 h-[22px] w-[22px]" />}
         </div>

         <div className="flex gap-3">
            {!!money && (
               <div>
                  <Money />
                  <span>{money}</span>
               </div>
            )}
            {!!thanks && (
               <div>
                  <Like />
                  <span>{thanks}</span>
               </div>
            )}
         </div>
      </>
   )
}
