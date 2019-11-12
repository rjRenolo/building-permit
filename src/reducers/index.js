import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import assessmentReducer from './assessmentReducer';

export default combineReducers({
  authRed: authReducer,
  assessmentRed: assessmentReducer,
  errorRed: errorReducer
});
