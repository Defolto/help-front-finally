import clsx from 'clsx'
import { forwardRef } from 'react'

type Props = {
   view?: 'frame'
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, Props>(({ className, view, ...props }, ref) => {
   return (
      <input
         className={clsx(className, view === 'frame' && 'border-0 px-2 py-1 text-lg outline-0')}
         ref={ref}
         {...props}
      />
   )
})

Input.displayName = 'Input'
