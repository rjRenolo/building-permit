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
          <div style={{ display: 'flex', height: '90vh' }}>
            <Paper
              elevation={18}
              style={{
                height: '100%',
                width: '28%',
                padding: '4px'
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
              <div>
                <Typography style={{ fontSize: '24px' }} variant="subtitle2">
                  Construction
                  <EditIcon
                    style={{ cursor: 'pointer', margin: '4px' }}
                    onClick={() => alert('change tab to Construction')}
                  />
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
                <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
              </div>
              <div>
                <Typography style={{ fontSize: '24px' }} variant="subtitle2">
                  Electrical
                  <EditIcon
                    style={{ cursor: 'pointer', margin: '4px' }}
                    onClick={() => alert('change tab to Electrical')}
                  />
                </Typography>
                <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
              </div>
              <div>
                <Typography style={{ fontSize: '24px' }} variant="subtitle2">
                  Mechanical
                  <EditIcon
                    style={{ cursor: 'pointer', margin: '4px' }}
                    onClick={() => alert('change tab to Mechanical')}
                  />
                </Typography>
                <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
              </div>
              <div>
                <Typography style={{ fontSize: '24px' }} variant="subtitle2">
                  Plumbing
                  <EditIcon
                    style={{ cursor: 'pointer', margin: '4px' }}
                    onClick={() => alert('change tab to Plumbing')}
                  />
                </Typography>
                <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
              </div>
              <div>
                <Typography style={{ fontSize: '24px' }} variant="subtitle2">
                  Electronics
                  <EditIcon
                    style={{ cursor: 'pointer', margin: '4px' }}
                    onClick={() => alert('change tab to Electronics')}
                  />
                </Typography>
                <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
              </div>
              <div>
                <Typography style={{ fontSize: '24px' }} variant="subtitle2">
                  Accessories
                  <EditIcon
                    style={{ cursor: 'pointer', margin: '4px' }}
                    onClick={() => alert('change tab to Accessories')}
                  />
                </Typography>
                <hr style={{ marginBottom: '12px', marginTop: '4px' }} />
              </div>
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
                textColor="secondary"
                style={{ background: 'white' }}
              >
                <Tab label="Construction" />
                <Tab label="Electrical" />
                <Tab label="Mechanical" />
                <Tab label="Plumbing" />
                <Tab label="Electronics" />
                <Tab label="Accessories" />
              </Tabs>
            </div>
          </div>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default AssessmentDetails;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#02A8E8'
    },
    secondary: green
  }
});
