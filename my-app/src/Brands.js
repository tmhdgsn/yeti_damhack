import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import zara from '../images/zarawhite.png'
import asos from '../images/asos.jpg'
import adidas from '../images/adidassmall.png'


class Brands extends Component {
  constructor(){
    super();
    this.state={
      adidasSelected:false,
      hnmSelected:false,
      zaraSelected:false
    }
    this.onClickAdidas = this.onClickAdidas.bind(this);
    this.onClickHnM= this.onClickHnM.bind(this);
    this.onClickZara = this.onClickZara.bind(this);
  }

  onClickAdidas(){
    this.setState({adidasSelected: !this.state.adidasSelected});
  }

  onClickHnM(){
    this.setState({hnmSelected: !this.state.hnmSelected});

  }

  onClickZara(){
    this.setState({zaraSelected: !this.state.zaraSelected});
  }


  render() {
    return (
      <div className="Brands">
            <div className="flex-grid">
              <div className="col">
                  <a onClick={this.onClickAdidas}>
                    <input type="hidden" name="brands" value="adidas" disabled=""/>
                    <img src={adidas} alt={"adidaslogo"} className={this.state.adidasSelected? 'img-border': ''}/>
                  </a>
              </div>

            <div className="col">
                <a onClick={this.onClickHnM}>
                  <input type="hidden" name="brands" value="hnm" disabled=""/>
                  <img src={zara} alt={"zaralogo"} className={this.state.hnmSelected? 'img-border': ''}/>
                </a>
            </div>

            <div className="col">
                <a onClick={this.onClickZara}>
                  <input type="hidden" name="brands" value="hnm" disabled=""/>
                <img src={asos} alt={"asoslogo"} className={this.state.zaraSelected? 'img-border': ''}/>
                </a>
          </div>

        </div>
      </div>


);
  }
}

export default Brands;
