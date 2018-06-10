import { combineReducers } from 'redux'
import {
  SELECT_SHOP_1,
  SELECT_SHOP_2,
  SELECT_SHOP_3,
  UPLOAD_PHOTO,
} from './actions';

const initialState = {
  adidasSelected:false,
  asosSelected:false,
  zaraSelected:false
}

function shops(state = initialState, action) {
  switch (action.type) {
    case SELECT_SHOP_1:
    console.log(state)
      return Object.assign({}, state, {
        adidasSelected: !action.adidasSelected
      })
    case SELECT_SHOP_2:
      return Object.assign({}, state, {
        asosSelected: !action.asosSelected
      })
    case SELECT_SHOP_3:
      return Object.assign({}, state, {
        zaraSelected: !action.zaraSelected
      })
    default:
      return state
  }
}

function photo(state = [], action) {
  switch (action.type) {
    case UPLOAD_PHOTO:
      return action.photo
    default:
      return state
  }
}

const shoppingApp = combineReducers({
  shops,
  photo
})

export default shoppingApp
