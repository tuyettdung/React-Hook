import { configureStore } from '@reduxjs/toolkit'
import facebookReducer from './facebookReducer'
import numberReducer from './numberReducer'

export const store = configureStore({
  reducer: {
    number: numberReducer,
    facebookReducer: facebookReducer
  },
})