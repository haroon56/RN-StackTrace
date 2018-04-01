import {combineReducers} from 'redux';
import libararyReducer from './libraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: libararyReducer,
    selectedLibraryId: SelectionReducer
})