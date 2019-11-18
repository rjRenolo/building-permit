import React, { Component, Fragment } from 'react';
import styles from './AssessmentDetails.module.css';
import { Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  Tabs,
  Tab,
  OutlinedInput
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';

class AssessmentDetails extends Component {
  state = {
    occupancyGroup: 'Division A-1'
  };

  render() {
    // ************************************************************BASIC INFO ASSESSMENT
    const infoAssessment = (
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup} m<sup>2</sup>
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
              {this.state.occupancyGroup} m<sup>2</sup>
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************BUILDING PROPERTY ASSESSMENT
    const buildingPropertyAssessment = (
      <div>
        <Typography
          style={{ fontSize: '18px', textDecorationLine: 'underline' }}
          variant="subtitle2"
        >
          Building Property
          <EditIcon
            style={{ cursor: 'pointer', margin: '4px' }}
            onClick={() => alert('change tab to Building Property')}
          />
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
              {this.state.occupancyGroup} m<sup>2</sup>
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
              {this.state.occupancyGroup} m<sup>2</sup>
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
              {this.state.occupancyGroup} m<sup>2</sup>
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************ELECTRICAL ASSESSMENT
    const electricalAssessment = (
      <div>
        <Typography
          style={{ fontSize: '18px', textDecorationLine: 'underline' }}
          variant="subtitle2"
        >
          Electrical
          <EditIcon
            style={{ cursor: 'pointer', margin: '4px' }}
            onClick={() => alert('change tab to Electrical')}
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
              {this.state.occupancyGroup} kWa
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
              {this.state.occupancyGroup} kWa
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************MECHANICAL ASSESSMENT
    const mechanicalAssessment = (
      <div>
        <Typography
          style={{ fontSize: '18px', textDecorationLine: 'underline' }}
          variant="subtitle2"
        >
          Mechanical
          <EditIcon
            style={{ cursor: 'pointer', margin: '4px' }}
            onClick={() => alert('change tab to Mechanical')}
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
              {this.state.occupancyGroup} tons
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
              {this.state.occupancyGroup} tons
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup} kWa
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************PLUMBING ASSESSMENT
    const plumbingAssessment = (
      <div>
        <Typography
          style={{ fontSize: '18px', textDecorationLine: 'underline' }}
          variant="subtitle2"
        >
          Plumbing
          <EditIcon
            style={{ cursor: 'pointer', margin: '4px' }}
            onClick={() => alert('change tab to Plumbing')}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup} m<sup>3</sup>
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************ELECTRONIC ASSESSMENT
    const electronicsAssessment = (
      <div>
        <Typography
          style={{ fontSize: '18px', textDecorationLine: 'underline' }}
          variant="subtitle2"
        >
          Electronics
          <EditIcon
            style={{ cursor: 'pointer', margin: '4px' }}
            onClick={() => alert('change tab to Electronics')}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************BUILDING STRUCTURE ACCESSORIES ASSESSMENT
    const buildingStructAccessoriesAssessment = (
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
              {this.state.occupancyGroup} m<sup>2</sup>
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
              {this.state.occupancyGroup} m<sup>3</sup>
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
              {this.state.occupancyGroup} m<sup>3</sup>
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
              {this.state.occupancyGroup} m<sup>3</sup>
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup} m<sup>2</sup>
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
              {this.state.occupancyGroup} m
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup} m
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
              {this.state.occupancyGroup} m<sup>2</sup>
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
              {this.state.occupancyGroup} m<sup>3</sup>
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
              {this.state.occupancyGroup} m<sup>3</sup>
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
              {this.state.occupancyGroup} m<sup>3</sup>
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************BOOTHS ASSESSMENT
    const boothsAssessment = (
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
              {this.state.occupancyGroup} m<sup>2</sup>
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
              {this.state.occupancyGroup} m<sup>2</sup>
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
              {this.state.occupancyGroup}
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************CEMETERY ASSESSMENT
    const cemeteryAssessment = (
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************CEMETERY ASSESSMENT
    const lineAndGradeAssessment = (
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
              {this.state.occupancyGroup} m
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************GROUND PREP & EXCAVATION ASSESSMENT
    const groundPrepAndExcaAssessment = (
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
              {this.state.occupancyGroup} m
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
              {this.state.occupancyGroup} m
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
              {this.state.occupancyGroup} m
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
              {this.state.occupancyGroup} m
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************FENCING ASSESSMENT
    const fencingAssessment = (
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
              {this.state.occupancyGroup} m
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
              {this.state.occupancyGroup} m
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
              {this.state.occupancyGroup} m
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************Pavement & Sidewalk ASSESSMENT
    const pavementAndSidewalkAssessment = (
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************Scaffolding ASSESSMENT
    const scaffoldingAssessment = (
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************Sign ASSESSMENT
    const signAssessment = (
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
          <span
            style={{
              fontWeight: 'bold',
              textDecorationLine: 'underline'
            }}
          >
            {true ? 'New' : 'Old'}
          </span>
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************REPAIR ASSESSMENT
    const repairAssessment = (
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************RAISING OF BUILDING ASSESSMENT
    const raisingOfBuildingAssessment = (
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
              {this.state.occupancyGroup}
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************DEMOLITION MOVING ASSESSMENT
    const demolitionMovingAssessment = (
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************CERIFICATE ASSESSMENT
    const certificateAssessment = (
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );

    // ************************************************************AMUSEMENT HOUSES ASSESSMENT
    const amusementHousesAssessment = (
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
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
              {this.state.occupancyGroup}
            </span>
          }
        </Typography>
        <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
      </div>
    );
    return (
      <Fragment>
        {!localStorage.getItem('TOKEN') ? <Redirect to="/" /> : null}
        <ThemeProvider theme={theme}>
          <AppBar color="primary" style={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => console.log(this.props.history.location)}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6" style={{ color: 'white' }}>
                Assessment Properties
              </Typography>
            </Toolbar>
          </AppBar>
          <div style={{ display: 'flex', height: '89vh' }}>
            <Paper
              elevation={18}
              style={{
                height: '100%',
                width: '28%',
                padding: '4px',
                overflow: 'scroll'
              }}
            >
              <Typography
                align="center"
                variant="h2"
                style={{ fontSize: '32px' }}
              >
                Building Permit
              </Typography>
              <Typography align="center" gutterBottom variant="h5">
                Assessment Properties
              </Typography>
              <hr style={{ marginBottom: '8px' }} />

              {[
                infoAssessment,
                buildingPropertyAssessment,
                electricalAssessment,
                mechanicalAssessment,
                plumbingAssessment,
                electronicsAssessment,
                buildingStructAccessoriesAssessment,
                boothsAssessment,
                cemeteryAssessment,
                lineAndGradeAssessment,
                groundPrepAndExcaAssessment,
                fencingAssessment,
                pavementAndSidewalkAssessment,
                scaffoldingAssessment,
                signAssessment,
                repairAssessment,
                raisingOfBuildingAssessment,
                demolitionMovingAssessment,
                certificateAssessment,
                amusementHousesAssessment
              ]}
            </Paper>
            <div
              style={{
                backgroundColor: 'rgba(33,33,33,.4)',
                height: '100%',
                width: '72%'
              }}
            >
              <Tabs
                value={0}
                variant="scrollable"
                scrollButtons="auto"
                indicatorColor="secondary"
                style={{ background: '#02A8E8' }}
              >
                <Tab label="Building Property" />
                <Tab label="Electrical" />
                <Tab label="Mechanical" />
                <Tab label="Plumbing" />
                <Tab label="Electronics" />
                <Tab label="Building Structure Accessories" />
                <Tab label="Booths" />
                <Tab label="Cemetery" />
                <Tab label="Line & Grade" />
                <Tab label="Ground Preparation & Excavation" />
              </Tabs>
            </div>
          </div>
        </ThemeProvider>
      </Fragment>
    );
  }
}

// {infoAssessment}
//               {buildingPropertyAssessment}
//               {electricalAssessment}
//               {mechanicalAssessment}
//               {plumbingAssessment}
//               {electronicsAssessment}
//               {buildingStructAccessoriesAssessment}
//               {boothsAssessment}
//               {cemeteryAssessment}
//               {lineAndGradeAssessment}
//               {groundPrepAndExcaAssessment}
//               {fencingAssessment}
//               {pavementAndSidewalkAssessment}
//               {scaffoldingAssessment}
//               {signAssessment}
//               {repairAssessment}
//               {raisingOfBuildingAssessment}
//               {demolitionMovingAssessment}
//               {certificateAssessment}
//               {amusementHousesAssessment}

export default AssessmentDetails;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#02A8E8'
    },
    secondary: green
  }
});
