import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Compare from './components/Compare';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute';

// localStorage.setItem('authBody', 234234532);
// localStorage.setItem('authenticated', true)

const App = () => {

    return (
      <div className='App'>
        <h1>App</h1>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/protected' component={Compare} />
      </div>
    );
}

export default App;
