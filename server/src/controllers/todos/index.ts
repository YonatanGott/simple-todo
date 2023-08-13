import { ITodo } from '../../types/Todo'
import { Todo } from '../../models/todos/todo'
import { BaseController } from '../index'
import { Request, Response } from 'express'

export class TodosController extends BaseController {
  getAllTodos = async (req: Request, res: Response) => {
    try {
      const todos: ITodo[] = await Todo.find().sort({ createdAt: -1 })
      if (!todos) {
        this.notFound(res)
      }
      return this.success<ITodo[]>(res, todos)
    } catch (error) {
      return this.fail(res, error.toString())
    }
  }
  getTodoById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const todo: ITodo = await Todo.findById(id)
      if (!todo) {
        return this.notFound(res)
      }
      return this.success<ITodo>(res, todo)
    } catch (error) {
      return this.fail(res, error.toString())
    }
  }
  createTodo = async (req: Request, res: Response) => {
    try {
      const { title, content } = req.body
      const todo: ITodo = await Todo.create({ title, content })
      return this.success<ITodo>(res, todo)
    } catch (error) {
      return this.fail(res, error.toString())
    }
  }
  updateTodo = async (req: Request, res: Response) => {
    try {
      const { id, title, content, active } = req.body
      const todo: ITodo = await Todo.findByIdAndUpdate(
        id,
        {
          title,
          content,
          active,
        },
        { new: true },
      )
      if (!todo) {
        return this.notFound(res)
      }
      return this.success<ITodo>(res, todo)
    } catch (error) {
      return this.fail(res, error.toString())
    }
  }
  deleteTodoById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      await Todo.findByIdAndDelete(id)
      return this.success(res)
    } catch (error) {
      return this.fail(res, 'Could not delete Todo')
    }
  }
}
