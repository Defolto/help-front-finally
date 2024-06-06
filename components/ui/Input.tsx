import Eye from '@/components/icons/Eye'
import clsx from 'clsx'
import { forwardRef, useState } from 'react'

type Props = {
   view?: 'entry'
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, Props>(
   ({ className, view, type, ...props }, ref) => {
      const [localType, setLocalType] = useState<string | undefined>(type)

      const showPassword = () => {
         setLocalType(localType === 'password' ? 'text' : 'password')
      }

      return (
         <label className="relative">
            <input
               className={clsx(
                  className,
                  'border-0 outline-0',
                  view === 'entry' && 'box-border w-[300px] px-2 py-1 text-lg'
               )}
               ref={ref}
               type={localType}
               {...props}
            />
            {type === 'password' && (
               <span
                  className="absolute right-0 top-0 flex h-full cursor-pointer"
                  onClick={showPassword}
               >
                  <Eye className="my-auto mr-1" isOpen={localType === 'password'} />
               </span>
            )}
         </label>
      )
   }
)

Input.displayName = 'Input'
