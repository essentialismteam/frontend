import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
import App from "./App";
import './index.css'
import { createStore, applyMiddleware } from "redux";

const store = createStore(reducer, applyMiddleware(thunk));
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  rootElement
);
