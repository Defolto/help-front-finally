import * as mongoose from 'mongoose'

const LOCAL_URL_MONGO_DB = `mongodb://127.0.0.1:27017/helpFront`
const REMOTE_URL_MONGO_DB = `mongodb://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBHOST}/${process.env.DBNAME}?replicaSet=MongoReplica`

let activeConnects = 0

type IResponse = {
   data?: any
   error?: string
}

export function isProduction() {
   return process.env.HOME?.includes('helpfront')
}

/**
 * Открытие соединения с БД
 */
export async function openDB(): Promise<boolean> {
   activeConnects += 1
   if (activeConnects > 2) {
      return false
   }

   const isProd = isProduction()
   await mongoose.connect(!isProd ? LOCAL_URL_MONGO_DB : REMOTE_URL_MONGO_DB)
   return true
}

/**
 * Закрытие соединения с БД
 */
export async function closeDB(): Promise<boolean> {
   activeConnects -= 1
   if (activeConnects > 0) {
      return false
   }

   await mongoose.disconnect()
   return true
}

export function createError(text: string): IResponse {
   return {
      error: text,
   }
}

export function createData(data: any): IResponse {
   return {
      data: data,
   }
}
