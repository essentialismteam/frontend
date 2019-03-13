//RootContext.js

import React, { createContext, useEffect, useState } from "react";

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

const Provider = ({ children }) => {
  const prevAuth = JSON.parse(window.localStorage.getItem('authenticated')) || false;
  const prevToken = window.localStorage.getItem('token') || null;
  const [authenticated, setAuthenticated] = useState(prevAuth);
  const [token, setToken] = useState(prevToken);

  // useEffect(
  //   () => {
  //       window.localStorage.setItem('authenticatedd', authenticated);
  //       window.localStorage.setItem('authBody', authBody);
  //   },
  //   [authenticated, authBody]
  // );
  

  return (
    <Context.Provider value={initialState}>
      {children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;

export { Consumer, Context, Provider };
