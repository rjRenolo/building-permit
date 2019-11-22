import axios from 'axios';

export const changeTabIndex = (event, index) => {
  return { type: 'TABINDEX', payload: index };
};

export const getInputs = obj => dispatch => {
  dispatch({ type: 'GET_INPUTS', payload: obj });
};

export const submitProps = (id, body) => dispatch => {
  const reqHeader = {
    headers: { Authorization: 'TOKEN ' + localStorage.getItem('TOKEN'), 'Content-type': 'application/json' }
  };
  const reqBody = JSON.stringify(body);

  axios
    .patch(
      'https://lgu-platform-backend.herokuapp.com/api/engineering/building-permit-assessment/' +
        id +
        '/',
      reqBody,
      reqHeader
    )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      //   console.log(err.response.data);
    });
};

// console.log('test');

// return { type: 'GET_INPUTS', payload: obj };
