import React, { Component } from 'react';
import './index.css';
import hnm from '../images/hnmsmall.png'
import zara from '../images/zarawhite.png'
import adidas from '../images/adidassmall.png'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectShop1, selectShop2, selectShop3 } from './actions'

const Brands = ({ adidasSelected, asosSelected, zaraSelected, onClickAdidas, onClickAsos, onClickZara }) => (
      <div className="Brands">
            <div className="flex-grid">
              <div className="col">

                  <a onClick={()=>onClickAdidas(adidasSelected)}>
                    <input type="hidden" name="brands" value="adidas" disabled=""/>
                    <img src={adidas} alt={"adidaslogo"} className={adidasSelected? 'img-border': ''}/>
                  </a>

              </div>

            <div className="col">

                <a onClick={()=>onClickAsos(asosSelected)}>
                  <input type="hidden" name="brands" value="asos" disabled=""/>
                  <img src={hnm} alt={"asoslogo"} className={asosSelected? 'img-border': ''}/>
                </a>

            </div>

            <div className="col">
                <a onClick={()=>onClickZara(zaraSelected)}>
                  <input type="hidden" name="brands" value="hnm" disabled=""/>
                <img src={zara} alt={"zaralogo"} className={zaraSelected? 'img-border': ''}/>
                </a>
          </div>

        </div>
      </div>
);

Brands.propTypes = {
  zaraSelected: PropTypes.bool.isRequired,
  asosSelected: PropTypes.bool.isRequired,
  adidasSelected: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  return {
    adidasSelected:state.shops.adidasSelected,
    asosSelected:state.shops.asosSelected,
    zaraSelected:state.shops.zaraSelected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickAdidas: id => {
      dispatch(selectShop1(id))
    },
    onClickAsos: id => {
      dispatch(selectShop2(id))
    },
    onClickZara: id => {
      dispatch(selectShop3(id))
    }
  }
}

const ConnectedBrands = connect(
  mapStateToProps,
  mapDispatchToProps
)(Brands);


export default ConnectedBrands;
