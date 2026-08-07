'use client'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type NotificationVariant = 'success' | 'error' | 'warning' | 'info'

export interface Notification {
  id: string
  title: string
  message?: string
  variant: NotificationVariant
  duration?: number
}

interface NotificationsState {
  items: Notification[]
}

const initialState: NotificationsState = {
  items: [],
}

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification(state, action: PayloadAction<Omit<Notification, 'id'>>) {
      state.items.push({ ...action.payload, id: crypto.randomUUID() })
    },
    removeNotification(state, action: PayloadAction<string>) {
      state.items = state.items.filter((n) => n.id !== action.payload)
    },
    clearNotifications(state) {
      state.items = []
    },
  },
})

export const { addNotification, removeNotification, clearNotifications } =
  notificationsSlice.actions
export default notificationsSlice.reducer
