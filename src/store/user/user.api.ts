import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'api/user',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://back-wb-helper.ru/api/v1'
  }),
  endpoints: (build) => ({
    addUser: build.mutation({
      query: (body) => ({
        url: '/users/login/',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useAddUserMutation } = userApi