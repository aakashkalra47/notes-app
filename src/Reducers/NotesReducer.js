import { createSlice } from '@reduxjs/toolkit'
const notesSlice = createSlice({
  name: 'notes',
  initialState: {},
  reducers: {
    createNote: (state, { payload }) => {
      state[payload.id] = payload
    },
    deleteNote: (state, { payload }) => {
      delete state[payload]
    },
    editNote: (state, { payload }) => {
      state[payload.id] = { ...state[payload.id], ...payload }
    },
    sortAscending: (state) => {
      const ordered = Object.keys(state).sort((a, b) => {
        return state[a].createdAt - state[b].createdAt
      })
      const ascending = {}
      ordered.forEach((key) => {
        ascending[key] = state[key]
      })
      return { ...ascending }
    },
    sortDescending: (state) => {
      const order = Object.keys(state).sort((a, b) => {
        return state[b].createdAt - state[a].createdAt
      })
      const descending = {}
      order.forEach((key) => {
        descending[key] = state[key]
      })
      return { ...descending }
    }

  }
})
export const { createNote, deleteNote, editNote, sortAscending, sortDescending } = notesSlice.actions
export default notesSlice.reducer
