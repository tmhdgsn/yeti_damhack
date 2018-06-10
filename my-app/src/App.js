import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Brands from './Brands';
import Buttons from './Buttons';
import 'typeface-roboto';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <div className="flex-grid">
          <div className="col">
          <h1>WELCOME TO WHATISTHENAMEEVEN</h1>
          </div>
          </div>
        </div>
        <Brands />
        <Buttons />
      </div>
    );
  }
}

export default App;
