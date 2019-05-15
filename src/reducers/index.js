import { combineReducers } from 'redux';
import selectionReducer from './selectionReducer';
import movieReducer from './movieReducer';
import loginReducer from './loginReducer';
import moviesReducer from './moviesReducer';

export default combineReducers({
  selectedLibraryId: selectionReducer,
  auth: loginReducer,
  movieForm: movieReducer,
  movies: moviesReducer,
});
