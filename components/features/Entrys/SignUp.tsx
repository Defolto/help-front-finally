import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'
import { deleteCookie, getCookie, setCookie } from 'helpers/cookie'
import { createFetch } from 'helpers/createFetch'
import { Button } from '../../ui/Button'
import { Input } from '../../ui/Input'
import { IDataUser, formatName, isValidDataUser } from './EntryFunctions'
import { CODE_LENGTH, REG_EXP_NUMBER } from 'helpers/constants'
import {useKeyboard} from 'store/keyboard'
import { getMass } from 'helpers/functions'


/**
 * Компонент регистрации
 */
export default function SignUp() {
   const [isConfirmation, setIsConfirmation] = useState<boolean>(false)

   const router = useRouter()
   const [codeConfirm, setCodeConfirm] = useState<string[]>([]);
   const keyboard = useKeyboard()

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

      const code = codeConfirm.join("");
      const id = getCookie('interim_id')

      if (code.length !== 4){
         return;
      }

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

   useEffect(()=>{
      if (!keyboard){
         return
      }

      const {key} = keyboard
      let items = codeConfirm.slice()

      // добавили букву
      if (REG_EXP_NUMBER.test(key) && codeConfirm.length < CODE_LENGTH){
         items.push(key)
      }

      // удаление буквы
      if (key == "Backspace"){
         items.pop()
      }

      setCodeConfirm(items)

   }, [keyboard])

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
               <p className="text-center text-white text-xl font-bold">Введите код с почты</p>
               <div className="flex">
                  {getMass(CODE_LENGTH).map((_, col) => {
                     return <div key={`code-key-${col}`}
                                 className="w-[50px] h-[50px] m-[5px] bg-white flex items-center justify-center text-xl font-bold">
                        {codeConfirm[col]}
                     </div>
                  })}
               </div>
               <Button className="mx-auto mt-3 px-10" type="submit">
                  Подтвердить
               </Button>
            </form>
         )}
      </>
   )
}
