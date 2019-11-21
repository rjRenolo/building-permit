import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import assessmentReducer from './assessmentReducer';
import assessmentDetsReducer from './assessmentDetsReducer';
import inputsReducer from './inputsReducer';

export default combineReducers({
  authRed: authReducer,
  assessmentRed: assessmentReducer,
  errorRed: errorReducer,
  assessmentDetsRed: assessmentDetsReducer,
  inputsRed: inputsReducer
});
