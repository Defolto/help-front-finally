import mongoose, { Schema } from 'mongoose'

type Theme = {
    name: string,
    href: string
}

const subjectScheme = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        themes: [
            {
                name: {
                    type: String,
                    required: true
                },
                href: {
                    type: String,
                    required: true
                }
            }
        ],
        author:{
            type: String,
            required: true
        }
    },
    { versionKey: '_somethingElse' }
)

subjectScheme.set('toJSON', {
    transform: function (doc, ret) {
        ret.id = ret._id
        delete ret._id
    },
})

const Subject = mongoose.models.Subject || mongoose.model('Subject', subjectScheme)
export default Subject