import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import LandingPage from './components/layouts/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
      </div>
    );
  }
}

export default App;
