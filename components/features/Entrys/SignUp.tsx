import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { FormEvent } from 'react'

/**
 * Компонент регистрации
 */
export default function SignUp() {
   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
   }

   return (
      <>
         <form className="flex flex-col gap-3" onSubmit={onSubmit}>
            <div className="flex flex-row">
               <Input view="entry" className="mr-2.5 !w-[140px]" type="text" placeholder="Имя" />
               <Input
                  view="entry"
                  className="ml-2.5 !w-[140px]"
                  type="password"
                  placeholder="Фамилия"
               />
            </div>
            <Input view="entry" type="text" placeholder="Почта" />
            <Input view="entry" type="text" placeholder="Логин" />
            <Input view="entry" type="password" placeholder="Пароль" />
            <Input view="entry" type="password" placeholder="Повторите пароль" />
            <Button className="mx-auto px-10" type="submit">
               Вход
            </Button>
         </form>
      </>
   )
}
