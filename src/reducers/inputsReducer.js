const initialState = {
  tabIndex: 'Electrical'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'TABINDEX':
      return {
        ...state,
        tabIndex: action.payload
      };

    default:
      return state;
  }
}
