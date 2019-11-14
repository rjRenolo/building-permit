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
        <Header />
        <Router>
          <Switch>
            {/* <Route exact path="/" component={LandingPage} /> */}
            <Route exact path="/buildingpermit" component={BuildingPermit} />
            <Route exact path="/" component={LandingPage} />
            <Route component={PageNotFound} />
          </Switch>
          {tokenKey ? (
            <Redirect from="/" to="/buildingpermit" />
          ) : (
            <Redirect to="/" />
          )}
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
