import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Compare from './components/Compare';
import Login from './components/Login';
import ChooseValues from './components/ChooseValues'
// import PrivateRoute from './components/PrivateRoute';

const App = () => {

    return (
      <div className='App'>
        <h1>App</h1>
        <Route path='/login' component={Login} />
        <Route path='/choose-values' component={ChooseValues} />
        <Route path='/compare' component={Compare} />
        {/* <PrivateRoute exact path='/protected' component={Compare} /> */}
      </div>
    );
}

export default App;
