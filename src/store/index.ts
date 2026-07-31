'use client'

import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './slices/uiSlice'
import notificationsReducer from './slices/notificationsSlice'
import modalsReducer from './slices/modalsSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    notifications: notificationsReducer,
    modals: modalsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
