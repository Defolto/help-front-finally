import clsx from 'clsx'
import { forwardRef } from 'react'
import Spin from './Spin'

type Props = { inProgress?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, Props>(
   ({ className, children, inProgress, ...props }, ref) => {
      return (
         <button
            className={clsx(
               'flex cursor-pointer flex-row rounded-lg border-0 px-4 py-1.5 text-base',
               className
            )}
            ref={ref}
            {...props}
         >
            {inProgress && <Spin className="my-auto mr-2 h-5 w-5" />}
            {children}
         </button>
      )
   }
)

Button.displayName = 'Button'
