const initialState = {
  assessmentId: '',
  dateCreated: '',
  dateUpdated: '',
  filingFee: '',
  occupancyGroup: {},
  electricalAssessment: {},
  mechanicalAssessment: {},
  plumbingAssessment: {},
  electronicsAssessment: {},
  buildingPropertyAssessment: {},
  buildingStructAccessoriesAssessment: {},
  boothsAssessment: {},
  cemeteryAssessment: {},
  lineAndGradeAssessment: {},
  groundPrepAndExcavationAssessment: {},
  fencingAssessment: {},
  pavementAndSidewalkAssessment: {},
  scaffoldingAssessment: {},
  signAssessment: {},
  repairAssessment: {},
  raisingOfBuildingAssessment: {},
  demolitionMovingAssessment: {},
  certificateOfOccupancyAssessment: {},
  amusementHousesAssessment: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_ASSESSMENT_PROPERTIES':
      return {
        ...state,
        assessmentId: action.payload.id,
        dateCreated: action.payload.created_on,
        dateUpdated: action.payload.updated_on,
        filingFee: action.payload.filing_fee,
        occupancyGroup: action.payload.occupancy_group,
        electricalAssessment: action.payload.electrical_assessment,
        mechanicalAssessment: action.payload.mechanical_assessment,
        plumbingAssessment: action.payload.plumbing_assessment,
        electronicsAssessment: action.payload.electronics_assessment,
        buildingPropertyAssessment: action.payload.building_property_assessment,
        buildingStructAccessoriesAssessment:
          action.payload.building_structure_accessories_assessment,
        boothsAssessment: action.payload.booths_assessment,
        cemeteryAssessment: action.payload.cemetery_assessment,
        lineAndGradeAssessment: action.payload.line_and_grade_assessment,
        groundPrepAndExcavationAssessment:
          action.payload.ground_preparation_and_excavation_assessment,
        fencingAssessment: action.payload.fencing_assessment,
        pavementAndSidewalkAssessment:
          action.payload.pavement_and_sidewalk_assessment,
        scaffoldingAssessment: action.payload.scaffolding_assessment,
        signAssessment: action.payload.sign_assessment,
        repairAssessment: action.payload.repair_assessment,
        raisingOfBuildingAssessment:
          action.payload.raising_of_building_assessment,
        demolitionMovingAssessment: action.payload.demolition_moving_assessment,
        certificateOfOccupancyAssessment:
          action.payload.certificate_of_occupancy_assessment,
        amusementHousesAssessment: action.payload.amusement_houses_assessment
      };

    case 'BLDG_PROP_ASSESSMENT':
      return {
        ...state,
        buildingPropertyAssessment: action.payload
      };
    default:
      return state;
  }
}
