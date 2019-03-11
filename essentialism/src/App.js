import React, { Component } from 'react';
import './App.css';
import Compare from './components/Compare';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Compare />
      </div>
    );
  }
}

export default App;
