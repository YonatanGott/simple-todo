import { Schema, model } from 'mongoose'
import { ITodo } from '../../types/Todo'

const todoSchema = new Schema<ITodo>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
      },
    },
    timestamps: true,
  },
)

const Todo = model<ITodo>('Todo', todoSchema)

export { Todo }
