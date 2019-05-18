import { MOVIES_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  title: '',
  description: '',
  poster: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIES_FETCH_SUCCESS: {
      return { ...state, list: action.payload }
    }
    default:
      return state;
  }
}