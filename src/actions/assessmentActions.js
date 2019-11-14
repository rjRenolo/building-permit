import axios from 'axios';

//fetch assessment
export const getAssessmentList = tokenKey => dispatch => {
  dispatch({ type: 'ASSESSMENT_LOADING' });

  const reqConfig = { headers: { Authorization: 'TOKEN ' + tokenKey } };

  axios
    .get(
      'https://lgu-platform-backend.herokuapp.com/api/engineering/building-permit-assessment/',
      reqConfig
    )
    .then(res => {
      // console.log(res);
      dispatch({ type: 'GET_ASSESSMENTLIST', payload: res.data });
      dispatch({ type: 'ASSESSMENT_LOADED' });
    })
    .catch(err => console.log(err));
};

export const getOccupancyGroupList = tokenKey => dispatch => {
  dispatch({ type: 'ASSESSMENT_LOADING' });
  dispatch({ type: 'OPEN_ASSESSMENTDIALOG' });

  const reqConfig = { headers: { Authorization: 'TOKEN ' + tokenKey } };

  axios
    .get(
      'https://lgu-platform-backend.herokuapp.com/api/engineering/occupancy-group/',
      reqConfig
    )
    .then(res => {
      console.log(res.data);
      dispatch({ type: 'GET_OCCUPANCYGROUPLIST', payload: res.data });
      dispatch({ type: 'ASSESSMENT_LOADED' });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: 'ASSESSMENT_LOADED' });
    });
};

export const closeNewAssessmentDialog = () => {
  return {
    type: 'CLOSE_ASSESSMENTDIALOG'
  };
};
