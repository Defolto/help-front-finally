import { setCookie } from 'helpers/cookie'
import { createFetch } from 'helpers/createFetch'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { REG_EXP_EMAIL } from '../../../helpers/constants'
import { Button } from '../../ui/Button'
import { Input } from '../../ui/Input'

/**
 * Компонент входа
 */
export default function LogIn() {
   const [inProgress, setInProgress] = useState(false)
   const router = useRouter()
   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const formData = new FormData(e.currentTarget)
      const password = formData.get('password')
      const data = formData.get('data')
      let email: FormDataEntryValue | null = null
      let login: FormDataEntryValue | null = null
      if (REG_EXP_EMAIL.test(data as string)) {
         email = data
      } else {
         login = data
      }

      setInProgress(true)
      createFetch('api/user/login', { login, email, password })
         .then((res) => {
            setCookie('user_id', res.data)
            router.push('/profile')
         })
         .catch((e) => {
            console.log(e)
         })
         .finally(() => setInProgress(false))
   }

   return (
      <>
         <form className="flex flex-col gap-3" onSubmit={onSubmit}>
            <Input
               disabled={inProgress}
               view="entry"
               type="text"
               name="data"
               placeholder="Почта или логин"
            />
            <Input
               disabled={inProgress}
               view="entry"
               type="password"
               name="password"
               placeholder="Пароль"
            />
            <Button className="mx-auto px-10" type="submit" inProgress={inProgress}>
               Вход
            </Button>
         </form>
      </>
   )
}
