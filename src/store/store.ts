import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ratesApi } from './rates/rates.api'
import { userApi } from './user/user.api'

export const store = configureStore({
  reducer: {
    [ratesApi.reducerPath]: ratesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      ratesApi.middleware,
      userApi.middleware
    ]),
})

setupListeners(store.dispatch)

 export type TypeRootState = ReturnType<typeof store.getState>