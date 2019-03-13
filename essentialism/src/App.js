//App.js

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Dashboard, Login, PrivateRoute, Signup, ChooseValues,  } from './components';

const App = () => {
  return (
    <Router>
      <div className='App'>
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
        <Route exact path='/choose-values' component={ChooseValues} />
        <PrivateRoute exact path="/" component={Dashboard} />
      </div>
    </Router>
  );
};

export default App;
