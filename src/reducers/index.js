import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer';
import selectionReducer from './selectionReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  libraries: libraryReducer,
  selectedLibraryId: selectionReducer,
  auth: loginReducer,
});
