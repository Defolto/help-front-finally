import { closeDB, createData, createError, openDB } from '@/mongoDB/general'
import { User } from '@/mongoDB/models/user'
import { IUser } from '@/types'

type IUserCreated = {
   name: string
   surname: string
   email: string
   login: string
   password: string
}

export async function POST(req: Request) {
   const { name, email, surname, password, login } = (await req.json()) as IUserCreated

   try {
      await openDB()

      const user: IUser = {
         login,
         email,
         password,
         info: {
            name,
            surname,
         },
      }

      const newUser = new User(user)
      await newUser.save()

      await closeDB()
      return Response.json(createData(user))
   } catch (e) {
      console.log(e)
      return Response.json(createError('Ошибка регистрации'))
   }
}
