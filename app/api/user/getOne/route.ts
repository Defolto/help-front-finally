import { closeDB, createData, createError, openDB } from 'mongoDB/general'
import User from 'mongoDB/models/user'

type IUser = {
   login?: string
   email?: string
   id?: string
}

export async function POST(req: Request) {
   const { login, email, id } = (await req.json()) as IUser

   try {
      await openDB()
      const user = await User.findOne({ $or: [{ login }, { email }, { _id: id }] })
      await closeDB()

      const data = user.toJSON()
      delete data.id
      return Response.json(createData(data))
   } catch (e) {
      return Response.json(createError('Ошибка с базой данных'))
   }
}
