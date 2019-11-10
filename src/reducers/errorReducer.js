const initialState = {
  status: null,
  errorMsg: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_ERRORS':
      return {
        errorMsg: action.payload.errorMsg,
        status: action.payload.status
      };
    case 'CLEAR_ERRORS':
      return {
        errorMsg: {},
        status: null
      };
    default:
      return state;
  }
}
