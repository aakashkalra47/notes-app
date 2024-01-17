import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './notesSlice'
import filterReducer from './filterSlice'
import modalReducer from './modalSlice'
const store = configureStore({
  reducer: {
    notes: notesReducer,
    filters: filterReducer,
    modal: modalReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
})
export default store
