//App.js

import React from "react";
import { Route } from "react-router-dom";

import Compare from "./components/Compare";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Route path="/" component={Login} />
      <PrivateRoute exact path="/protected" component={Compare} />
    </div>
  );
};

export default App;
