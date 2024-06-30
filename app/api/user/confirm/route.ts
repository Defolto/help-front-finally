import { closeDB, createData, createError, openDB } from 'mongoDB/general'
import Candidate from 'mongoDB/models/candidate'
import User from 'mongoDB/models/user'
import { IUser } from 'types'

type IConfirmUser = {
   code: string
   id: string
}

export async function POST(req: Request) {
   const { code, id } = (await req.json()) as IConfirmUser

   try {
      await openDB()

      const candidate = await Candidate.findOne({ _id: id })
      const confirmCode = candidate.get('confirmCode')

      if (confirmCode !== code) {
         return Response.json(createError('Неправильный код'))
      }

      const newUser: IUser = {
         login: candidate.get('login'),
         email: candidate.get('email'),
         password: candidate.get('password'),
         confirmAccount: false,
         info: {
            name: candidate.get('info').name,
            surname: candidate.get('info').surname,
         },
         money: 0,
      }

      const user = new User(newUser)
      await user.save()
      await Candidate.deleteOne({ _id: id })

      await closeDB()
      return Response.json(createData(user.get('_id')))
   } catch (e) {
      return Response.json(createError('Ошибка с базой данных'))
   }
}
