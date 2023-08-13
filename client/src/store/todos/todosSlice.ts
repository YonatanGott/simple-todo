import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '_store/store'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
  todos: string[]
}
const initialState: IInitialState = {
  todos: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<string[]>) => {
      state.todos = action.payload
    },
  },
})
export const { setTodos } = todosSlice.actions
export const selectTodos = (state: RootState) => state.todos
export default todosSlice.reducer
