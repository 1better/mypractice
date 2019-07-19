import React, { Component } from "react";
import ReactDOM from "react-dom";
import Redux from 'redux'
//引入 Provider
import {Provider} from 'react-redux'
//引入store 
import Store from './store'

let store = Store()

import App from './components/App/appRedux.js'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById("root"));
