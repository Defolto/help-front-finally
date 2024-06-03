import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { FormEvent } from 'react'

/**
 * Компонент входа
 */
export default function LogIn() {
   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
   }

   return (
      <>
         <form className="flex flex-col gap-3" onSubmit={onSubmit}>
            <Input view="frame" type="text" placeholder="Почта или логин" />
            <Input view="frame" type="password" placeholder="Пароль" />
            <Button type="submit">Вход</Button>
         </form>
      </>
   )
}
