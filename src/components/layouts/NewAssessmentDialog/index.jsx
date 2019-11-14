import React, { Component } from 'react';
import styles from './NewAssessmentDialog.module.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import {
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  AppBar,
  IconButton,
  Paper,
  Slide,
  InputAdornment,
  OutlinedInput
} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { closeNewAssessmentDialog } from '../../../actions/assessmentActions';

class NewAssesmentDialog extends Component {
  state = {
    selectedOccupancy: '',
    selectedOccupancyDescription: ''
  };

  onChangeHandler = e => {
    this.setState({
      selectedOccupancy: e.target.value
    });
  };

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Dialog
            fullScreen
            open={this.props.assessmentRed.newAssessmentDialog}
            TransitionComponent={Transition}
          >
            <AppBar color="primary" style={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={() => this.props.closeNewAssessmentDialog()}
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" style={{ color: 'white' }}>
                  Create New Building Permit Assessment
                </Typography>
              </Toolbar>
            </AppBar>
            <Paper style={{ margin: '16px', padding: '24px' }}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}
              >
                <Typography gutterBottom variant="h4">
                  Construction
                </Typography>
              </div>
              <div style={{ width: '100%', display: 'flex' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '14px',
                    width: '30%'
                  }}
                >
                  <FormControl variant="filled">
                    <InputLabel>Occupancy Group</InputLabel>
                    <Select
                      name="selectedOccupancy"
                      value={this.state.selectedOccupancy}
                      onChange={this.onChangeHandler}
                      style={{ width: '200px', marginBottom: '14px' }}
                    >
                      {this.props.assessmentRed.occupancyGroupList.map(
                        occupancyGroup => {
                          return (
                            <MenuItem
                              value={occupancyGroup}
                              key={occupancyGroup.id}
                            >
                              {occupancyGroup.name}
                            </MenuItem>
                          );
                        }
                      )}
                    </Select>
                  </FormControl>

                  <FormControl variant="outlined">
                    <InputLabel>Floor Area</InputLabel>
                    <OutlinedInput
                      endAdornment={
                        <InputAdornment position="end">sqr. m.</InputAdornment>
                      }
                    />
                  </FormControl>

                  <TextField
                    style={{ marginBottom: '8px' }}
                    variant="outlined"
                    label="Floor Area"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="end">Kg</InputAdornment>
                      )
                    }}
                  />
                  <TextField
                    style={{ marginBottom: '8px' }}
                    variant="outlined"
                    label="Additional Floor Area"
                  />
                  <TextField
                    style={{ backgroundColor: 'grey' }}
                    disabled
                    variant="outlined"
                    label="Total Floor Area"
                  />
                </div>
                <div
                  style={{
                    padding: '14px',
                    backgroundColor: 'violet',
                    width: '70%'
                  }}
                >
                  <Typography variant="subtitle1">
                    {!this.state.selectedOccupancy.description
                      ? 'Please Select Occupancy Group'
                      : this.state.selectedOccupancy.description}
                  </Typography>
                </div>
              </div>
              <div style={{ float: 'right', padding: '12px' }}>
                <Button
                  style={{
                    color: 'white',
                    padding: 'inherit',
                    marginRight: '8px'
                  }}
                  color="secondary"
                  variant="contained"
                >
                  Create New Assessment
                </Button>
                <Button
                  color="danger"
                  style={{ borderColor: 'red', padding: 'inherit' }}
                  variant="outlined"
                >
                  Cancel
                </Button>
              </div>
            </Paper>
          </Dialog>
        </ThemeProvider>
      </div>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#02A8E8'
    },
    secondary: green,
    danger: red
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const mapStateToProps = state => ({
  assessmentRed: state.assessmentRed
});

export default connect(
  mapStateToProps,
  { closeNewAssessmentDialog }
)(NewAssesmentDialog);
