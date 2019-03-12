//App.js

import React from "react";
import { Route } from "react-router-dom";

import { Dashboard, Login, PrivateRoute, Signup } from './components';

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Route
      exact
      path="/login"
      render={props => <Login {...props} /> }
      />
      <Route exact path='/register' component={Signup} />
      <PrivateRoute exact path="/" component={Dashboard} />
    </div>
  );
};

export default App;
