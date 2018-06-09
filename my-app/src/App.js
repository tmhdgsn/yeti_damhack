import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Brands from './Brands';
import Buttons from './Buttons';
import 'typeface-roboto';


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
        <div className="flex-grid">
          <div className="col">
          <h2>Welcome to WhatsTheNameEven</h2>
          </div>
          </div>
        </div>

        {this.state.stage == 0 && <Brands />}
      </div>
    );
  }
}

export default App;
