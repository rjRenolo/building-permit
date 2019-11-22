import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Typography,
  Tab,
  Tabs,
  Box,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput
} from '@material-ui/core';
import { changeTabIndex } from '../../../../actions/inputActions';
import BldgPropGroup from './InputGroup/BuildingProperty';

class InputFilter extends Component {
  state = {
    tabIndex: '',
    floor_area: '',
    changes: { asd: 'asd' }
  };

  handleChange = (event, tabIndex) => {
    this.setState({ tabIndex });
  };

  // textFieldChangeHandler = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  // changes = e => {
  //   alert({ [e.target.name]: e.target.value });
  // };

  render() {
    function TabPanel(props) {
      return (
        <Box role="tabpanel" hidden={props.value !== props.index}>
          {props.children}
        </Box>
      );
    }
    const arr1 = [
      'Building Property',
      'Electrical',
      'Mechanical',
      'Plumbing',
      'Electronics'
    ];
    const arr2 = ['Building Property', 'Electrical', 'Electronics'];
    const arr3 = ['Building Property', 'Mechanical'];
    const arr4 = ['Building Property', 'Mechanical', 'Electrical'];
    return (
      <Fragment>
        <Tabs
          onChange={this.props.changeTabIndex}
          value={this.props.inputsRed.tabIndex}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="secondary"
          style={{ background: '#02A8E8' }}
        >
          {arr1.map(label => (
            <Tab value={label} label={label} />
          ))}
        </Tabs>

        <TabPanel
          value={this.props.inputsRed.tabIndex}
          index="Building Property"
        >
          <div
            style={{
              height: '82vh',
              overflowY: 'scroll',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                width: '56%',
                padding: '8px',
                marginTop: '8px'
              }}
            >
              <BldgPropGroup />
              {/* <FormControl
                fullWidth
                style={{ marginBottom: '12px' }}
              >
                <Typography variant="h6">asdjoijsdf</Typography>
                <TextField
                  variant="outlined"
                  name="floor_area"
                  //   fullWidth
                  placeholder="0.0"
                  value={this.state.floor_area}
                  onChange={this.textFieldChangeHandler}
                  onBlur={this.changes}
                  // label="Floor Area"
                  type="number"
                  startAdornment={
                    <InputAdornment position="start">
                      m<sup>2</sup>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <h1>Building Property</h1>
              <h1>Building Property</h1>
              <h1>Building Property</h1>
              <h1>Building Property</h1>
              <h1>Building Property</h1>
              <h1>Building Property</h1>
              <h1>Building Property</h1>
              <h1>Building Property</h1>
              <h1>Building Property</h1>
              <h1>Building Property</h1>
              <h1>Building Property</h1>
              <h1>Building Property</h1>
              <h1>Building Property</h1>
              <h1>Building Property</h1>
              <h1>Building Property</h1> */}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={this.props.inputsRed.tabIndex} index="Electrical">
          Electrical
        </TabPanel>
        <TabPanel value={this.props.inputsRed.tabIndex} index="Electronics">
          Electronics
        </TabPanel>
        <TabPanel value={this.props.inputsRed.tabIndex} index="Mechanical">
          Mechanical
        </TabPanel>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  assessmentDetsRed: state.assessmentDetsRed,
  inputsRed: state.inputsRed
});

export default connect(mapStateToProps, { changeTabIndex })(InputFilter);

// {/* <Tab label="Building Property" />
// <Tab value={1} label="Electrical" />
// <Tab value={2} label="Mechanical" />
// <Tab value={3} label="Plumbing" />
// <Tab label="Electronics" /> */}
