import { closeDB, createData, createError, openDB } from 'mongoDB/general'
import User from 'mongoDB/models/user'

type IUser = {
   login: string
   email: string
   password: string
}

export async function POST(req: Request) {
   const { login, email, password } = (await req.json()) as IUser

   try {
      await openDB()
      const user = await User.findOne({
         $or: [{ login: login }, { email: email }],
         password,
      })
      await closeDB()

      if (!user) {
         return Response.json(createError('Пользователь не найден'))
      }

      return Response.json(createData(user.get('_id')))
   } catch (e) {
      return Response.json(createError('Ошибка с базой данных'))
   }
}
