import { createSlice } from '@reduxjs/toolkit'
const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    createNote: (state, { payload }) => {
      return [payload, ...state]
    },
    deleteNote: (state, { payload }) => {
      return state.filter(note => note.id !== payload)
    },
    editNote: (state, { payload }) => {
      return state.map(note => note.id === payload.id ? payload : note)
    },
    sortAscending: (state) => {
      return state.sort((a, b) => a.createdAt - b.createdAt)
    },
    sortDescending: (state) => {
      return state.sort((a, b) => b.createdAt - a.createdAt)
    }
  }
})
export const { createNote, deleteNote, editNote, sortAscending, sortDescending } = notesSlice.actions
export default notesSlice.reducer
