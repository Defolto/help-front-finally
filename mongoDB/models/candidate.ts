import mongoose, { Schema } from 'mongoose'
import {
   MAX_LENGTH_LOGIN,
   MIN_LENGTH_LOGIN,
   MIN_LENGTH_PASSWORD,
   REG_EXP_EMAIL,
   REG_EXP_LOGIN,
   REG_EXP_RUS_WORD,
} from '../../helpers/constants'
import { getRandom } from '../../helpers/functions'

function createPassword(size: number) {
   let code = ''
   for (let i = 0; i < size; i++) {
      code += getRandom(0, 9)
   }

   return code
}

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
         default: createPassword(4),
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
candidateScheme.set('toJSON', {
   transform: function (doc, ret) {
      ret.id = ret._id
      delete ret._id
   },
})

const Candidate = mongoose.models.Candidate || mongoose.model('Candidate', candidateScheme)
export default Candidate
