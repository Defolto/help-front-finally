import {
   MAX_LENGTH_LOGIN,
   MIN_LENGTH_LOGIN,
   MIN_LENGTH_PASSWORD,
   REG_EXP_EMAIL,
   REG_EXP_LOGIN,
   REG_EXP_RUS_WORD,
} from '@/helpers/constants'
import mongoose, { Schema } from 'mongoose'

const userScheme = new Schema(
   {
      login: {
         type: String,
         required: true,
         minLength: MIN_LENGTH_LOGIN,
         maxLength: MAX_LENGTH_LOGIN,
         validate: (text: string) => REG_EXP_LOGIN.test(text),
      },
      email: {
         type: String,
         required: true,
         validate: (text: string) => REG_EXP_EMAIL.test(text),
      },
      password: {
         type: Number,
         required: true,
         minLength: MIN_LENGTH_PASSWORD,
      },
      info: {
         name: {
            type: String,
            required: true,
            validate: (text: string) => REG_EXP_RUS_WORD.test(text),
         },
         surname: {
            type: String,
            required: true,
            validate: (text: string) => REG_EXP_RUS_WORD.test(text),
         },
         birthday: Date,
      },
      personalization: {
         avatar: String,
         background: String,
         status: String,
         border: String,
      },
      collections: [
         {
            name: String,
            values: [Number],
         },
      ],
   },
   { versionKey: '_somethingElse' }
)

// Настройка опций, чтобы поле идентификатора называлось 'id' вместо '_id'
userScheme.set('toJSON', {
   transform: function (doc, ret) {
      ret.id = ret._id
      delete ret._id
   },
})

export const User = mongoose.model('User', userScheme)
