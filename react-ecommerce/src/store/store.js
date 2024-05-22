import { configureStore } from '@reduxjs/toolkit'
import cartadd from'../cartslice/cartslice'

export const store = configureStore({
  reducer: {
    cart:cartadd
  },
})