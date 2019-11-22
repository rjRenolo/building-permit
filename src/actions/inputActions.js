import axios from 'axios';

export const changeTabIndex = (event, index) => {
  return { type: 'TABINDEX', payload: index };
};

export const snackHandler = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  return { type: 'SNACKBAR' };
};

export const submitProps = (assessment, id, body) => dispatch => {
  dispatch({ type: 'INPUT_SUBMIT_LOADING' });

  const reqHeader = {
    headers: {
      Authorization: 'TOKEN ' + localStorage.getItem('TOKEN'),
      'Content-type': 'application/json'
    }
  };
  const reqBody = JSON.stringify(body);
  axios
    .patch(
      'https://lgu-platform-backend.herokuapp.com/api/engineering/' +
        assessment +
        '/' +
        id +
        '/',
      reqBody,
      reqHeader
    )
    .then(res => {
      // console.log(res.data);
      if (assessment === 'building-property-assessment') {
        dispatch({ type: 'BLDG_PROP_ASSESSMENT', payload: res.data });
      } else if (assessment === 'electrical-assessment') {
        dispatch({ type: 'ELECTRICAL_ASSESSMENT', payload: res.data });
      }
      dispatch({ type: 'INPUT_SUBMIT_LOADING' });
      dispatch({ type: 'SNACKBAR' });
    })
    .catch(err => {
      console.log(err.response.data);
    });
};

// console.log('test');

// return { type: 'GET_INPUTS', payload: obj };
