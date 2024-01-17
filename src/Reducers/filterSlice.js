import { createSlice } from '@reduxjs/toolkit'
const filterSlice = createSlice({
  name: 'filters',
  initialState: {},
  reducers: {
    applyFilters: (state, action) => {
      return { ...state, ...action.payload }
    }
  }
})
export const { applyFilters } = filterSlice.actions
export default filterSlice.reducer
