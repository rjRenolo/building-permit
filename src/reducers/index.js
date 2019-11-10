import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  authRed: authReducer,
  errorRed: errorReducer
});
