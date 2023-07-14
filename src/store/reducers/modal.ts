import { createSlice } from '@reduxjs/toolkit'

type ModalState = {
  isVisible: boolean
}

const initialState: ModalState = {
  isVisible: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalOpen: (state) => {
      state.isVisible = true
    },
    modalClose: (state) => {
      state.isVisible = false
    }
  }
})

export const { modalOpen, modalClose } = modalSlice.actions
export default modalSlice.reducer
