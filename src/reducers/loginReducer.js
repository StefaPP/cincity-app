import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../actions/types';
import { Actions } from 'react-native-router-flux';

const INITIAL_STATE = {
  email: 'stefancina@live.com',
  password: 'srbijasrbima',
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED: {
      return { ...state, email: action.payload };
    }
    case PASSWORD_CHANGED: {
      return { ...state, password: action.payload };
    }
    case LOGIN_USER: {
      return { ...state, loading: true, error: '' };
    }
    case LOGIN_USER_SUCCESS: {
      return { ...state, ...INITIAL_STATE, user: action.response };
    }
    case LOGIN_USER_FAIL: {
      return { ...state, error: 'Authentication failed.', loading: false };
    }
    default:
      return state;
  }
}