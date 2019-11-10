import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import LandingPage from './components/layouts/LandingPage';
import BuildingPermit from './components/layouts/BuildingPermit';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  // <LandingPage />
  render() {
    return (
      //IMPLEMENT REDUX AND STORE AUTH PROPERTIES
      <Provider store={store}>
        <div className="App">
          <Header />
          <BuildingPermit />
        </div>
      </Provider>
    );
  }
}

export default App;
