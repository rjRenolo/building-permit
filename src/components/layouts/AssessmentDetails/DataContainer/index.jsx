import React, { Component } from 'react'
import {Typography, CircularProgress} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import {connect }from 'react-redux';
import {getAssessmentDets} from '../../../../actions/assessmentDetsActions';
import {changeTabIndex} from '../../../../actions/inputActions';


class DataContainer extends Component {

    state={
        occupancyGroup:'Division A-1',
    }


    filter = (occupancyGroupId) => {
        const InfoData = {
            id : this.props.assessmentDetsRed.assessmentId,
            occupancyId : this.props.assessmentDetsRed.occupancyGroup.id,
            occupancyName : this.props.assessmentDetsRed.occupancyGroup.name,
            filingFee:this.props.assessmentDetsRed.filingFee,
            dateCreated:this.props.assessmentDetsRed.dateCreated,
            dateUpdated:this.props.assessmentDetsRed.dateUpdated
        }

        if(occupancyGroupId >=1 && occupancyGroupId <=2){
        return [
                <InfoAssessment key="info" data={InfoData}/>,
                <BuildingPropertyAssessment key="bldgprop" change={this.props.changeTabIndex} change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.buildingPropertyAssessment}/>, 
                <ElectricalAssessment key="electrical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electricalAssessment}/>, 
                <MechanicalAssessment key="mechanical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.mechanicalAssessment}/>,
                <PlumbingAssessment key="plumbing" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.plumbingAssessment}/>,
                <ElectronicsAssessment key="electronics" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electronicsAssessment}/>,
                <BuildingStrucAccessoriesAssessment key="bldgaccesories"data={this.props.assessmentDetsRed.buildingStructAccessoriesAssessment}/>,
                // <BoothsAssessment key="booths" data={this.props.assessmentDetsRed.boothsAssessment}/>,
                // <CemeteryAssessment key="cemetery" data={this.props.assessmentDetsRed.cemeteryAssessment}/>,
                <LineAndGradeAssessment key="linegrade" data={this.props.assessmentDetsRed.lineAndGradeAssessment}/>,
                <GroundPrepAndExcavation key="ground" data={this.props.assessmentDetsRed.groundPrepAndExcavationAssessment}/>,
                <FencingAssessment key="fencing" data={this.props.assessmentDetsRed.fencingAssessment}/>,
                <RepairAssessment key="repair" data={this.props.assessmentDetsRed.repairAssessment}/>,
                <DemolitionMovingAssessment key="demolishmove" data={this.props.assessmentDetsRed.demolitionMovingAssessment}/>,
                <CertificateAssessment key="certificate" data={this.props.assessmentDetsRed.certificateOfOccupancyAssessment}/>,
                // <PavementAndSidewalkAssessment key="pavementsidewalk" data={this.props.assessmentDetsRed.pavementAndSidewalkAssessment}/>,
                // <ScaffoldingAssessment key="scaffolding" data={this.props.assessmentDetsRed.scaffoldingAssessment}/>,
                // <SignAssessment key="sign" data={this.props.assessmentDetsRed.signAssessment}/>,
                // <RaisingOfBuilding key="raising" data={this.props.assessmentDetsRed.raisingOfBuildingAssessment}/>, 
                // <AmusementHousesAssessment key="amusement" data={this.props.assessmentDetsRed.amusementHousesAssessment}/>
                
            ];
        }else if(occupancyGroupId == 3){
            return[<InfoAssessment key="info" data={InfoData}/>,
                <BuildingPropertyAssessment key="bldgprop" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.buildingPropertyAssessment}/>, 
                <ElectricalAssessment key="electrical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electricalAssessment}/>, 
                <MechanicalAssessment key="mechanical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.mechanicalAssessment}/>,
                <PlumbingAssessment key="plumbing" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.plumbingAssessment}/>,
                <ElectronicsAssessment key="electronics" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electronicsAssessment}/>,
                <BuildingStrucAccessoriesAssessment key="bldgaccesories"data={this.props.assessmentDetsRed.buildingStructAccessoriesAssessment}/>,
                <BoothsAssessment key="booths" data={this.props.assessmentDetsRed.boothsAssessment}/>,
                <LineAndGradeAssessment key="linegrade" data={this.props.assessmentDetsRed.lineAndGradeAssessment}/>,
                <GroundPrepAndExcavation key="ground" data={this.props.assessmentDetsRed.groundPrepAndExcavationAssessment}/>,
                <FencingAssessment key="fencing" data={this.props.assessmentDetsRed.fencingAssessment}/>,
                <PavementAndSidewalkAssessment key="pavementsidewalk" data={this.props.assessmentDetsRed.pavementAndSidewalkAssessment}/>,
                <ScaffoldingAssessment key="scaffolding" data={this.props.assessmentDetsRed.scaffoldingAssessment}/>,
                <SignAssessment key="sign" data={this.props.assessmentDetsRed.signAssessment}/>,
                <RepairAssessment key="repair" data={this.props.assessmentDetsRed.repairAssessment}/>,
                <DemolitionMovingAssessment key="demolishmove" data={this.props.assessmentDetsRed.demolitionMovingAssessment}/>,
                <CertificateAssessment key="certificate" data={this.props.assessmentDetsRed.certificateOfOccupancyAssessment}/>,  
        ]
        }else if(occupancyGroupId >= 4 && occupancyGroupId <= 5){
            return [
                <InfoAssessment key="info" data={InfoData}/>,
                <BuildingPropertyAssessment key="bldgprop" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.buildingPropertyAssessment}/>, 
                <ElectricalAssessment key="electrical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electricalAssessment}/>, 
                <MechanicalAssessment key="mechanical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.mechanicalAssessment}/>,
                <PlumbingAssessment key="plumbing" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.plumbingAssessment}/>,
                <ElectronicsAssessment key="electronics" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electronicsAssessment}/>,
                <BuildingStrucAccessoriesAssessment key="bldgaccesories"data={this.props.assessmentDetsRed.buildingStructAccessoriesAssessment}/>,
                <BoothsAssessment key="booths" data={this.props.assessmentDetsRed.boothsAssessment}/>,
                <LineAndGradeAssessment key="linegrade" data={this.props.assessmentDetsRed.lineAndGradeAssessment}/>,
                <GroundPrepAndExcavation key="ground" data={this.props.assessmentDetsRed.groundPrepAndExcavationAssessment}/>,
                <FencingAssessment key="fencing" data={this.props.assessmentDetsRed.fencingAssessment}/>,
                <RepairAssessment key="repair" data={this.props.assessmentDetsRed.repairAssessment}/>,
                <DemolitionMovingAssessment key="demolishmove" data={this.props.assessmentDetsRed.demolitionMovingAssessment}/>,
                <CertificateAssessment key="certificate" data={this.props.assessmentDetsRed.certificateOfOccupancyAssessment}/>,  
                <PavementAndSidewalkAssessment key="pavementsidewalk" data={this.props.assessmentDetsRed.pavementAndSidewalkAssessment}/>,
                <ScaffoldingAssessment key="scaffolding" data={this.props.assessmentDetsRed.scaffoldingAssessment}/>,
                <SignAssessment key="sign" data={this.props.assessmentDetsRed.signAssessment}/>,
                
            ]
        }else if(occupancyGroupId >= 6 && occupancyGroupId <= 8){
            return [
                <InfoAssessment key="info" data={InfoData}/>,
                <BuildingPropertyAssessment key="bldgprop" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.buildingPropertyAssessment}/>, 
                <ElectricalAssessment key="electrical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electricalAssessment}/>, 
                <MechanicalAssessment key="mechanical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.mechanicalAssessment}/>,
                <PlumbingAssessment key="plumbing" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.plumbingAssessment}/>,
                <ElectronicsAssessment key="electronics" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electronicsAssessment}/>,
                <BuildingStrucAccessoriesAssessment key="bldgaccesories"data={this.props.assessmentDetsRed.buildingStructAccessoriesAssessment}/>,
                <BoothsAssessment key="booths" data={this.props.assessmentDetsRed.boothsAssessment}/>,
                <LineAndGradeAssessment key="linegrade" data={this.props.assessmentDetsRed.lineAndGradeAssessment}/>,
                <GroundPrepAndExcavation key="ground" data={this.props.assessmentDetsRed.groundPrepAndExcavationAssessment}/>,
                <FencingAssessment key="fencing" data={this.props.assessmentDetsRed.fencingAssessment}/>,
                <RepairAssessment key="repair" data={this.props.assessmentDetsRed.repairAssessment}/>,
                <DemolitionMovingAssessment key="demolishmove" data={this.props.assessmentDetsRed.demolitionMovingAssessment}/>,
                <CertificateAssessment key="certificate" data={this.props.assessmentDetsRed.certificateOfOccupancyAssessment}/>,  
                <PavementAndSidewalkAssessment key="pavementsidewalk" data={this.props.assessmentDetsRed.pavementAndSidewalkAssessment}/>,
                <ScaffoldingAssessment key="scaffolding" data={this.props.assessmentDetsRed.scaffoldingAssessment}/>,
                <SignAssessment key="sign" data={this.props.assessmentDetsRed.signAssessment}/>,
                
            ]
        }else if(occupancyGroupId >= 9 && occupancyGroupId <= 11){
            return[<InfoAssessment key="info" data={InfoData}/>,
                <BuildingPropertyAssessment key="bldgprop" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.buildingPropertyAssessment}/>, 
                <ElectricalAssessment key="electrical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electricalAssessment}/>, 
                <MechanicalAssessment key="mechanical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.mechanicalAssessment}/>,
                <PlumbingAssessment key="plumbing" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.plumbingAssessment}/>,
                <ElectronicsAssessment key="electronics" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electronicsAssessment}/>,
                <BuildingStrucAccessoriesAssessment key="bldgaccesories"data={this.props.assessmentDetsRed.buildingStructAccessoriesAssessment}/>,
                <BoothsAssessment key="booths" data={this.props.assessmentDetsRed.boothsAssessment}/>,
                <LineAndGradeAssessment key="linegrade" data={this.props.assessmentDetsRed.lineAndGradeAssessment}/>,
                <GroundPrepAndExcavation key="ground" data={this.props.assessmentDetsRed.groundPrepAndExcavationAssessment}/>,
                <FencingAssessment key="fencing" data={this.props.assessmentDetsRed.fencingAssessment}/>,
                <RepairAssessment key="repair" data={this.props.assessmentDetsRed.repairAssessment}/>,
                <DemolitionMovingAssessment key="demolishmove" data={this.props.assessmentDetsRed.demolitionMovingAssessment}/>,
                <CertificateAssessment key="certificate" data={this.props.assessmentDetsRed.certificateOfOccupancyAssessment}/>,  
                <PavementAndSidewalkAssessment key="pavementsidewalk" data={this.props.assessmentDetsRed.pavementAndSidewalkAssessment}/>,
                <ScaffoldingAssessment key="scaffolding" data={this.props.assessmentDetsRed.scaffoldingAssessment}/>,
                <SignAssessment key="sign" data={this.props.assessmentDetsRed.signAssessment}/>,]
                
        }else if(occupancyGroupId == 12){
            return[
                <InfoAssessment key="info" data={InfoData}/>,
                <BuildingPropertyAssessment key="bldgprop" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.buildingPropertyAssessment}/>, 
                <ElectricalAssessment key="electrical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electricalAssessment}/>, 
                <MechanicalAssessment key="mechanical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.mechanicalAssessment}/>,
                <PlumbingAssessment key="plumbing" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.plumbingAssessment}/>,
                <ElectronicsAssessment key="electronics" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electronicsAssessment}/>,
                <BuildingStrucAccessoriesAssessment key="bldgaccesories"data={this.props.assessmentDetsRed.buildingStructAccessoriesAssessment}/>,
                <BoothsAssessment key="booths" data={this.props.assessmentDetsRed.boothsAssessment}/>,
                <LineAndGradeAssessment key="linegrade" data={this.props.assessmentDetsRed.lineAndGradeAssessment}/>,
                <GroundPrepAndExcavation key="ground" data={this.props.assessmentDetsRed.groundPrepAndExcavationAssessment}/>,
                <FencingAssessment key="fencing" data={this.props.assessmentDetsRed.fencingAssessment}/>,
                <RepairAssessment key="repair" data={this.props.assessmentDetsRed.repairAssessment}/>,
                <DemolitionMovingAssessment key="demolishmove" data={this.props.assessmentDetsRed.demolitionMovingAssessment}/>,
                <CertificateAssessment key="certificate" data={this.props.assessmentDetsRed.certificateOfOccupancyAssessment}/>,  
                <SignAssessment key="sign" data={this.props.assessmentDetsRed.signAssessment}/>
            ]
        }else if(occupancyGroupId >= 13 && occupancyGroupId <= 17){
            return[
                <InfoAssessment key="info" data={InfoData}/>,
                <BuildingPropertyAssessment key="bldgprop" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.buildingPropertyAssessment}/>, 
                <ElectricalAssessment key="electrical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electricalAssessment}/>, 
                <MechanicalAssessment key="mechanical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.mechanicalAssessment}/>,
                <PlumbingAssessment key="plumbing" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.plumbingAssessment}/>,
                <ElectronicsAssessment key="electronics" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electronicsAssessment}/>,
                <BuildingStrucAccessoriesAssessment key="bldgaccesories"data={this.props.assessmentDetsRed.buildingStructAccessoriesAssessment}/>,
                <LineAndGradeAssessment key="linegrade" data={this.props.assessmentDetsRed.lineAndGradeAssessment}/>,
                <GroundPrepAndExcavation key="ground" data={this.props.assessmentDetsRed.groundPrepAndExcavationAssessment}/>,
                <FencingAssessment key="fencing" data={this.props.assessmentDetsRed.fencingAssessment}/>,
                <RepairAssessment key="repair" data={this.props.assessmentDetsRed.repairAssessment}/>,
                <DemolitionMovingAssessment key="demolishmove" data={this.props.assessmentDetsRed.demolitionMovingAssessment}/>,
                <CertificateAssessment key="certificate" data={this.props.assessmentDetsRed.certificateOfOccupancyAssessment}/>,  
                <SignAssessment key="sign" data={this.props.assessmentDetsRed.signAssessment}/>
            
            ]
        }else if(occupancyGroupId >= 18 && occupancyGroupId <= 21){
            return[
                <InfoAssessment key="info" data={InfoData}/>,
                <BuildingPropertyAssessment key="bldgprop" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.buildingPropertyAssessment}/>, 
                <ElectricalAssessment key="electrical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electricalAssessment}/>, 
                <MechanicalAssessment key="mechanical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.mechanicalAssessment}/>,
                <PlumbingAssessment key="plumbing" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.plumbingAssessment}/>,
                <ElectronicsAssessment key="electronics" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electronicsAssessment}/>,
                <BuildingStrucAccessoriesAssessment key="bldgaccesories"data={this.props.assessmentDetsRed.buildingStructAccessoriesAssessment}/>,
                <LineAndGradeAssessment key="linegrade" data={this.props.assessmentDetsRed.lineAndGradeAssessment}/>,
                <BoothsAssessment key="booths" data={this.props.assessmentDetsRed.boothsAssessment}/>,
                <GroundPrepAndExcavation key="ground" data={this.props.assessmentDetsRed.groundPrepAndExcavationAssessment}/>,
                <FencingAssessment key="fencing" data={this.props.assessmentDetsRed.fencingAssessment}/>,
                <RepairAssessment key="repair" data={this.props.assessmentDetsRed.repairAssessment}/>,
                <DemolitionMovingAssessment key="demolishmove" data={this.props.assessmentDetsRed.demolitionMovingAssessment}/>,
                <CertificateAssessment key="certificate" data={this.props.assessmentDetsRed.certificateOfOccupancyAssessment}/>,  
                <SignAssessment key="sign" data={this.props.assessmentDetsRed.signAssessment}/>
            
            ]
        }else if(occupancyGroupId == 22){
            return[
                <InfoAssessment key="info" data={InfoData}/>,
                <BuildingPropertyAssessment key="bldgprop" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.buildingPropertyAssessment}/>, 
                <ElectricalAssessment key="electrical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electricalAssessment}/>, 
                <MechanicalAssessment key="mechanical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.mechanicalAssessment}/>,
                <PlumbingAssessment key="plumbing" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.plumbingAssessment}/>,
                <ElectronicsAssessment key="electronics" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electronicsAssessment}/>,
                <BuildingStrucAccessoriesAssessment key="bldgaccesories"data={this.props.assessmentDetsRed.buildingStructAccessoriesAssessment}/>,
                <LineAndGradeAssessment key="linegrade" data={this.props.assessmentDetsRed.lineAndGradeAssessment}/>,
                <BoothsAssessment key="booths" data={this.props.assessmentDetsRed.boothsAssessment}/>,
                <GroundPrepAndExcavation key="ground" data={this.props.assessmentDetsRed.groundPrepAndExcavationAssessment}/>,
                <FencingAssessment key="fencing" data={this.props.assessmentDetsRed.fencingAssessment}/>,
                <RepairAssessment key="repair" data={this.props.assessmentDetsRed.repairAssessment}/>,
                <DemolitionMovingAssessment key="demolishmove" data={this.props.assessmentDetsRed.demolitionMovingAssessment}/>,
                <CertificateAssessment key="certificate" data={this.props.assessmentDetsRed.certificateOfOccupancyAssessment}/>,  
                <SignAssessment key="sign" data={this.props.assessmentDetsRed.signAssessment}/>
            
            ]
        }else if(occupancyGroupId == 23){
            return[
                <InfoAssessment key="info" data={InfoData}/>,
                <BuildingPropertyAssessment key="bldgprop" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.buildingPropertyAssessment}/>, 
                <BuildingStrucAccessoriesAssessment key="bldgaccesories"data={this.props.assessmentDetsRed.buildingStructAccessoriesAssessment}/>,
                <LineAndGradeAssessment key="linegrade" data={this.props.assessmentDetsRed.lineAndGradeAssessment}/>,
                <GroundPrepAndExcavation key="ground" data={this.props.assessmentDetsRed.groundPrepAndExcavationAssessment}/>,
                <FencingAssessment key="fencing" data={this.props.assessmentDetsRed.fencingAssessment}/>,
                <RepairAssessment key="repair" data={this.props.assessmentDetsRed.repairAssessment}/>,
                <DemolitionMovingAssessment key="demolishmove" data={this.props.assessmentDetsRed.demolitionMovingAssessment}/>,
                <CertificateAssessment key="certificate" data={this.props.assessmentDetsRed.certificateOfOccupancyAssessment}/>,  
                <SignAssessment key="sign" data={this.props.assessmentDetsRed.signAssessment}/>
            
            ]
        }else if(occupancyGroupId == 24){
           return [ <InfoAssessment key="info" data={InfoData}/>,
            <BuildingPropertyAssessment key="bldgprop" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.buildingPropertyAssessment}/>, 
            <ElectricalAssessment key="electrical" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.electricalAssessment}/>, 
            <PlumbingAssessment key="plumbing" change={this.props.changeTabIndex} data={this.props.assessmentDetsRed.plumbingAssessment}/>,
            <BuildingStrucAccessoriesAssessment key="bldgaccesories"data={this.props.assessmentDetsRed.buildingStructAccessoriesAssessment}/>,
            <LineAndGradeAssessment key="linegrade" data={this.props.assessmentDetsRed.lineAndGradeAssessment}/>,
            <GroundPrepAndExcavation key="ground" data={this.props.assessmentDetsRed.groundPrepAndExcavationAssessment}/>,
            <FencingAssessment key="fencing" data={this.props.assessmentDetsRed.fencingAssessment}/>,
            <RepairAssessment key="repair" data={this.props.assessmentDetsRed.repairAssessment}/>,
            <DemolitionMovingAssessment key="demolishmove" data={this.props.assessmentDetsRed.demolitionMovingAssessment}/>,
            <CertificateAssessment key="certificate" data={this.props.assessmentDetsRed.certificateOfOccupancyAssessment}/>,  
            <SignAssessment key="sign" data={this.props.assessmentDetsRed.signAssessment}/>
        ]
        }else if(occupancyGroupId == 25){
            return [
                <CemeteryAssessment key="cemetery" data={this.props.assessmentDetsRed.cemeteryAssessment}/>,
                <GroundPrepAndExcavation key="ground" data={this.props.assessmentDetsRed.groundPrepAndExcavationAssessment}/>,
                <FencingAssessment key="fencing" data={this.props.assessmentDetsRed.fencingAssessment}/>,
                <PavementAndSidewalkAssessment key="pavementsidewalk" data={this.props.assessmentDetsRed.pavementAndSidewalkAssessment}/>,
                <RepairAssessment key="repair" data={this.props.assessmentDetsRed.repairAssessment}/>,
                <DemolitionMovingAssessment key="demolishmove" data={this.props.assessmentDetsRed.demolitionMovingAssessment}/>,
                <CertificateAssessment key="certificate" data={this.props.assessmentDetsRed.certificateOfOccupancyAssessment}/>,  
                    
            ]
        }else{
            return <CircularProgress />
        }

    }
    
    render() {
        return (
            <div>
                {this.filter(this.props.data.occupancyGroup.id)}
                {/* {this.filter(3)} */}
            </div>
        )
    }
}

const mapStateToProps=state=>({
    assessmentDetsRed:state.assessmentDetsRed
})

export default connect(mapStateToProps, {getAssessmentDets, changeTabIndex})(DataContainer);


export function InfoAssessment(props){
    return(
        <div>
              <Typography
                style={{ fontSize: '18px', textDecorationLine: 'underline' }}
                variant="subtitle2"
              >
                Assessment Information
              </Typography>
              <Typography variant="subtitle1">
                Assessment ID :{' '}
                {
                  <span
                    style={{
                      fontWeight: 'bold',
                      textDecorationLine: 'underline'
                    }}
                  >
                    {props.data.id}
                  </span>
                }
              </Typography>
              <Typography variant="subtitle1">
                Filing Fee :{' '}
                {
                  <span
                    style={{
                      fontWeight: 'bold',
                      textDecorationLine: 'underline'
                    }}
                  >
                    {props.data.filingFee}
                  </span>
                }
              </Typography>
              <Typography variant="subtitle1">
                Occupancy Group :{' '}
                {
                  <span
                    style={{
                      fontWeight: 'bold',
                      textDecorationLine: 'underline'
                    }}
                  >
                    {props.data.occupancyName}
                  </span>
                }
                <EditIcon
                  style={{ cursor: 'pointer', margin: '4px' }}
                  onClick={() => alert('edit Occupancy Group')}
                />
              </Typography>
              <Typography variant="subtitle1">
                Date Created :{' '}
                {
                  <span
                    style={{
                      fontWeight: 'bold',
                      textDecorationLine: 'underline'
                    }}
                  >
                    {props.data.dateCreated}
                  </span>
                }
              </Typography>
              <Typography variant="subtitle1">
                Last Update :{' '}
                {
                  <span
                    style={{
                      fontWeight: 'bold',
                      textDecorationLine: 'underline'
                    }}
                  >
                    {props.data.dateUpdated}
                  </span>
                }
              </Typography>
              <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
            </div>
          );
}

export function ElectricalAssessment(props){
    const {total_connected_load, total_transformer_capacity, number_of_poles, number_of_attachments} = props.data
    return(
        <div>
              <Typography
                style={{ fontSize: '18px', textDecorationLine: 'underline' }}
                variant="subtitle2"
              >
                Electrical
                <EditIcon
                  style={{ cursor: 'pointer', margin: '4px' }}
                  onClick={() => props.change(null, 'Electrical')}
                />
              </Typography>
              <Typography variant="subtitle1">
                Total Connected Load :{' '}
                {
                  <span
                    style={{
                      fontWeight: 'bold',
                      textDecorationLine: 'underline'
                    }}
                  >
                    {total_connected_load} kWa
                  </span>
                }
              </Typography>
              <Typography variant="subtitle1">
                Total Transformer Capacity :{' '}
                {
                  <span
                    style={{
                      fontWeight: 'bold',
                      textDecorationLine: 'underline'
                    }}
                  >
                    {total_transformer_capacity} kWa
                  </span>
                }
              </Typography>
              <Typography variant="subtitle1">
                Number of Poles :{' '}
                {
                  <span
                    style={{
                      fontWeight: 'bold',
                      textDecorationLine: 'underline'
                    }}
                  >
                    {number_of_poles}
                  </span>
                }
              </Typography>
              <Typography variant="subtitle1">
                Number of Attachments :{' '}
                {
                  <span
                    style={{
                      fontWeight: 'bold',
                      textDecorationLine: 'underline'
                    }}
                  >
                    {number_of_attachments}
                  </span>
                }
              </Typography>
              <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
            </div>
    )
}

export function BuildingPropertyAssessment(props){
    const {is_new, height, floor_area, additional_floor_area} = props.data;
    
    return(
        <div>
              <Typography
                style={{ fontSize: '18px', textDecorationLine: 'underline' }}
                variant="subtitle2"
              >
                Building Property
                <EditIcon
                  style={{ cursor: 'pointer', margin: '4px' }}
                  onClick={() => props.change(null, 'Building Property')}
                />
              </Typography>
        
              <Typography variant="subtitle1">
                Category :{' '}
                {
                  <span
                    style={{
                      fontWeight: 'bold',
                      textDecorationLine: 'underline'
                    }}
                  >
                    {is_new ? "New" : "Old"}
                  </span>
                }
              </Typography>
              <Typography variant="subtitle1">
                Height :{' '}
                {
                  <span
                    style={{
                      fontWeight: 'bold',
                      textDecorationLine: 'underline'
                    }}
                  >
                    {height} m<sup>2</sup>
                  </span>
                }
              </Typography>
              <Typography variant="subtitle1">
                Floor Area :{' '}
                {
                  <span
                    style={{
                      fontWeight: 'bold',
                      textDecorationLine: 'underline'
                    }}
                  >
                    {floor_area} m<sup>2</sup>
                  </span>
                }
              </Typography>
              <Typography variant="subtitle1">
                Additional Floor Area :{' '}
                {
                  <span
                    style={{
                      fontWeight: 'bold',
                      textDecorationLine: 'underline'
                    }}
                  >
                    {additional_floor_area} m<sup>2</sup>
                  </span>
                }
              </Typography>
              
              <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
            </div>
    )
}


export function MechanicalAssessment(props){

    const {aircondition_unit,
        airconditioning_system,
        boiler,
        cable_car_kw,
        cable_car_travel,
        compressed_air,
        elevator_car,
        elevator_construction,
        elevator_dumbwaiters,
        elevator_freight,
        elevator_passenger,
        escalator,
        funicular_kw,
        funicular_travel,
        gas_meter,
        generating_units,
        material_handling_equipment,
        other_engines,
        other_machineries,
        power_piping,
        pressure_vessels,
        ref_with_ice,
        ref_without_ice,
        sprinkler_system,
        sump_and_pump,
        ventilation,
        water_heater,
        weighing_scale,} = props.data

    return(
    <div>
        <Typography
        style={{ fontSize: '18px', textDecorationLine: 'underline' }}
        variant="subtitle2"
        >
        Mechanical
        <EditIcon
            style={{ cursor: 'pointer', margin: '4px' }}
            onClick={() => props.change(null, 'Mechanical')}
        />
        </Typography>

        <Typography variant="subtitle1">
        Ref (Without Ice Making) :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {ref_with_ice} tons
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Ref (With Ice Making) :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {ref_without_ice} tons
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Airconditioning System :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {airconditioning_system}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Airconditioning Unit :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {aircondition_unit}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Ventilation :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {ventilation}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Escalator :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {escalator}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Funicular :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {funicular_kw} kW
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Funicular Travel :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {funicular_travel}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Cable Car :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {cable_car_kw} kW
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Cable Car Travel :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {cable_car_travel}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Elevator Dumbwaiters :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {elevator_dumbwaiters}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Elevator passenger :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {elevator_passenger}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Elevator Car :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {elevator_car}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Elevator Construction :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {elevator_construction}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Elevator Freight :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {elevator_freight}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Boiler :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {boiler}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Water Heater :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {water_heater}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Water Sump & Sewage Pump :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {sump_and_pump}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Sprinkler System :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {sprinkler_system}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Generating Units :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {generating_units}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Compressed Air :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {compressed_air}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Gas Meter :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {gas_meter}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Power Piping :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {power_piping}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Other Internal Combustion Engine :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {other_engines}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Pressure Vessels :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {pressure_vessels}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Other Machineries :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {other_machineries}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Material Handling Equipments :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {material_handling_equipment}
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Weighing Scale :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {weighing_scale}
            </span>
        }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}


export function PlumbingAssessment(props){
    const {bar_soda_fountain_sink,
        bath_tub,
        bidet,
        dental_cuspidor,
        drinking_fountain,
        faucet,
        fixed_type_sterilizer,
        floor_drain,
        garage_trap,
        gas_fired_water_heater,
        grease_trap,
        laboratory_sink,
        laundry_sink,
        lavatory,
        septic_tank,
        shower_head,
        sink,
        slop_sink,
        urinal,
        water_closet,
        water_meter_12,
        water_meter_25,} = props.data
    return(
        <div>
            <Typography
            style={{ fontSize: '18px', textDecorationLine: 'underline' }}
            variant="subtitle2"
            >
            Plumbing
            <EditIcon
                style={{ cursor: 'pointer', margin: '4px' }}
                onClick={() => props.change(null, 'Plumbing')}
            />
            </Typography>
            <Typography variant="subtitle1">
            Water Closet :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {water_closet}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Floor Drain :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {floor_drain}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Sink :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {sink}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Lavatory :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {lavatory}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Faucet :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {faucet}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Shower Head :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {shower_head}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Slop Sink :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {slop_sink}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Grease Trap :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {grease_trap}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Dental Cuspidor :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {dental_cuspidor}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Bar Soda Fountain Sink :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {bar_soda_fountain_sink}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Urinal :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {urinal}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Garage Trap :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {garage_trap}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Gas Fired Water Heater :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {gas_fired_water_heater}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Laundry Sink :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {laundry_sink}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Bath Tub :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {bath_tub}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Bidet :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {bidet}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Drinking Fountain :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {drinking_fountain}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Laboratory Sink :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {laboratory_sink}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Fixed Type Sterilizer :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {fixed_type_sterilizer}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Water Meter 12-25mm :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {water_meter_12}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Water Meter Above 25mm :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {water_meter_25}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Septic Tank :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {septic_tank} m<sup>3</sup>
                </span>
            }
            </Typography>
            <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}

export function ElectronicsAssessment(props){
    const {communication_installations,
        display_systems,
        electronic_outlets,
        machines,
        number_of_attachments,
        number_of_poles,
        others,
        radio_broadcasts,
        stations,
        switches,
        terminals,} = props.data
    return(
        <div>
            <Typography
            style={{ fontSize: '18px', textDecorationLine: 'underline' }}
            variant="subtitle2"
            >
            Electronics
            <EditIcon
                style={{ cursor: 'pointer', margin: '4px' }}
                onClick={() => props.change(null, 'Electronics')}
            />
            </Typography>
            <Typography variant="subtitle1">
            Switches :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {switches}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Stations :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {stations}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Machines :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {machines}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Electronic Outlets :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {electronic_outlets}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Terminals :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {terminals}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Radio Broadcasts :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {radio_broadcasts}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Communication Installations :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {communication_installations}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Display Systems :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {display_systems}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Number of Poles :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {number_of_poles}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Number of Attachments :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {number_of_attachments}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Others :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {others}
                </span>
            }
            </Typography>
            <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}

export function BuildingStrucAccessoriesAssessment(props){
    const {bank_and_record_vault,
        chimney,
        firewalls_separate_from_building,
        fixed_ovens,
        kiln_furnace,
        open_spaces,
        shower_locker_rooms,
        smokestacks,
        storage_silos,
        storage_silos_platform,
        swimming_pool_improvised,
        swimming_pool_regular,
        tank_above_ground,
        tank_under_ground,
        tower_height,
        tower_support,
        treatment_tank,} = props.data
    return(
        <div>
            <Typography
            style={{ fontSize: '18px', textDecorationLine: 'underline' }}
            variant="subtitle2"
            >
            Building Structure Accessories
            <EditIcon
                style={{ cursor: 'pointer', margin: '4px' }}
                onClick={() => alert('change tab to Accessories')}
            />
            </Typography>
            <Typography variant="subtitle1">
            Balcony or OpenSpace :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {open_spaces} m<sup>2</sup>
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Bank & Record Vault :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {bank_and_record_vault} m<sup>3</sup>
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Regular Swimming Pool :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {swimming_pool_regular} m<sup>3</sup>
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Improvised Swimming Pool :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {swimming_pool_improvised} m<sup>3</sup>
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Shower/Locker Room :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {shower_locker_rooms}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Construction of Firewalls :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {firewalls_separate_from_building} m<sup>2</sup>
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Construction of Tower :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {tower_height} m
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Tower Support :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {tower_support}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Smokestacks :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {smokestacks}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Chimney :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {chimney} m
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Fixed Ovens :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {fixed_ovens} m<sup>2</sup>
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Kiln Furnace :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {kiln_furnace} m<sup>3</sup>
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Reinforced Concrete / Steel Tank :
            </Typography>
            <Typography variant="subtitle1">
            Above Ground :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {tank_above_ground} m<sup>3</sup>
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Below Ground :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {tank_under_ground} m<sup>3</sup>
                </span>
            }
            </Typography>
            <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}

export function BoothsAssessment(props){
    const { inspection_knockdown_temporary,
        permanent,
        temporary} = props.data
    return(
<div>
        <Typography
        style={{ fontSize: '18px', textDecorationLine: 'underline' }}
        variant="subtitle2"
        >
        Booths Assessment
        <EditIcon
            style={{ cursor: 'pointer', margin: '4px' }}
            onClick={() => alert('change tab to Booths')}
        />
        </Typography>
        <Typography variant="subtitle1">
        Permanent :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {permanent} m<sup>2</sup>
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Temporary :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {temporary} m<sup>2</sup>
            </span>
        }
        </Typography>
        <Typography variant="subtitle1">
        Inspection of Knockdowns Temporary :{' '}
        {
            <span
            style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}
            >
            {inspection_knockdown_temporary}
            </span>
        }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
    </div>
    )
}

export function CemeteryAssessment(props){
    const { columbarium,
        multi_level_interment,
        semi_enclosed_mausoleoms,
        tombs,
        total_enclosed_mausoleoms,} =props.data
    return(
        <div>
            <Typography
            style={{ fontSize: '18px', textDecorationLine: 'underline' }}
            variant="subtitle2"
            >
            Cemetery Assessment
            <EditIcon
                style={{ cursor: 'pointer', margin: '4px' }}
                onClick={() => alert('change tab to Cemetery')}
            />
            </Typography>
            <Typography variant="subtitle1">
            Tombs :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {tombs}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Mausoleoms(Semi Enclosed) :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {semi_enclosed_mausoleoms}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Mausoleoms(Total Enclosed) :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {total_enclosed_mausoleoms}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Multi Level Interment :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {multi_level_interment}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Columbarium :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {columbarium}
                </span>
            }
            </Typography>
            <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}

export function LineAndGradeAssessment(props){
    const {length} =props.data
    return(
        <div>
            <Typography
            style={{ fontSize: '18px', textDecorationLine: 'underline' }}
            variant="subtitle2"
            >
            Line & Grade Assessment
            <EditIcon
                style={{ cursor: 'pointer', margin: '4px' }}
                onClick={() => alert('dialog pop-up na lang siguro')}
            />
            </Typography>
            <Typography variant="subtitle1">
            Establishment of Line & Grade :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {length} m
                </span>
            }
            </Typography>
            <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}

export function GroundPrepAndExcavation(props){
    const {approved_encroaching,
        common_foundation,
        foundation_with_basement,
        other_excavation,} = props.data
    return(
        <div>
            <Typography
            style={{ fontSize: '15px', textDecorationLine: 'underline' }}
            variant="subtitle2"
            >
            Ground Preparation & Excavation Assessment
            <EditIcon
                style={{ cursor: 'pointer', margin: '4px' }}
                onClick={() => alert('dialog pop-up na lang siguro')}
            />
            </Typography>
            <Typography variant="subtitle1">
            Common Foundation :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {common_foundation} m
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Foundation With Basement :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {foundation_with_basement} m
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Other Excavation :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {other_excavation} m
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Approved Encroaching :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {approved_encroaching} m
                </span>
            }
            </Typography>
            <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}

export function FencingAssessment(props){
    const {masonry_metal_or_concrete_height,
        masonry_metal_or_concrete_length,
        others_length,}=props.data
    return(
        <div>
            <Typography
            style={{ fontSize: '18px', textDecorationLine: 'underline' }}
            variant="subtitle2"
            >
            Fencing Assessment
            <EditIcon
                style={{ cursor: 'pointer', margin: '4px' }}
                onClick={() => alert('dialog pop-up na lang siguro')}
            />
            </Typography>
            <Typography variant="subtitle1">
            Masonry Metal or Concrete Height :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {masonry_metal_or_concrete_height} m
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Masonry Metal or Concrete Length :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {masonry_metal_or_concrete_length} m
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Other Length :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {others_length} m
                </span>
            }
            </Typography>
            <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}

export function PavementAndSidewalkAssessment(props){
    const {construction_of_pavement,
        enclosure_of_sidewalk} = props.data
    return(
        <div>
            <Typography
            style={{ fontSize: '18px', textDecorationLine: 'underline' }}
            variant="subtitle2"
            >
            Pavement & Sidewalk Assessment
            <EditIcon
                style={{ cursor: 'pointer', margin: '4px' }}
                onClick={() => alert('Pavement and Sidewalk')}
            />
            </Typography>
            <Typography variant="subtitle1">
            Construction of Pavement :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {construction_of_pavement}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Enclosure of Sidewalk :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {enclosure_of_sidewalk}
                </span>
            }
            </Typography>
            <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}

export function ScaffoldingAssessment(props){
    
    const {length, months} = props.data
    return(
        <div>
            <Typography
            style={{ fontSize: '18px', textDecorationLine: 'underline' }}
            variant="subtitle2"
            >
            Scaffolding Assessment
            <EditIcon
                style={{ cursor: 'pointer', margin: '4px' }}
                onClick={() => alert('Scaffolding')}
            />
            </Typography>
            <Typography variant="subtitle1">
            Length :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {length}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Months :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {months}
                </span>
            }
            </Typography>
            <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}

export function SignAssessment(props){
    const {erection_and_anchorage,
        illuminated_advertising,
        illuminated_business,
        is_new,
        neon_advertising,
        neon_business,
        others_advertising,
        others_business,
        painted_advertising,
        painted_business} = props.data
    return(
        <div>
            <Typography
            style={{ fontSize: '18px', textDecorationLine: 'underline' }}
            variant="subtitle2"
            >
            Sign Assessment
            <EditIcon
                style={{ cursor: 'pointer', margin: '4px' }}
                onClick={() => alert('Sign')}
            />
            </Typography>
            <Typography variant="subtitle1">
                Category : {' '}
            {<span
                style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline'
                }}
            >
                {is_new ? "New" : "Old"}
            </span>}
            </Typography>
            <Typography variant="subtitle1">
            Erection & Anchorage :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {erection_and_anchorage}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Neon Business :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {neon_business}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Neon Advertising :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {neon_advertising}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Illuminated Business :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {illuminated_business}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Illuminated Advertising :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {illuminated_advertising}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Painted Business :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {painted_business}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Painted Advertising :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {painted_advertising}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Other Business :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {others_business}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Other Advertising :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {others_advertising}
                </span>
            }
            </Typography>
            <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}

export function RepairAssessment(props){
    const {vertical, horizontal} = props.data
    return(
        <div>
            <Typography
            style={{ fontSize: '18px', textDecorationLine: 'underline' }}
            variant="subtitle2"
            >
            Repair Assessment
            <EditIcon
                style={{ cursor: 'pointer', margin: '4px' }}
                onClick={() => alert('Sign')}
            />
            </Typography>
            <Typography variant="subtitle1">
            Vertical :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {vertical}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Horizontal :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {horizontal}
                </span>
            }
            </Typography>
            <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}

export function RaisingOfBuilding(props){
    return(
        <div>
            <Typography
            style={{ fontSize: '18px', textDecorationLine: 'underline' }}
            variant="subtitle2"
            >
            Raising of Building Assessment
            <EditIcon
                style={{ cursor: 'pointer', margin: '4px' }}
                onClick={() => alert('Raising of Building')}
            />
            </Typography>
            <Typography variant="subtitle1">
            Generated Area :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {props.data.generated_area}
                </span>
            }
            </Typography>
            <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}

export function DemolitionMovingAssessment(props){
    const {appendage,
        area_to_be_moved,
        buildings,
        structures,
        systems_frames}=props.data
    return(
        <div>
            <Typography
            style={{ fontSize: '18px', textDecorationLine: 'underline' }}
            variant="subtitle2"
            >
            Demolition / Moving Assessment
            <EditIcon
                style={{ cursor: 'pointer', margin: '4px' }}
                onClick={() => alert('Demolition / Moving')}
            />
            </Typography>
            <Typography variant="subtitle1">
            Buildings :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {buildings}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Systems Frames :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {systems_frames}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Structures :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {structures}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Appendage :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {appendage}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Area to be Moved :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {area_to_be_moved}
                </span>
            }
            </Typography>
            <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}

export function CertificateAssessment(props){
    const {change_in_use,
        j2_aviaries,
        j2_towers}=props.data
    return(
        <div>
            <Typography
            style={{ fontSize: '18px', textDecorationLine: 'underline' }}
            variant="subtitle2"
            >
            Certificate of Occupancy Assessment
            <EditIcon
                style={{ cursor: 'pointer', margin: '4px' }}
                onClick={() => alert('Certificate of Occupancy')}
            />
            </Typography>
            <Typography variant="subtitle1">
            J2 Aviaries :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {j2_aviaries}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            J2 Towers :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {j2_towers}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Change in Use :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {change_in_use}
                </span>
            }
            </Typography>
            <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}

export function AmusementHousesAssessment(props){
    const {first_class_theaters,
        grandstands,
        second_class_theaters,
        third_class_theaters}=props.data
    
    return(
        <div>
            <Typography
            style={{ fontSize: '18px', textDecorationLine: 'underline' }}
            variant="subtitle2"
            >
            Amusement Houses Assessment
            <EditIcon
                style={{ cursor: 'pointer', margin: '4px' }}
                onClick={() => alert('Amusement Houses')}
            />
            </Typography>
            <Typography variant="subtitle1">
            First Class Theaters :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {first_class_theaters ? "Yes" : "Nope"}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Second Class Theaters :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {second_class_theaters ? "Yes" : "Nope"}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Third Class Theaters :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {third_class_theaters ? "Yes" : "Nope"}
                </span>
            }
            </Typography>
            <Typography variant="subtitle1">
            Grandstands :{' '}
            {
                <span
                style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}
                >
                {grandstands ? "Yes" : "Nope"}
                </span>
            }
            </Typography>
            <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
        </div>
    )
}