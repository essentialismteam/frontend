//RootContext.js

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

const initialState = {  
  authenticated: false,  
  token: '',
  firstname: '',
  lastname: '',
  username: '',
  password: ''
};

let reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authorized: true,
        token: action.payload.token,
        id: action.payload.id,
        error: ''
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        authorized: false,
        error: action.payload
      };
    default:
      return state;
  }
}

const login = (dispatch, user) => {
  dispatch({ type: 'LOGIN'});
  return axios
    .post('https://essentialism-backend.herokuapp.com/auth/login',
      {
        username: user.username,
        password: user.password
      }
    )
    .then(res => {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          token: res.data.token,
          id: res.data.id
        }
      });
      const userData = {
        userID: res.data.id,
        userToken: res.data.token,
      };
      localStorage.setItem('userData', JSON.stringify(userData));
    })
    .catch(err =>
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: err.response.data.message
      })
    )
}

const Provider = ({ children }) => {
  const prevAuth = JSON.parse(window.localStorage.getItem('authenticated')) || false;
  const prevToken = window.localStorage.getItem('token') || null;
  const [authenticated, setAuthenticated] = useState(prevAuth);
  const [token, setToken] = useState(prevToken);

  useEffect(
    () => {
        window.localStorage.setItem('authenticatedd', authenticated);
        window.localStorage.setItem('authBody', authBody);
    },
    [authenticated, authBody]
  );
  

  return (
    <Context.Provider value={initialState}>
      {children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;

export { Consumer, Context, login, Provider };
