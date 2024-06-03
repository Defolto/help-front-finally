'use client'

import LogIn from '@/components/features/Entrys/LogIn'
import SignUp from '@/components/features/Entrys/SignUp'
import { useState } from 'react'

export default function Entry() {
   // true - LogIn, false - SignUp
   const [entry, setEntry] = useState<boolean>(true)

   return (
      <div className="my-auto flex flex-col bg-black/40 p-6">
         <p className="mb-3 text-center text-2xl font-bold text-white">
            {entry ? 'Авторизация' : 'Регистрация'}
         </p>
         {entry ? <LogIn /> : <SignUp />}
         <p
            className="mx-auto mt-3 cursor-pointer text-white"
            onClick={() => setEntry((prev) => !prev)}
         >
            {entry ? 'Создать аккаунт' : 'Войти в аккаунт'}
         </p>
      </div>
   )
}
