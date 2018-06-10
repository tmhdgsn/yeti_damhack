import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Brands from './Brands';
import Buttons from './Buttons';
import FileUpload from './FileUpload';
import 'typeface-roboto';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      stage:0,
      files:null
    };
    this.updateStage = this.updateStage.bind(this);
  }

  updateStage() {
    this.setState({stage: this.state.stage + 1});
  }

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
        {this.state.stage === 0 &&
          <Brands />}
        {this.state.stage === 0 &&
          <Buttons click={this.updateStage} text="Next"></Buttons>}
        {this.state.stage === 1 && < FileUpload />}
        {this.state.stage === 1 &&
          <Buttons click={this.updateStage} text="Next"></Buttons>}

      </div>
    );
  }
}

export default App;
