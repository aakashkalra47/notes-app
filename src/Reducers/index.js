import {combineReducers} from 'redux';
import notesReducer from './NotesReducer';
import filterReducer from './filterReducer';

export default combineReducers({
    notes:notesReducer,
    filters:filterReducer
});