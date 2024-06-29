import { useRouter } from 'next/navigation'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { CODE_LENGTH, REG_EXP_NUMBER } from '../../../helpers/constants'
import { deleteCookie, getCookie, setCookie } from '../../../helpers/cookie'
import { createFetch } from '../../../helpers/createFetch'
import { getMass } from '../../../helpers/functions'
import { useKeyboard } from '../../../store/keyboard'
import { Button } from '../../ui/Button'

export default function Confirm() {
   const [codeConfirm, setCodeConfirm] = useState<string[]>([])
   const keyboard = useKeyboard()
   const router = useRouter()

   const confirmCode = useCallback(
      (code: string) => {
         const id = getCookie('interim_id')

         if (code.length !== 4) {
            return
         }

         createFetch('api/user/confirm', { id, code })
            .then((res) => {
               setCookie('user_id', res.data)
               deleteCookie('interim_id')
               router.push('/profile')
            })
            .catch((e) => {
               // TODO: красивая обработка ошибки
               console.log(e)
            })
      },
      [router]
   )

   useEffect(() => {
      if (!keyboard) {
         return
      }

      const { key } = keyboard

      setCodeConfirm((prev) => {
         let items = prev.slice()

         // добавили букву
         if (REG_EXP_NUMBER.test(key) && prev.length < CODE_LENGTH) {
            items.push(key)
         }

         // удаление буквы
         if (key == 'Backspace') {
            items.pop()
         }

         // сразу отправляем проверку, если введён код
         if (items.length === CODE_LENGTH) {
            confirmCode(items.join(''))
         }

         return items
      })
   }, [keyboard, confirmCode])

   return (
      <form
         className="flex w-[300px] flex-col"
         onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            confirmCode(codeConfirm.join(''))
         }}
      >
         <p className="text-center text-xl font-bold text-white">Введите код с почты</p>
         <div className="mx-auto my-2 flex gap-2 text-black">
            {getMass(CODE_LENGTH).map((_, col) => {
               const currentCol = codeConfirm.length === col
               return (
                  <div
                     key={`code-key-${col}`}
                     className={`box-border flex h-[50px] w-[50px] items-center justify-center bg-white text-xl font-bold ${currentCol ? 'border-3 border-green-500 cursor-pointer border-solid' : ''}`}
                  >
                     {currentCol ? (
                        <span className="animation-blink font-medium">|</span>
                     ) : (
                        codeConfirm[col]
                     )}
                  </div>
               )
            })}
         </div>
         <Button className="mx-auto mt-3 px-10" type="submit">
            Подтвердить
         </Button>
      </form>
   )
}
