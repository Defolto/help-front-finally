import { configureStore } from '@reduxjs/toolkit'
import { AnyAction, Middleware } from 'redux'
import { ThunkAction } from 'redux-thunk'
import user from './userSlice'

export const store = configureStore({
   reducer: {
      user,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void, ExtraThunkArg = unknown> = ThunkAction<
   ReturnType,
   RootState,
   ExtraThunkArg,
   AnyAction
>
export type AppMiddleware = Middleware<AppThunk, RootState, AppDispatch>
