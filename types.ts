export type ICandidate = {
   login: string
   email: string
   password: string
   confirmCode: string
   info: {
      name: string
      surname: string
      birthday?: Date
   }
   personalization?: {
      avatar?: string
      background?: string
      status?: string
      border?: string
   }
   collections?: Record<string, number[]>
}

export type IUser = {
   login: string
   email: string
   password: string
   confirmAccount: boolean
   info: {
      name: string
      surname: string
      birthday?: Date
   }
   money: number
   personalization?: {
      avatar?: string
      background?: string
      status?: string
      border?: string
   }
   collections?: Record<string, number[]>
   thanks?: number
}
