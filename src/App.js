import React, { Component } from 'react';
import './App.css';
import Today from './Components/Today.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Day Planner
          <div className="Nav">
            <b>Today</b> |
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
