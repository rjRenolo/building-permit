import React, { Component, Fragment } from 'react';
import styles from './AssessmentDetails.module.css';
import { Redirect } from 'react-router-dom';
import DataContainer from './DataContainer';
import InputFilter from './InputFilter';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  Tabs,
  Tab
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import { getAssessmentDets } from '../../../actions/assessmentDetsActions';
import { connect } from 'react-redux';

class AssessmentDetails extends Component {
  state = {
    occupancyGroup: 'Division A-1'
  };

  componentDidMount() {
    this.props.getAssessmentDets(this.props.match.params.id);
  }

  render() {
    return (
      <Fragment>
        {!localStorage.getItem('TOKEN') ? <Redirect to="/" /> : null}
        <ThemeProvider theme={theme}>
          <AppBar color="primary" style={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                // onClick={() => console.log(this.props.match.params.id)}
                onClick={() =>
                  this.props.history.push('/engineering/buildingpermit')
                }
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

              <DataContainer data={this.props.assessmentDetsRed} />
            </Paper>
            <div
              style={{
                backgroundColor: 'rgba(33,33,33,.4)',
                height: '100%',
                width: '72%'
              }}
            >
              <InputFilter />
            </div>
          </div>
        </ThemeProvider>
      </Fragment>
    );
  }
}
// <Tabs
//   value={0}
//   variant="scrollable"
//   scrollButtons="auto"
//   indicatorColor="secondary"
//   style={{ background: '#02A8E8' }}
// >
//   <Tab label="Building Property" />
//   <Tab label="Electrical" />
//   <Tab label="Mechanical" />
//   <Tab label="Plumbing" />
//   <Tab label="Electronics" />
//   <Tab label="Building Structure Accessories" />
//   <Tab label="Booths" />
//   <Tab label="Cemetery" />
//   <Tab label="Line & Grade" />
//   <Tab label="Ground Preparation & Excavation" />
// </Tabs>

const mapStateToProps = state => ({
  assessmentDetsRed: state.assessmentDetsRed
});

export default connect(mapStateToProps, { getAssessmentDets })(
  AssessmentDetails
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#02A8E8'
    },
    secondary: green
  }
});
