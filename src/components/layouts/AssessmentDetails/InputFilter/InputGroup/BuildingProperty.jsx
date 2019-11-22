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
import CloseIcon from '@material-ui/icons/Close';
import NumberFormat from 'react-number-format';
import { DecimalInput } from '../index';
import { connect } from 'react-redux';
import { submitProps, snackHandler } from '../../../../../actions/inputActions';

class BuildingProperty extends Component {
  state = {
    height: this.props.assessmentDetsRed.buildingPropertyAssessment.height,
    floor_area: this.props.assessmentDetsRed.buildingPropertyAssessment
      .floor_area,
    additional_floor_area: this.props.assessmentDetsRed
      .buildingPropertyAssessment.additional_floor_area,
    is_new: this.props.assessmentDetsRed.buildingPropertyAssessment.is_new,
    changes: {
      is_new: this.props.assessmentDetsRed.buildingPropertyAssessment.is_new
    }
  };

  inputChange = e => {
    // const { target } = e;
    // console.log(target);
    // this.setState({ ...target });
    this.setState({ [e.target.name]: e.target.value });
  };

  changes = e => {
    // const obj = { [e.target.name]: e.target.value };
    // this.setState({ [e.target.name]: e.target.value });
    // this.props.getIt({ [e.target.name]: e.target.value });
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

  checkBoxHandler = () => {
    this.setState({
      is_new: !this.state.is_new,
      changes: { ...this.state.changes, is_new: !this.state.is_new }
    });
  };

  render() {
    return (
      <Fragment>
        <Typography variant="h6">Is New</Typography>
        <Checkbox
          style={{ marginBottom: '12px' }}
          checked={this.state.is_new}
          onChange={this.checkBoxHandler}
        />
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
          onBlurCapture={this.changes}
          InputProps={{
            inputComponent: DecimalInput
          }}
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
          InputProps={{
            inputComponent: DecimalInput
          }}
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
          InputProps={{
            inputComponent: DecimalInput
          }}
          onBlurCapture={this.changes}
        />
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          disabled={this.props.inputsRed.loading}
          style={{ color: 'white', padding: '12px', fontSize: '18px' }}
          onClick={() =>
            this.props.submitProps(
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
  BuildingProperty
);

// const DecimalInput = props => {
//   const { inputRef, ...other } = props;
//   return <NumberFormat {...other} getInputRef={inputRef} />;
// };
