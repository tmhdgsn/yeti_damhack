import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import hnm from '../images/hnmsmall.png'
import zara from '../images/zarawhite.png'
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
    console.log(this.state.adidasSelected);
  }

  onClickHnM(){
    this.setState({hnmSelected: !this.state.hnmSelected});
    console.log(this.state.hnmSelected);
  }

  onClickZara(){
    this.setState({zaraSelected: !this.state.zaraSelected});
    console.log(this.state.zaraSelected);
  }


  render() {
    return (
      <div className="Brands">
      <form className="registration-step-brands" method="POST" action="">
      <input type="hidden" name="select" value=""/>

            <div className="flex-grid">
              <div className="col">
                <ul className="brandsIconUl">
                  <li>
                  <a onClick={this.onClickAdidas}>
                    <input type="hidden" name="brands" value="adidas" disabled=""/>
                    <img src={adidas} alt={"adidaslogo"} className={this.state.adidasSelected? 'img-border': ''}/>
                  </a>
                  </li>
                </ul>
              </div>

            <div className="col">
              <ul className="brandsIconUl">
                <li>
                <a onClick={this.onClickHnM}>
                  <input type="hidden" name="brands" value="hnm" disabled=""/>
                  <img src={hnm} alt={"hnmlogo"} className={this.state.hnmSelected? 'img-border': ''}/>
                </a>
              </li>
            </ul>
          </div>

            <div className="col">
              <ul className="brandsIconUl">
                <li>
                <a onClick={this.onClickZara}>
                  <input type="hidden" name="brands" value="hnm" disabled=""/>
                <img src={zara} alt={"zaralogo"} className={this.state.zaraSelected? 'img-border': ''}/>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </form>



      </div>


);
  }
}

export default Brands;
