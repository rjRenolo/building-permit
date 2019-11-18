import React, { Component, Fragment } from 'react';
import styles from './AssessmentDetails.module.css';
import { Redirect } from 'react-router-dom';
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class AssessmentDetails extends Component {
  render() {
    return (
      <Fragment>
        {!localStorage.getItem('TOKEN') ? <Redirect to="/" /> : null}
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
        <div>
          <h3>Assessment Details</h3>
        </div>
      </Fragment>
    );
  }
}

export default AssessmentDetails;
