import React, { Component } from 'react';
import './App.css';
import Today from './Components/Today.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>dayplanner</h1>
          <div className="Nav">
            <b> <font color="red">Today</font></b> |
            This Week |
            This Month
          </div>
        </div>
        <Today />
      </div>
    );
  }
}

export default App;
