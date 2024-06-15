'use client'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../types'

export type IAccount = Omit<IUser, 'password' | 'email'>

const initialState: IAccount = {
   login: '',
   confirmAccount: false,
   info: {
      name: '',
      surname: '',
   },
}

export const userSlice = createSlice({
   name: 'account',
   initialState,
   reducers: {
      initUser: (state, action: PayloadAction<IAccount>) => {},

      exitUser: (state) => {},
   },
})

export const { initUser, exitUser } = userSlice.actions

export default userSlice.reducer
