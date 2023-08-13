import { TodosController } from '../../controllers/todos'
import { Router } from 'express'

const todosRoutes = (): Router => {
  const router = Router()

  const controller = new TodosController()

  router.get('/', controller.getAllTodos)

  router.get('/:id', controller.getTodoById)

  router.post('/', controller.createTodo)

  router.put('/', controller.updateTodo)

  router.delete('/:id', controller.deleteTodoById)

  return router
}

export default todosRoutes
