//App.js

import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import { Dashboard, Auth, PrivateRoute, Signup, ChooseValues,  } from './components';


const App = () => {
  return (
    <Router>
      <div className='App'>
        <h1>App</h1>
        <Route path="/login" component={Auth} />
        <Route exact path='/register' component={Signup} />
        <Route exact path='/choose-values' component={ChooseValues} />
        <PrivateRoute exact path="/" component={Dashboard} />
      </div>
    </Router>
  );
};

export default App;
