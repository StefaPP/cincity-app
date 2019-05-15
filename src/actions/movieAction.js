import {
  MOVIE_UPDATE,
  MOVIE_CREATE,
  MOVIES_FETCH_SUCCESS
} from './types';

import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';

export const movieUpdate = ({ prop, value }) => {
  return {
    type: MOVIE_UPDATE,
    payload: { prop, value },
  };
};

export const movieCreate = ({ title, description }) => dispatch => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/movies`)
    .push({ title, description })
    .then(() => {
      dispatch({ type: MOVIE_CREATE });
      Actions.pop();
    })
};

export const fetchMovies = () => dispatch => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/movies`)
    .on('value', snapshot => {
      dispatch({ type: MOVIES_FETCH_SUCCESS, payload: snapshot.val() })
    })
};
