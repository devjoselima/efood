import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducers/cart'
import modalReducer from './reducers/modal'
import checkoutReducer from './reducers/checkout'
import modalSlice from './reducers/itemModalSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    checkout: checkoutReducer,
    itemModal: modalSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type RootReducer = ReturnType<typeof store.getState>
