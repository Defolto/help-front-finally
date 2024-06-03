import clsx from 'clsx'
import { forwardRef } from 'react'

type Props = {} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, Props>(({ className, ...props }, ref) => {
   return (
      <button
         className={clsx('cursor-pointer rounded-lg border-0 px-4 py-1.5 text-base', className)}
         ref={ref}
         {...props}
      />
   )
})

Button.displayName = 'Button'
