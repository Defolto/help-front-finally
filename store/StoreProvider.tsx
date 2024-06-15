'use client'

import React from 'react'
import { Provider } from 'react-redux'
import PreJoin from '../components/features/PreJoin'
import { store } from './store'

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
   return (
      <Provider store={store}>
         <PreJoin />
         {children}
      </Provider>
   )
}
