'use client'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface UiState {
  isMobileNavOpen: boolean
  announcementDismissed: boolean
}

const initialState: UiState = {
  isMobileNavOpen: false,
  announcementDismissed: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMobileNavOpen(state, action: PayloadAction<boolean>) {
      state.isMobileNavOpen = action.payload
    },
    dismissAnnouncement(state) {
      state.announcementDismissed = true
    },
  },
})

export const { setMobileNavOpen, dismissAnnouncement } = uiSlice.actions
export default uiSlice.reducer
