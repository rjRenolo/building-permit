const initialState = {
  assessmentLoading: false,
  assessmentList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ASSESSMENT_LOADING':
      return {
        ...state,
        assessmentLoading: true
      };

    case 'ASSESSMENT_LOADED':
      return {
        ...state,
        assessmentLoading: false
      };

    case 'GET_ASSESSMENTLIST':
      return {
        ...state,
        assessmentList: action.payload
      };

    default:
      return state;
  }
}
