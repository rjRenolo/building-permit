const initialState = {
  tabIndex: 'Building Property',
  showSnack: false,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'TABINDEX':
      return {
        ...state,
        tabIndex: action.payload
      };

    case 'INPUT_SUBMIT_LOADING':
      return {
        ...state,
        loading: !state.loading
      };

    case 'SNACKBAR':
      return {
        ...state,
        showSnack: !state.showSnack
      };

    default:
      return state;
  }
}
