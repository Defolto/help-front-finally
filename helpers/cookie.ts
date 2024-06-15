type INameCookie = 'user_id' | 'interim_id'
export function getCookie(name: INameCookie) {
   let matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
   )
   return matches ? decodeURIComponent(matches[1]) : undefined
}

export function setCookie(name: INameCookie, value: string, options = {}) {
   options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options,
   }
   // @ts-ignore
   if (options.expires instanceof Date) {
      // @ts-ignore
      options.expires = options.expires.toUTCString()
   }

   let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

   for (let optionKey in options) {
      updatedCookie += '; ' + optionKey
      // @ts-ignore
      let optionValue = options[optionKey]
      if (optionValue !== true) {
         updatedCookie += '=' + optionValue
      }
   }

   document.cookie = updatedCookie
}

export function deleteCookie(name: INameCookie) {
   setCookie(name, '', {
      'max-age': -1,
   })
}
