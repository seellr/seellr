'use client'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type ModalId = 'contact' | 'demo' | 'auth' | 'imagePreview'

interface ModalsState {
  openModal: ModalId | null
  modalData: Record<string, unknown>
}

const initialState: ModalsState = {
  openModal: null,
  modalData: {},
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<{ id: ModalId; data?: Record<string, unknown> }>) {
      state.openModal = action.payload.id
      state.modalData = action.payload.data ?? {}
    },
    closeModal(state) {
      state.openModal = null
      state.modalData = {}
    },
  },
})

export const { openModal, closeModal } = modalsSlice.actions
export default modalsSlice.reducer
