import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import LandingPage from './components/layouts/LandingPage';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      //IMPLEMENT REDUX AND STORE AUTH PROPERTIES
      <Provider store={store}>
        <div className="App">
          <Header />
          <LandingPage />
        </div>
      </Provider>
    );
  }
}

export default App;
