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
import NumberFormat from 'react-number-format';
import { changeTabIndex } from '../../../../actions/inputActions';
import BldgPropGroup from './InputGroup/BuildingProperty';

class InputFilter extends Component {
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

export const DecimalInput = props => {
  const { inputRef, ...other } = props;
  return <NumberFormat {...other} getInputRef={inputRef} />;
};
export const IntegerInput = props => {
  const { inputRef, ...other } = props;
  return <NumberFormat {...other} getInputRef={inputRef} />;
};
