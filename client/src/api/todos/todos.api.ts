import { apiSlice } from '_api/apiSlice'
import { ITodo } from 'types/Todo'

type TodosResponse = ITodo[]

export const todosApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TodosResponse, void>({
      query: () => '/todos',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Todos', id } as const)),
              { type: 'Todos', id: 'LIST' },
            ]
          : [{ type: 'Todos', id: 'LIST' }],
    }),
    getTodoById: builder.query<ITodo, string>({
      query: (id: string) => `/todos/${id}`,
      providesTags: (result, error, id) => [{ type: 'Todos', id }],
    }),
    createTodo: builder.mutation<ITodo, Partial<ITodo>>({
      // can try Omit<>
      query(data) {
        return {
          url: '/todos',
          method: 'POST',
          credentials: 'include',
          body: data,
        }
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    updateTodoById: builder.mutation<ITodo, Partial<ITodo>>({
      query(data) {
        return {
          url: `/todos`,
          method: 'PUT',
          credentials: 'include',
          body: data,
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Todos', id }],
    }),
    deleteTodoById: builder.mutation<{ success: boolean; id: string }, string>({
      query(id) {
        return {
          url: `/todos/${id}`,
          method: 'DELETE',
          credentials: 'include',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Todos', id }],
    }),
  }),
})

export const {
  useGetTodosQuery,
  useGetTodoByIdQuery,
  useCreateTodoMutation,
  useUpdateTodoByIdMutation,
  useDeleteTodoByIdMutation,
} = todosApi
