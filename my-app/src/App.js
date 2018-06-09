import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Brands from './Brands';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      stage:0,
      files:null
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {this.state.stage == 0 && <Brands />}
      </div>
    );
  }
}

export default App;
