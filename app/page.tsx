import Entry from 'components/features/Entrys/Entry'
import MainAnimation from 'components/features/MainAnimation/MainAnimation'

export default function Home() {
   return (
      <main className="flex flex-col items-center">
         <section className="flex h-screen w-full max-w-screen-2xl justify-around">
            <MainAnimation />
            <div className="my-auto">
               <h1 className="text-4xl font-bold">Электронный журнал альфа поколения</h1>
               <h2 className="text-xl font-light text-white">Стильно, удобно, ахуенно</h2>
            </div>
            <Entry />
         </section>
      </main>
   )
}
