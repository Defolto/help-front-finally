import mongoose, { Schema } from 'mongoose'
import {
   MAX_LENGTH_LOGIN,
   MIN_LENGTH_LOGIN,
   MIN_LENGTH_PASSWORD,
   REG_EXP_EMAIL,
   REG_EXP_LOGIN,
   REG_EXP_RUS_WORD,
} from 'helpers/constants'

const candidateScheme = new Schema(
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
         type: String,
         required: true,
         minLength: MIN_LENGTH_PASSWORD,
      },
      confirmCode: {
         type: String,
         required: true,
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
      },
   },
   { versionKey: false }
)

// Настройка опций, чтобы поле идентификатора называлось 'id' вместо '_id'
candidateScheme.set('toJSON', {
   transform: function (doc, ret) {
      ret.id = ret._id
      delete ret._id
   },
})

const Candidate = mongoose.models.Candidate || mongoose.model('Candidate', candidateScheme)
export default Candidate
