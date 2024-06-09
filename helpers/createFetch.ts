/**
 * Создание фетч запроса
 */
import { ALL_API } from '../app/api/names'

export type IDataFetch = {
   data?: any
   error?: string
}

export async function createFetch(api: ALL_API, data: any): Promise<IDataFetch> {
   return fetch(api, {
      headers: {
         'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
         ...data,
      }),
   }).then((res) => {
      if (res.status !== 200) {
         throw new Error('Общий сбой')
      }

      return res.json() as IDataFetch
   })
}
