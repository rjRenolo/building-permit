import React, { Component, Fragment } from 'react';
import styles from './BuildingPermit.module.css';
import MaterialTable from 'material-table';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import AddIcon from '@material-ui/icons/Add';
import { Typography, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getAssessmentList,
  getOccupancyGroupList
} from '../../../actions/assessmentActions';

import NewAssessmentDialog from '../NewAssessmentDialog';
class BuildingPermit extends Component {
  /*
  just show a modal that he/she is not authenticated
  ok button for the modal
  and redirect

*/
  state = {
    isAuth: true
  };

  componentDidMount() {
    this.props.getAssessmentList(this.props.authRed.tokenKey);
  }

  render() {
    return (
      <Fragment>
        {!this.props.authRed.tokenKey ? (
          <Redirect from="/buildingpermit" to="/" />
        ) : (
          <Redirect to="/buildingpermit" />
        )}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'orange',
            paddingTop: '24px',
            paddingBottom: '24px'
          }}
        >
          <NewAssessmentDialog />
          <Typography variant="h2" gutterBottom>
            Municipal Engineer's Office
          </Typography>
          <Typography variant="h5">
            Building Permit Assessment Module
          </Typography>
        </div>
        <div className={styles.container}>
          <ThemeProvider theme={theme}>
            <div style={{ margin: '12px' }}>
              <Button
                color="secondary"
                variant="contained"
                style={{ color: 'white', width: '200px' }}
                startIcon={<AddIcon style={{ fontSize: '28px' }} />}
                onClick={() =>
                  this.props.getOccupancyGroupList(this.props.authRed.tokenKey)
                }
              >
                New Assessment
              </Button>
            </div>
          </ThemeProvider>
          <div style={{ margin: '12px' }}>
            <MaterialTable
              title="Building Permit Assessment List"
              columns={[
                { title: 'ID', field: 'id' },
                { title: 'Occupancy Group', field: 'occupancy_group.name' },
                { title: 'Created On', field: 'created_on' },
                { title: 'Updated On', field: 'updated_on' },
                { title: 'Filing Fee', field: 'filing_fee', type: 'numeric' }
              ]}
              data={this.props.assessmentRed.assessmentList}
              isLoading={this.props.assessmentRed.assessmentLoading}
              actions={[
                {
                  icon: 'edit',
                  tooltip: 'Edit Assessment',
                  onClick: (event, rowData) => alert('You saved ' + rowData.id)
                }
              ]}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  assessmentRed: state.assessmentRed,
  authRed: state.authRed
});

export default connect(
  mapStateToProps,
  { getAssessmentList, getOccupancyGroupList }
)(BuildingPermit);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#02A8E8'
    },
    secondary: green
  }
});
