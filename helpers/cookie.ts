// возвращает куки с указанным name,
// или undefined, если ничего не найдено
export function getCookie(name: string) {
   let matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
   )
   return matches ? decodeURIComponent(matches[1]) : undefined
}

export function setCookie(name: string, value: string, options = {}) {
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

export function deleteCookie(name: string) {
   setCookie(name, '', {
      'max-age': -1,
   })
}
