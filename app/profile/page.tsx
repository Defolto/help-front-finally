'use client'

import Hello from '../../components/features/Hello'
import { useAppSelector } from '../../store/hooks'

export default function Home() {
   const { info } = useAppSelector((state) => state.user)

   return (
      <span>
         <Hello />, {info.name} {info.surname}
      </span>
   )
}
