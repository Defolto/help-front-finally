import { FormEvent } from 'react'
import { createFetch } from '../../../helpers/createFetch'
import { Button } from '../../ui/Button'
import { Input } from '../../ui/Input'
import {deleteCookie, getCookie, setCookie} from "../../../helpers/cookie";
import {useRouter} from "next/navigation";

/**
 * Компонент входа
 */
export default function LogIn() {
   const router = useRouter()
   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const formData = new FormData(e.currentTarget)
      const login = formData.get('login')
      const password = formData.get('password')

      createFetch('api/user/login', { login, password })
          .then((res) => {
             setCookie('user_id', res.data)
             router.push('/profile')
          })
          .catch((e) => {
             console.log(e)
          })
   }

   return (
      <>
         <form className="flex flex-col gap-3" onSubmit={onSubmit}>
            <Input view="entry" type="text" name="login" placeholder="Почта или логин" />
            <Input view="entry" type="password" name="password" placeholder="Пароль" />
            <Button className="mx-auto px-10" type="submit">
               Вход
            </Button>
         </form>
      </>
   )
}
