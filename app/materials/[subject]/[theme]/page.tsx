import {existsSync, promises as fs} from "fs";
import process from "node:process";
import {MDXRemote} from "next-mdx-remote/rsc";
import {closeDB, openDB} from "../../../../mongoDB/general";
import Subject from "../../../../mongoDB/models/subject";

type Props = {
   params: {
      subject: string
      theme: string
   }
}

type ThemeElement = {
   name: string,
   href: string
}

async function hasSubject(subjectName: string) {
   await openDB();

   const subject = await Subject.findOne({title: subjectName});
   await closeDB();

   return !subject
}

async function hasTheme(subjectName: string, themeName: string){
   await openDB();

   const subject = await Subject.findOne({title: subjectName});
   await closeDB();

   const themesRaw: ThemeElement[] = await subject["themes"]
   const themesFiltered = themesRaw.find(value => {return  value.href==themeName})
   return themesFiltered == undefined;
}

async function getMDText(subject: string, theme: string){
   if (!existsSync(`${process.cwd()}/materials/${subject}/${theme}.md`)){
      return "Главный.md файл не найден =("
   }
   return await fs.readFile(`${process.cwd()}/materials/${subject}/${theme}.md`, "utf8")
}



export default async function Theme({ params: { subject, theme } }: Props) {
   const hasSubjectElement = await hasSubject(subject)
   const hasThemeElement = await hasTheme(subject, theme)
   const mdText = await getMDText(subject, theme)
   return <div>
      {hasSubjectElement ?
          <p>Ошибка предмет не найден</p> :
          <>
             {
                hasThemeElement ?
                    <p>Ошибка тема не найдена</p> :
                    <MDXRemote source={mdText}/>
             }
          </>
      }
   </div>
}
