import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todos/todosSlice'
import { apiSlice } from '_api/apiSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
