import clsx from 'clsx'
import { forwardRef } from 'react'

type Props = {
   view?: 'entry'
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, Props>(({ className, view, ...props }, ref) => {
   return (
      <input
         className={clsx(
            className,
            'border-0 outline-0',
            view === 'entry' && 'box-border w-[300px] px-2 py-1 text-lg'
         )}
         ref={ref}
         {...props}
      />
   )
})

Input.displayName = 'Input'
