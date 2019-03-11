import React, { Component } from 'react';
import './App.css';
import Compare from './components/Compare';
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Login />
      </div>
    );
  }
}

export default App;
