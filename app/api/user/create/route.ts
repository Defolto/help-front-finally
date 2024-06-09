import { closeDB, createData, openDB } from '../../../../mongoDB/general'
import Candidate from '../../../../mongoDB/models/candidate'
import { ICandidate } from '../../../../types'

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

      const candidate: ICandidate = {
         login,
         email,
         password,
         info: {
            name,
            surname,
         },
      }

      const newUser = new Candidate(candidate)
      await newUser.save()

      await closeDB()
      return Response.json(createData(newUser.get('_id')))
   } catch (e) {
      console.log('Ошибка регистрации', e)
   }
}
