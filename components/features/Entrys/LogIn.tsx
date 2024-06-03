import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { createFetch } from '@/helpers/createFetch'
import { FormEvent } from 'react'

/**
 * Компонент входа
 */
export default function LogIn() {
   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      createFetch('api/user/create', { test: 'приветики' }).then((res) => {
         console.log(res)
      })
   }

   return (
      <>
         <form className="flex flex-col gap-3" onSubmit={onSubmit}>
            <Input view="entry" type="text" placeholder="Почта или логин" />
            <Input view="entry" type="password" placeholder="Пароль" />
            <Button className="mx-auto px-10" type="submit">
               Вход
            </Button>
         </form>
      </>
   )
}
