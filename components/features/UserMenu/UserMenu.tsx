'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import Calendar from './icons/Calendar'
import Collections from './icons/Collections'
import Home from './icons/Home'
import Materials from './icons/Materials'
import School from './icons/School'
import Settings from './icons/Settings'
import Shop from './icons/Shop'

type IMenuItem = {
   title: string
   icon: JSX.Element
   href: string
}

const MENU_ITEMS: IMenuItem[] = [
   { title: 'Главная', icon: <Home />, href: 'profile' },
   { title: 'Расписание', icon: <Calendar />, href: 'calendar' },
   { title: 'Материалы', icon: <Materials />, href: 'materials' },
   { title: 'Моя школа', icon: <School />, href: 'school' },
   { title: 'Магазин', icon: <Shop />, href: 'shop' },
   { title: 'Коллекции', icon: <Collections />, href: 'collections' },
   { title: 'Настройки', icon: <Settings />, href: 'settings' },
]

function UserMenuItem({ title, icon, active }: IMenuItem & { active: boolean }) {
   return (
      <div
         className={clsx(
            'flex cursor-pointer flex-row items-center gap-2 hover:text-green',
            active && 'text-green'
         )}
      >
         {icon}
         <p>{title}</p>
      </div>
   )
}

export default function UserMenu() {
   const pathname = usePathname()
   const lastPathname = pathname.split('/').pop()

   return (
      <div className="box-border flex h-full flex-col gap-4 bg-secondBg p-4">
         {MENU_ITEMS.map((item, index) => (
            <UserMenuItem
               key={`user-menu-${index}`}
               {...item}
               active={lastPathname === item.href}
            />
         ))}
      </div>
   )
}
