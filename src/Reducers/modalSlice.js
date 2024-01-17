import { createSlice } from '@reduxjs/toolkit'
const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    data: {}
  },
  reducers: {
    setModalState: (state, action) => {
      return { ...state, ...action.payload }
    }
  }
})
export const { setModalState } = modalSlice.actions
export default modalSlice.reducer
