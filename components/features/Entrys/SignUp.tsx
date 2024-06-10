import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { deleteCookie, getCookie, setCookie } from '../../../helpers/cookie'
import { createFetch } from '../../../helpers/createFetch'
import { Button } from '../../ui/Button'
import { Input } from '../../ui/Input'
import { IDataUser, formatName, isValidDataUser } from './EntryFunctions'

/**
 * Компонент регистрации
 */
export default function SignUp() {
   const [isConfirmation, setIsConfirmation] = useState<boolean>(false)

   const router = useRouter()

   const trySignUp = (e: FormEvent<HTMLFormElement>) => {
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

      createFetch('api/user/create', user)
         .then((res) => {
            setIsConfirmation(true)
            setCookie('interim_id', res.data)
         })
         .catch((e) => {
            console.log(e)
         })
   }

   const confirmCode = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const formData = new FormData(e.currentTarget)
      const code = formData.get('code')
      const id = getCookie('interim_id')

      createFetch('api/user/confirm', { id, code })
         .then((res) => {
            setCookie('user_id', res.data)
            deleteCookie('interim_id')
            router.push('/profile')
         })
         .catch((e) => {
            console.log(e)
         })
   }

   const handleChangeName = (e: any) => {
      e.target.value = formatName(e.target.value)
   }

   return (
      <>
         {!isConfirmation ? (
            <form className="flex flex-col gap-3" id="fgds" onSubmit={trySignUp}>
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
               <Button className="mx-auto mt-3 px-10" type="submit">
                  Регистрация
               </Button>
            </form>
         ) : (
            <form className="flex flex-col" onSubmit={confirmCode}>
               <Input view="entry" type="number" placeholder="Код с почты" name="code" />
               <Button className="mx-auto mt-3 px-10" type="submit">
                  Подтвердить
               </Button>
            </form>
         )}
      </>
   )
}
