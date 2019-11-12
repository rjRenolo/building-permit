import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './components/layouts/Header';
import { Provider } from 'react-redux';
import store from './store';

import LandingPage from './components/layouts/LandingPage';
import BuildingPermit from './components/layouts/BuildingPermit';
import PageNotFound from './components/layouts/PageNotFound';

class App extends Component {
  state = {
    isAuthenticated: false
  };
  render() {
    return (
      //IMPLEMENT REDUX AND STORE AUTH PROPERTIES
      <Provider store={store}>
        <div className="App">
          <Header />
          <Router>
            <Switch>
              {/* <Route exact path="/" component={LandingPage} /> */}
              <Route exact path="/buildingpermit" component={BuildingPermit} />
              {this.state.isAuthenticated ? (
                <Redirect from="/" to="/buildingpermit" />
              ) : (
                <Route path="/" component={LandingPage} />
              )}
              <Route component={PageNotFound} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
