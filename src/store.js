import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';

const initialState = {};
// const middleware = [thunk];
/*
compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
*/
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(reduxThunk)
);
export default store;
