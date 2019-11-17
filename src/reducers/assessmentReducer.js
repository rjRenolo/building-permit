const initialState = {
  assessmentLoading: false,
  occupancyGroupList: [],
  assessmentList: [],
  newAssessmentDialog: false,
  responseStatus: '',
  responseMessage: ''
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

    case 'GET_OCCUPANCYGROUPLIST':
      return {
        ...state,
        occupancyGroupList: action.payload
      };

    case 'OPEN_ASSESSMENTDIALOG':
      return {
        ...state,
        newAssessmentDialog: true
      };

    case 'CLOSE_ASSESSMENTDIALOG':
      return {
        ...state,
        newAssessmentDialog: false
      };

    case 'GET_RESPONSESTATUS':
      return {
        ...state,
        responseStatus: action.payload.status,
        responseMessage: action.payload.statusText
      };

    default:
      return state;
  }
}
