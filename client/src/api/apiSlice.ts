import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryOptions } from '_utils/rtkQuery.utils'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(baseQueryOptions),
  tagTypes: ['Todos', 'Todo', 'User'],
  endpoints: (builder) => ({}),
})
