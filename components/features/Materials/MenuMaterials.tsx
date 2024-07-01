import Link from 'next/link'

type IMenuItem = {
   name: string
   href: string
}

// Временный вариант. В идеале список предметов должен хранится в бд
const MENU_ITEMS: IMenuItem[] = [
   {
      name: 'Frontend (теория)',
      href: 'frontend-theory',
   },
   {
      name: 'Frontend (практика)',
      href: 'frontend-practice',
   },
   {
      name: 'Backend (теория)',
      href: 'backend-theory',
   },
   {
      name: 'Backend (практика)',
      href: 'backend-practice',
   },
   {
      name: 'Figma  (теория)',
      href: 'figma-theory',
   },
   {
      name: 'Figma  (практика)',
      href: 'figma-practice',
   },
]

export default function MenuMaterials() {
   return (
      <div className="mr-10 flex flex-col gap-3">
         <p className="text-lg font-bold">Предметы</p>
         {MENU_ITEMS.map((item, index) => {
            return (
               <div key={index}>
                  {/*TODO: узнавать, какой предмет открыт на данный момент*/}
                  <Link
                     className="text-white no-underline hover:text-blue"
                     href={`/materials/${item.href}`}
                  >
                     {item.name}
                  </Link>
               </div>
            )
         })}
      </div>
   )
}
