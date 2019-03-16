//App.js

import React from "react";
import { Route, NavLink } from "react-router-dom";

import { Dashboard, Auth, PrivateRoute, Signup, ChooseValues, } from './components';


const App = () => {

  const logout = () => {
    localStorage.clear()
  }
  return (

    <div className='App'>
      <nav>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink exact to='/login'>Log In/Sign Up</NavLink>
      </nav>
      <h1>App</h1>
      <Route path="/login" component={Auth} />
      <Route exact path='/register' component={Signup} />
      <Route exact path='/choose-values' component={ChooseValues} />
      <PrivateRoute exact path="/" component={Dashboard} />
      <button onClick={logout}>logout</button>
    </div>

  );
};

export default App;
