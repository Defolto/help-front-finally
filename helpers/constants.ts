export const MIN_LENGTH_LOGIN = 5
export const MAX_LENGTH_LOGIN = 15
// https://regexper.com для проверок регулярки
export const REG_EXP_LOGIN = new RegExp(
   `^[a-zA-Z0-9а-яА-Я-_ ]{${MIN_LENGTH_LOGIN},${MAX_LENGTH_LOGIN}}$`
)
export const REG_EXP_EMAIL = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
export const MIN_LENGTH_PASSWORD = 6
export const REG_EXP_RUS_WORD = /^[А-Я][а-яё]*$/
export const REG_EXP_NUMBER = /^[0-9]*$/
export const CODE_LENGTH = 4
