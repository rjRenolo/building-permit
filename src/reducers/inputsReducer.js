const initialState = {
  tabIndex: 'Building Property',
  inputs: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'TABINDEX':
      return {
        ...state,
        tabIndex: action.payload
      };

    case 'GET_INPUTS':
      return {
        ...state,
        inputs: action.payload
      };

    default:
      return state;
  }
}
