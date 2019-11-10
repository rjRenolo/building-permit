// getToken
// eraseToken

const initialState = {
  tokenKey: localStorage.getItem('TOKEN'),
  isAuthenticated: false,
  signInLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        signInLoading: true
      };
    case 'LOADED':
      return {
        ...state,
        signInLoading: false
      };
    case 'SIGN_IN':
      return {
        ...state,
        isAuthenticated: true,
        tokenKey: localStorage.getItem('TOKEN'),
        signInLoading: false
      };
    case 'REMOVE_TOKEN':
      return {
        ...state,
        tokenKey: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
