import React, { Component } from 'react';
import styles from './NewAssessmentDialog.module.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import {
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  AppBar,
  IconButton,
  Paper,
  Slide
} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { closeNewAssessmentDialog } from '../../../actions/assessmentActions';

class NewAssesmentDialog extends Component {
  state = {
    selectedOccupancy: ''
  };

  onChangeHandler = e => {
    this.setState({ selectedOccupancy: e.target.value });
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
                <div>
                  <FormControl variant="filled">
                    <InputLabel>Occupancy Group</InputLabel>
                    <Select
                      name="selectedOccupancy"
                      value={this.state.selectedOccupancy}
                      onChange={this.onChangeHandler}
                      style={{ width: '200px' }}
                    >
                      <MenuItem value={0}>Group 1-A</MenuItem>
                      <MenuItem value={1}>Groupd 1-B</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div style={{ backgroundColor: 'violet' }}>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sapiente, nostrum, totam modi iste est mollitia quas labore,
                    facere voluptate eos perspiciatis ratione possimus sed quos
                    voluptatum molestias aut a. Quae aperiam, culpa nihil
                    dignissimos veniam inventore odit accusamus! Explicabo sunt
                    voluptatibus doloribus optio. Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Sapiente, nostrum, totam modi
                    iste est mollitia quas labore, facere voluptate eos
                    perspiciatis ratione possimus sed quos voluptatum molestias
                    aut a. Quae aperiam, culpa nihil dignissimos veniam
                    inventore odit accusamus! Explicabo sunt voluptatibus
                    doloribus optio.
                  </p>
                </div>
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
    secondary: green
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
