import axios from 'axios';

export const getAssessmentDets = id => dispatch => {
  // dispatch a loading

  // request Header Config
  const reqHeader = {
    headers: { Authorization: 'TOKEN ' + localStorage.getItem('TOKEN') }
  };

  // fetch assessment details
  axios
    .get(
      'https://lgu-platform-backend.herokuapp.com/api/engineering/building-permit-assessment/' +
        id,
      reqHeader
    )
    .then(res => {
      dispatch({ type: 'GET_ASSESSMENT_PROPERTIES', payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
