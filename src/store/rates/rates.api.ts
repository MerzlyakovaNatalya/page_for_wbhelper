import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ratesApi = createApi({
  reducerPath: 'api/rates',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://back-wb-helper.ru/api/v1', mode: 'cors'
  }),
  endpoints: (build) => ({
    getRates: build.query({
      query: () => `wb/regions/`,
    }),
  }),
})

export const { useGetRatesQuery } = ratesApi