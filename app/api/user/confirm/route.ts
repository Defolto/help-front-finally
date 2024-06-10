import { closeDB, createData, openDB } from '../../../../mongoDB/general'
import Candidate from '../../../../mongoDB/models/candidate'

type IConfirmUser = {
   code: string
   id: string
}

export async function POST(req: Request) {
   const { code, id } = (await req.json()) as IConfirmUser

   try {
      await openDB()

      const candidate = await Candidate.findOne({ _id: id })

      await closeDB()
      return Response.json(createData(candidate.get('_id')))
   } catch (e) {
      console.log('Ошибка регистрации', e)
   }
}
