'use client'

import clsx from 'clsx'
import Link from 'next/link'
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
   { title: 'Главная', icon: <Home />, href: '/profile' },
   { title: 'Расписание', icon: <Calendar />, href: '/profile/calendar' },
   { title: 'Материалы', icon: <Materials />, href: '/materials' }, // без профиля, т.к. там не нужен редакс
   { title: 'Моя школа', icon: <School />, href: '/profile/school' },
   { title: 'Магазин', icon: <Shop />, href: '/profile/shop' },
   { title: 'Коллекции', icon: <Collections />, href: '/profile/collections' },
   { title: 'Настройки', icon: <Settings />, href: '/profile/settings' },
]

function UserMenuItem({ title, icon, href }: IMenuItem) {
   const pathname = usePathname()
   // В материалах может быть вложенный путь
   const isMaterials = pathname.includes('materials') && href.includes('materials')

   return (
      <Link
         href={href}
         className={clsx(
            'flex cursor-pointer flex-row items-center gap-2 text-white no-underline hover:text-green',
            (pathname === href || isMaterials) && '!text-green'
         )}
      >
         {icon}
         <p>{title}</p>
      </Link>
   )
}

export default function UserMenu() {
   return (
      <div className="box-border flex h-full flex-col gap-4 bg-secondBg p-4">
         {MENU_ITEMS.map((item, index) => (
            <UserMenuItem key={`user-menu-${index}`} {...item} />
         ))}
      </div>
   )
}
