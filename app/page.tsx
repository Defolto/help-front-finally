'use client'
import LogIn from '@/components/features/Entrys/LogIn'
import SignUp from '@/components/features/Entrys/SignUp'
import MainAnimation from '@/components/features/MainAnimation/MainAnimation'
import { useState } from 'react'

export default function Home() {
   const [entry, setEntry] = useState<boolean>(true)

   return (
      <main>
         <section className="flex h-screen w-screen justify-center gap-6">
            <MainAnimation />
            <div className="my-auto">
               <h1>Электронный журнал нового поколения</h1>
               <h2 className="text-white">Стильно, удобно, интересно</h2>
            </div>
            <div className="my-auto flex flex-col bg-black/40 p-6">
               {entry ? <LogIn /> : <SignUp />}
               <p
                  className="mt-3 cursor-pointer text-center text-white"
                  onClick={() => setEntry((prev) => !prev)}
               >
                  {entry ? 'Создать аккаунт' : 'Войти в аккаунт'}
               </p>
            </div>
         </section>
      </main>
   )
}
