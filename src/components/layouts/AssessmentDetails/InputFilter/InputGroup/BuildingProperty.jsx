import React, { Component, Fragment } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { submitProps } from '../../../../../actions/inputActions';

class BuildingProperty extends Component {
  state = {
    height: '',
    floor_area: '',
    additional_floor_area: '',
    changes: {}
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changes = e => {
    if (e.target.value) {
      const obj = { [e.target.name]: e.target.value };
      const tmpObj = { ...this.state.changes, ...obj };
      this.setState({ changes: tmpObj });
    } else {
      const tmpObj = this.state.changes;
      delete tmpObj[[e.target.name]];
      this.setState({ changes: tmpObj });
    }
  };

  render() {
    return (
      <Fragment>
        <Typography variant="h6">
          Height <span style={{ fontSize: '14px' }}>unit</span>
        </Typography>
        <TextField
          style={{ marginBottom: '12px' }}
          fullWidth
          name="height"
          variant="outlined"
          value={this.state.height}
          onChange={this.inputChange}
          placeholder="0.0"
          type="number"
          onBlurCapture={this.changes}
        />
        <Typography variant="h6">
          Floor Area <span style={{ fontSize: '14px' }}>unit</span>
        </Typography>
        <TextField
          style={{ marginBottom: '12px' }}
          fullWidth
          name="floor_area"
          variant="outlined"
          value={this.state.floor_area}
          onChange={this.inputChange}
          placeholder="0.0"
          type="number"
          onBlurCapture={this.changes}
        />
        <Typography variant="h6">
          Additional Floor Area <span style={{ fontSize: '14px' }}>unit</span>
        </Typography>
        <TextField
          style={{ marginBottom: '12px' }}
          fullWidth
          name="additional_floor_area"
          variant="outlined"
          value={this.state.additional_floor_area}
          onChange={this.inputChange}
          placeholder="0.0"
          type="number"
          onBlurCapture={this.changes}
        />
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          disabled={!this.state.changes}
          style={{ color: 'white', padding: '12px', fontSize: '18px' }}
          onClick={() =>
            this.props.submitProps(
              this.props.assessmentDetsRed.assessmentId,
              this.state.changes
            )
          }
        >
          Submit
        </Button>
      </Fragment>
    );
  }
}

const maptStateToProps = state => ({
  inputsRed: state.inputsRed,
  assessmentDetsRed: state.assessmentDetsRed
});

export default connect(maptStateToProps, { submitProps })(BuildingProperty);
