//App.js

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Dashboard, Login, PrivateRoute, Signup } from './components';

const App = () => {
  return (
    <Router>
      <div classname='App'>
        <nav>
          <ul>
            <li>
              <Link to='/login'>Log In</Link>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </nav>
        <h1>App</h1>
        <Route path="/login" component={Login} />
        <Route exact path='/register' component={Signup} />
        <PrivateRoute exact path="/" component={Dashboard} />
      </div>
    </Router>
  );
};

export default App;
