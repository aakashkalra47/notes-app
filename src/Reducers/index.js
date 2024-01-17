import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './notesReducer'
import filterReducer from './filterReducer'
import modalReducer from './modalReducer'
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
