import {promises as fs} from "fs";
import * as process from "node:process";
type Props = {
   params: {
      subject: string
   }
}

type InfoFile = {
   name: string
}

type Theme = {
   name: string,
   href: string
}

async function getNameTheme(subject: string, theme: string){
   const infoFile = await fs.readFile(`${process.cwd()}/materials/${subject}/${theme}/lesson.json`, "utf8")
   const {name} = JSON.parse(infoFile) as InfoFile
   return name
}

async function getThemes(subject: string){
   const themesRaw = await fs.readdir(`${process.cwd()}/materials/${subject}/`, { withFileTypes: true })
   const themeFiltered = themesRaw.filter(d => d.isDirectory()).map(d => d.name);
   const themes: Theme[] = []
   for (const theme of themeFiltered) {
      const nameTheme = await getNameTheme(subject, theme)
      themes.push({
         name: nameTheme,
         href: theme
      })
   }
   return themes
}

export default async function Theme({ params: { subject } }: Props) {
   const themes = await getThemes(subject)
   return <div className="flex flex-col">
      {themes.map((value, index) => {
         return <a className="text-white text-lg" key={index} href={`/materials/${subject}/${value.href}`}>{value.name}</a>
      })}
   </div>
}
