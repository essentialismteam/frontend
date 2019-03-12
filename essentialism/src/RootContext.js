import React, { createContext, useEffect, useState } from "react";

const RootContext = createContext();

const RootProvider = ({ children }) => {
  const prevAuth = window.localStorage.getItem('authenticated') || false;
  const prevToken = window.localStorage.getItem('token') || null;
  const [authenticated, setAuthenticated] = useState(prevAuth);
  const [token, setToken] = useState(prevToken);

  useEffect(
    () => {
      window.localStorage.setItem('authenticated', authenticated);
      window.localStorage.setItem('token', token);
    }, 
    [authenticated, token]
  );

  const defaultContext = {
    authenticated,
    setAuthenticated,
    token,
    setToken
  };

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};

export { RootProvider, RootContext };
