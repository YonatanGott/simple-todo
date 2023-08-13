export interface ITodo {
  id: string
  title: string
  content: string
  active: boolean
}

export type ITodoRequest = Omit<ITodo, 'id', 'active'>
