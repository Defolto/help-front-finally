import {closeDB, openDB} from "mongoDB/general";
import Subject from "mongoDB/models/subject";
import { MDXRemote } from 'next-mdx-remote/rsc'

type Props = {
   params: {
      subject: string
   }
}

type ThemeElement = {
   name: string,
   href: string
}


async function getThemes(subjectName: string): Promise<ThemeElement[]>{
   await openDB();

   const subject = await Subject.findOne({ title: subjectName });
   await closeDB();

   if (!subject){
      return []
   }

   return subject["themes"]
}


export default async function Theme({ params: { subject } }: Props) {
   const themes: ThemeElement[] = await getThemes(subject);
   return <>
      <div className="flex-col">
         <div>
            <MDXRemote source={"# Тестовый ГЛАВНЫЙ.md файл"}/>
         </div>
         <div className="flex flex-col">
            {
               themes.length == 0 ?
                   <p>Ошибка, предмет не найден!</p> :
                   <>
                      {themes.map((value, key) => {
                         return <a key={key} href={value.href}>{value.name}</a>
                      })}
                   </>
            }
         </div>
      </div>
   </>
}
