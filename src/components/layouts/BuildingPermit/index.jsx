import React, { Component, Fragment } from 'react';
import styles from './BuildingPermit.module.css';
import { Typography, Button } from '@material-ui/core';
import MaterialTable from 'material-table';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import AddIcon from '@material-ui/icons/Add';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { getAssessmentList } from '../../../actions/assessmentActions';

class BuildingPermit extends Component {
  /*
  just show a modal that he/she is not authenticated
  ok button for the modal
  and redirect

*/
  state = {
    isAuth: true
  };

  // {/* {!this.state.isAuth ? (
  //   <Redirect from="/buildingpermit" to="/" />
  // ) : (
  //   <Redirect to="/buildingpermit" />
  // )} */}

  componentDidMount() {
    this.props.getAssessmentList(localStorage.getItem('TOKEN'));
  }

  render() {
    return (
      <Fragment>
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
  assessmentRed: state.assessmentRed
});

export default connect(
  mapStateToProps,
  { getAssessmentList }
)(BuildingPermit);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#02A8E8'
    },
    secondary: green
  }
});
