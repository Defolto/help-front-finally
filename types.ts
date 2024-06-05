export type IUser = {
   login: string
   email: string
   password: string
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
