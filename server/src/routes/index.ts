import { Router } from 'express'
//Routes
import todosRoutes from './todos'

const router = (): Router => {
  const router = Router({ mergeParams: true })

  router.use('/todos', todosRoutes())

  return router
}

export default router
