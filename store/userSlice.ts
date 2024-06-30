'use client'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../types'

const initialState: Omit<IUser, 'password' | 'email'> = {
   login: '',
   confirmAccount: false,
   info: {
      name: '',
      surname: '',
   },
   money: 0,
}

export const userSlice = createSlice({
   name: 'account',
   initialState,
   reducers: {
      initUser: (state, action: PayloadAction<IUser>) => {
         const { login, info, confirmAccount, money, thanks } = action.payload
         state.login = login
         state.info = info
         state.confirmAccount = confirmAccount
         state.money = money
         state.thanks = thanks
      },

      exitUser: (state) => {},
   },
})

export const { initUser, exitUser } = userSlice.actions

export default userSlice.reducer
