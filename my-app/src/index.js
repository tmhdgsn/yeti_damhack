import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import shoppingApp from './reducers';
import { Provider } from 'react-redux'

const initialState = {
  shops:{
  adidasSelected:false,
  asosSelected:false,
  zaraSelected:false}
}
const store = createStore(shoppingApp, initialState);
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
