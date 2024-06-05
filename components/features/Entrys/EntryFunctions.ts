import {
   MAX_LENGTH_LOGIN,
   MIN_LENGTH_LOGIN,
   MIN_LENGTH_PASSWORD,
   REG_EXP_EMAIL,
   REG_EXP_LOGIN,
   REG_EXP_RUS_WORD,
} from '@/helpers/constants'

export type IDataUser = {
   name: string
   surname: string
   email: string
   login: string
   password: string
   retryPassword: string
}

export function formatName(str: string): string {
   return str.trim().charAt(0).toUpperCase() + str.trim().slice(1).toLowerCase()
}

export function isValidDataUser(user: IDataUser): boolean {
   const { name, surname, retryPassword, password, email, login } = user

   if (retryPassword !== password) {
      alert('Пароли не совпадают')
      return false
   }

   if (password.length < MIN_LENGTH_PASSWORD) {
      alert(`Минимальная длинна пароля от ${MIN_LENGTH_PASSWORD} символов`)
      return false
   }

   if (!REG_EXP_RUS_WORD.test(name)) {
      alert('Неправильный формат имени')
      return false
   }

   if (!REG_EXP_RUS_WORD.test(surname)) {
      alert('Неправильный формат фамилии')
      return false
   }

   if (!REG_EXP_EMAIL.test(email)) {
      alert('Неправильный формат почты')
      return false
   }

   if (!REG_EXP_LOGIN.test(login)) {
      alert(
         `Размер логина от ${MIN_LENGTH_LOGIN} до ${MAX_LENGTH_LOGIN} с использованием латиницы, кириллицы, тире, подчёркивания и цифр`
      )
      return false
   }

   return true
}
