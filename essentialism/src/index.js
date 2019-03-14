import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import App from "./App";
import './index.css'
import { createStore, applyMiddleware } from "redux";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
