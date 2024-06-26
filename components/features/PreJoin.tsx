import { useEffect } from 'react'
import { getCookie } from '../../helpers/cookie'
import { createFetch } from '../../helpers/createFetch'
import { useAppDispatch } from '../../store/hooks'
import { initUser } from '../../store/userSlice'

export default function PreJoin() {
   const dispatch = useAppDispatch()

   useEffect(() => {
      const id = getCookie('user_id')
      createFetch('api/user/getOne', { id })
         .then((res) => {
            dispatch(initUser(res.data))
         })
         .catch((e) => {
            console.log(e)
         })
   }, [dispatch])

   return null
}
