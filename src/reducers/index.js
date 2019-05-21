import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import loginReducer from './loginReducer';
import moviesReducer from './moviesReducer';

export default combineReducers({
  auth: loginReducer,
  movieForm: movieReducer,
  movies: moviesReducer,
});
