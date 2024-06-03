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
            <div className="flex flex-row gap-3">
               <Input view="frame" type="text" placeholder="Почта или логин" />
               <Input view="frame" type="password" placeholder="Пароль" />
            </div>
            <Input view="frame" type="text" placeholder="Почта" />
            <Input view="frame" type="text" placeholder="Логин" />
            <Input view="frame" type="text" placeholder="Пароль" />
            <Input view="frame" type="text" placeholder="Повторите пароль" />
            <Button type="submit">Вход</Button>
         </form>
      </>
   )
}
