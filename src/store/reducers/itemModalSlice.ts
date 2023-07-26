import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ItemModalState = {
  [itemId: string | number]: boolean
}

const initialState: ItemModalState = {}

const itemModalSlice = createSlice({
  name: 'itemModal',
  initialState,
  reducers: {
    openItemModal: (
      state,
      action: PayloadAction<{ itemId: string | number }>
    ) => {
      state[action.payload.itemId] = true
    },
    closeItemModal: (
      state,
      action: PayloadAction<{ itemId: string | number }>
    ) => {
      state[action.payload.itemId] = false
    }
  }
})

export const { openItemModal, closeItemModal } = itemModalSlice.actions
export default itemModalSlice.reducer
