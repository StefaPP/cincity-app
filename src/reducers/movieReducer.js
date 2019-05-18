import { MOVIE_UPDATE, MOVIE_CREATE, MOVIE_EDIT } from '../actions/types';

const INITIAL_STATE = {
  title: '',
  description: '',
  poster: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIE_UPDATE: {
      return { ...state, [action.payload.prop]: action.payload.value };
    }
    case MOVIE_CREATE:
    case MOVIE_EDIT:
      return INITIAL_STATE;
    default:
      return state;
  }
}