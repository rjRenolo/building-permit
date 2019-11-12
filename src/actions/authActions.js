// SET_TOKEN
// REMOVE_TOKEN

import axios from 'axios';
import { getErrors } from './errorActions';
export const signIn = ({ username, password }) => dispatch => {
  dispatch({ type: 'LOADING' });
  // request config
  const reqConfig = { headers: { 'Content-type': 'application/json' } };
  // body
  const reqBody = JSON.stringify({ username, password });
  // axios request
  axios
    .post(
      'https://lgu-platform-backend.herokuapp.com/rest-auth/login/',
      reqBody,
      reqConfig
    )
    .then(res => {
      localStorage.setItem('TOKEN', res.data.key);
      dispatch({ type: 'SIGN_IN' });
      dispatch({ type: 'CLEAR_ERRORS' });
    })
    .catch(err => {
      //   console.log(err.response);
      dispatch(getErrors(err.response.data, err.response.status));
      dispatch({ type: 'LOADED' });
      // dispatch(getErrors())
    });
};

export const removeToken = () => {
  return {
    type: 'REMOVE_TOKEN'
  };
};
