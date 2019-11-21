import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Typography, Tab, Tabs, Box } from '@material-ui/core';
import { changeTabIndex } from '../../../../actions/inputActions';

class InputFilter extends Component {
  state = {
    tabIndex: ''
  };

  handleChange = (event, tabIndex) => {
    this.setState({ tabIndex });
  };

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
          Building Property
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
