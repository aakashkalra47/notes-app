import { combineReducers } from 'redux'
import notesReducer from './NotesReducer'
import filterReducer from './filterReducer'
import modalReducer from './modalReducer'
export default combineReducers({
  notes: notesReducer,
  filters: filterReducer,
  modal: modalReducer
})
