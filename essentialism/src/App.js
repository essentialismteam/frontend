//App.js

import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Compare from "./components/Compare";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Route exact path="/login" component={Login} />
      <Route exact path='/register' component={Signup} />
      <PrivateRoute exact path="/home" component={Compare} />
    </div>
  );
};

export default App;
