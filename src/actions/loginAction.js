import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from "./types";
import { Actions } from 'react-native-router-flux';
import { CALL_API } from '../middleware/api'

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  }
}

const loginAPI = () => (dispatch, getState) => {
  return dispatch({
    [CALL_API]: {
      types: [LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL],
      endpoint: `/login`,
      method: 'POST',
      body: {
        email: 'stefancina@live.com',
        password: 'srbijasrbima',
      }
    }
  }).then(() => Actions.main())
};

export const login = () => (dispatch, getState) => {
  return dispatch(loginAPI())
};