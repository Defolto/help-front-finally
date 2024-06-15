import { FormEvent } from 'react'
import { createFetch } from 'helpers/createFetch'
import { Button } from '../../ui/Button'
import { Input } from '../../ui/Input'
import {setCookie} from "helpers/cookie";
import {useRouter} from "next/navigation";
import {REG_EXP_EMAIL} from "../../../helpers/constants";

/**
 * Компонент входа
 */
export default function LogIn() {
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
      }
      else{
          login = data
      }

      createFetch('api/user/login', { login, email, password })
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
            <Input view="entry" type="text" name="data" placeholder="Почта или логин" />
            <Input view="entry" type="password" name="password" placeholder="Пароль" />
            <Button className="mx-auto px-10" type="submit">
               Вход
            </Button>
         </form>
      </>
   )
}
