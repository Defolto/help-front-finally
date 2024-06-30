import {closeDB, openDB} from "mongoDB/general";
import Subject from "mongoDB/models/subject";
import {MDXRemote} from 'next-mdx-remote/rsc'
import {existsSync, promises as fs} from "fs";
import * as process from "node:process";

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

async function getMainMDText(subject: string){
   if (!existsSync(`${process.cwd()}/materials/${subject}/main.md`)){
      return "Главный.md файл не найден =("
   }
   return await fs.readFile(`${process.cwd()}/materials/${subject}/main.md`, "utf8")
}

async function hasSubject(subject: string){
   return existsSync(`${process.cwd()}/materials/${subject}`)
}


export default async function Theme({ params: { subject } }: Props) {
   const themes: ThemeElement[] = await getThemes(subject);
   const mainMDText = await getMainMDText(subject)
   const hasElement = await hasSubject(subject)
   return <>
      <div className="flex-col">
         <div>
            {
               !hasElement ?
                   <></> :
                   <MDXRemote source={mainMDText}/>
            }
         </div>
         <div className="flex flex-col">
            {
               !hasElement ?
                   <p>Ошибка, предмет не найден!</p> :
                   <>
                      {themes.map((value, key) => {
                         return <a key={key} href={value.href} className="text-white text-xl">{value.name}</a>
                      })}
                   </>
            }
         </div>
      </div>
   </>
}
