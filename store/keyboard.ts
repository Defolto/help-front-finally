import {useEffect, useState } from "react";


export function useKeyboard(){
   const [userText, setUserText] = useState<KeyboardEvent>()

   useEffect(() => {
      const handleUserKeyPress = (event: KeyboardEvent) => setUserText(event);

      window.addEventListener("keydown", handleUserKeyPress);

      return () => {
         window.removeEventListener("keydown", handleUserKeyPress);
      };
   }, []);

   return userText
}