'use client'

import { useAppSelector } from '../../store/hooks'

export default function Home() {
   const { info } = useAppSelector((state) => state.user)

   return (
      <span>
         Привет, {info.name} {info.surname}
      </span>
   )
}
