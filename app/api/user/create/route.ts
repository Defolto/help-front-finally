import { getRandom } from '../../../../helpers/functions'
import { closeDB, createData, createError, openDB } from '../../../../mongoDB/general'
import Candidate from '../../../../mongoDB/models/candidate'
import { ICandidate } from '../../../../types'

type IUserCreated = {
   name: string
   surname: string
   email: string
   login: string
   password: string
}

function createPassword(size: number) {
   let code = ''
   for (let i = 0; i < size; i++) {
      code += getRandom(0, 9)
   }

   return code
}

export async function POST(req: Request) {
   const { name, email, surname, password, login } = (await req.json()) as IUserCreated

   try {
      await openDB()

      const candidate: ICandidate = {
         login,
         email,
         password,
         confirmCode: createPassword(4),
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
      return Response.json(createError('Ошибка с базой данных'))
   }
}
