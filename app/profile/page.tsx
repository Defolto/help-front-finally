'use client'

import { useEffect } from 'react'
import { getCookie } from '../../helpers/cookie'

export default function Home() {
   useEffect(() => {
      const id = getCookie('user_id')

      if (!id) {
         return
      }

      console.log(id)
   }, [])

   return <span>Привет, главная страница</span>
}
