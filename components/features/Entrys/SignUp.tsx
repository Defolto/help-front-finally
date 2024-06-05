import { formatName, IDataUser, isValidDataUser } from '@/components/features/Entrys/EntryFunctions'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { createFetch } from '@/helpers/createFetch'
import { FormEvent } from 'react'

/**
 * Компонент регистрации
 */
export default function SignUp() {
   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const formData = new FormData(e.currentTarget)
      const user: Record<string, string> = {}

      // @ts-ignore хз почему даёт ошибку
      for (let pair of formData.entries()) {
         user[pair[0]] = pair[1]
      }

      if (!isValidDataUser(user as IDataUser)) {
         return false
      }

      createFetch('api/user/create', user).then((res) => {
         console.log(res)
      })
   }

   const handleChangeName = (e: any) => {
      e.target.value = formatName(e.target.value)
   }

   return (
      <>
         <form className="flex flex-col gap-3" id="fgds" onSubmit={onSubmit}>
            <div className="flex flex-row">
               <Input
                  view="entry"
                  className="mr-2.5 !w-[140px]"
                  type="text"
                  placeholder="Имя"
                  name="name"
                  onChange={handleChangeName}
               />
               <Input
                  view="entry"
                  className="ml-2.5 !w-[140px]"
                  type="text"
                  placeholder="Фамилия"
                  name="surname"
                  onChange={handleChangeName}
               />
            </div>
            <Input view="entry" type="text" placeholder="Почта" name="email" />
            <Input view="entry" type="text" placeholder="Логин" name="login" />
            <Input view="entry" type="password" placeholder="Пароль" name="password" />
            <Input
               view="entry"
               type="password"
               placeholder="Повторите пароль"
               name="retryPassword"
            />
            <Button className="mx-auto px-10" type="submit">
               Вход
            </Button>
         </form>
      </>
   )
}
