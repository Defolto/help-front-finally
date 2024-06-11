import {closeDB, createData, createError, openDB} from "../../../../mongoDB/general";
import User from "../../../../mongoDB/models/user";

type IUser = {
    login: string,
    password: string
}

export async function POST(req: Request){
    const {login, password} = (await req.json()) as IUser

    try{
        await openDB()
        const user = await User.findOne({$or: [{login: login}, {email: login}], password:password})
        await closeDB()

        return Response.json(createData(user.get('_id')))
    }catch (e){
        return Response.json(createError('Ошибка с базой данных'))
    }
}