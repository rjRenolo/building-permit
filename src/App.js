import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './components/layouts/Header';
import { Provider, connect } from 'react-redux';
import store from './store';

import LandingPage from './components/layouts/LandingPage';
import BuildingPermit from './components/layouts/BuildingPermit';
import AssessmentDetails from './components/layouts/AssessmentDetails';
import PageNotFound from './components/layouts/PageNotFound';

class App extends Component {
  render() {
    const { tokenKey } = this.props.authRed;

    /*
    new assessment
      fullscreen modal
      fetch occupancy groups
    */

    return (
      <div className="App">
        <Router>
          <Switch>
            {/* <Route exact path="/" component={LandingPage} /> */}
            <Route
              exact
              path="/engineering/buildingpermit"
              component={BuildingPermit}
            />
            <Route
              exact
              path="/engineering/buildingpermit/assessment-details/:id"
              component={AssessmentDetails}
            />
            <Route exact path="/" component={LandingPage} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authRed: state.authRed
});

export default connect(mapStateToProps)(App);

// const mapStateToProps = state => ({
//   authRed: state.authRed
// });

// export default connect(mapStateToProps)(App);
