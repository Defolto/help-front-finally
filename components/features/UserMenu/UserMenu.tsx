'use client'

import Calendar from './icons/Calendar'
import Collections from './icons/Collections'
import Home from './icons/Home'
import School from './icons/School'
import Settings from './icons/Settings'
import Shop from './icons/Shop'

type IMenuItem = {
   title: string
   icon: JSX.Element
}

const MENU_ITEMS: IMenuItem[] = [
   { title: 'Главная', icon: <Home /> },
   { title: 'Расписание', icon: <Calendar /> },
   { title: 'Моя школа', icon: <School /> },
   { title: 'Магазин', icon: <Shop /> },
   { title: 'Коллекции', icon: <Collections /> },
   { title: 'Настройки', icon: <Settings /> },
]

function UserMenuItem({ title, icon }: IMenuItem) {
   return (
      <div className="flex cursor-pointer flex-row items-center gap-2">
         {icon}
         <p>{title}</p>
      </div>
   )
}

export default function UserMenu() {
   return (
      <div className="bg-secondBg box-border flex h-full flex-col gap-4 p-4">
         {MENU_ITEMS.map((item, index) => (
            <UserMenuItem key={`user-menu-${index}`} {...item} />
         ))}
      </div>
   )
}
