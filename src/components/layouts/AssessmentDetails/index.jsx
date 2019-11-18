import React, { Component, Fragment } from 'react';
import styles from './AssessmentDetails.module.css';
import { Redirect } from 'react-router-dom';

class AssessmentDetails extends Component {
  render() {
    return (
      <Fragment>
        {!localStorage.getItem('TOKEN') ? <Redirect to="/" /> : null}
        <div>
          <h3>Assessment Details</h3>
        </div>
      </Fragment>
    );
  }
}

export default AssessmentDetails;
