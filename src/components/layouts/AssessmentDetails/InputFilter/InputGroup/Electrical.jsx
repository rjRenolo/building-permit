import React, { Component, Fragment } from 'react';
import {
  Typography,
  TextField,
  Button,
  CircularProgress,
  IconButton,
  Snackbar,
  Checkbox
} from '@material-ui/core';
import { DecimalInput, IntegerInput } from '../index';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { submitProps, snackHandler } from '../../../../../actions/inputActions';

class Electrical extends Component {
  state = {
    total_connected_load: this.props.assessmentDetsRed.electricalAssessment
      .total_connected_load,
    total_transformer_capacity: this.props.assessmentDetsRed
      .electricalAssessment.total_transformer_capacity,
    number_of_poles: this.props.assessmentDetsRed.electricalAssessment
      .number_of_poles,
    number_of_attachments: this.props.assessmentDetsRed.electricalAssessment
      .number_of_attachments,
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
          Total Connected Load <span style={{ fontSize: '14px' }}>unit</span>
        </Typography>
        <TextField
          style={{ marginBottom: '12px' }}
          fullWidth
          name="total_connected_load"
          variant="outlined"
          value={this.state.total_connected_load}
          onChange={this.inputChange}
          placeholder="0.0"
          onBlurCapture={this.changes}
          InputProps={{
            inputComponent: DecimalInput
          }}
        />
        <Typography variant="h6">
          Total Transformer Capacity{' '}
          <span style={{ fontSize: '14px' }}>unit</span>
        </Typography>
        <TextField
          style={{ marginBottom: '12px' }}
          fullWidth
          name="total_transformer_capacity"
          variant="outlined"
          value={this.state.total_transformer_capacity}
          onChange={this.inputChange}
          placeholder="0.0"
          onBlurCapture={this.changes}
          InputProps={{
            inputComponent: DecimalInput
          }}
        />
        <Typography variant="h6">
          Number of Pole(s) <span style={{ fontSize: '14px' }}>unit</span>
        </Typography>
        <TextField
          style={{ marginBottom: '12px' }}
          fullWidth
          name="number_of_poles"
          variant="outlined"
          value={this.state.number_of_poles}
          onChange={this.inputChange}
          placeholder="0.0"
          onBlurCapture={this.changes}
          InputProps={{
            inputComponent: IntegerInput
          }}
        />
        <Typography variant="h6">
          Number of Attachment(s) <span style={{ fontSize: '14px' }}>unit</span>
        </Typography>
        <TextField
          style={{ marginBottom: '12px' }}
          fullWidth
          name="number_of_attachments"
          variant="outlined"
          value={this.state.number_of_attachments}
          onChange={this.inputChange}
          placeholder="0.0"
          onBlurCapture={this.changes}
          InputProps={{
            inputComponent: IntegerInput
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          disabled={this.props.inputsRed.loading}
          style={{ color: 'white', padding: '12px', fontSize: '18px' }}
          onClick={() =>
            this.props.submitProps(
              'electrical-assessment',
              this.props.assessmentDetsRed.assessmentId,
              this.state.changes
            )
          }
        >
          Submit
          {this.props.inputsRed.loading ? (
            <CircularProgress style={{ position: 'absolute' }} />
          ) : null}
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          open={this.props.inputsRed.showSnack}
          autoHideDuration={6000}
          onClose={this.props.snackHandler}
          // ContentProps={{
          //   'aria-describedby': 'message-id',
          // }}
          message={<span>Property(s) Updated Successfuly.</span>}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              // className={classes.close}
              onClick={this.props.snackHandler}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </Fragment>
    );
  }
}

const maptStateToProps = state => ({
  inputsRed: state.inputsRed,
  assessmentDetsRed: state.assessmentDetsRed
});

export default connect(maptStateToProps, { submitProps, snackHandler })(
  Electrical
);
