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
      dispatch({ type: 'OPEN_ASSESSMENTDIALOG' });
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

export const submitNewlyCreatedAssessment = (
  tokenKey,
  occupancyId,
  floorArea,
  additionalFloorArea
) => dispatch => {
  // dispatch a loading dialog

  // request header
  const reqConfig = {
    headers: {
      Authorization: 'TOKEN ' + tokenKey,
      'Content-Type': 'application/json'
    }
  };
  const reqBody = JSON.stringify({ occupancy_group: occupancyId });
  axios
    .post(
      'https://lgu-platform-backend.herokuapp.com/api/engineering/building-permit-assessment/',
      reqBody,
      reqConfig
    )
    .then(res => {
      dispatch({
        type: 'GET_RESPONSESTATUS',
        payload: {
          status: res.data.status,
          statusText: res.data.message
        }
      });
      dispatch(getAssessmentList(localStorage.getItem('TOKEN')));
      dispatch({ type: 'CLOSE_ASSESSMENTDIALOG' });
    })
    .catch(err => {
      dispatch({
        type: 'GET_RESPONSESTATUS',
        payload: {
          status: err.response.status,
          statusText: err.response.data.detail
        }
      });
    });
};
