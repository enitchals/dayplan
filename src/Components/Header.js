// JavaScript source code
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Title">
        <header className="App-header">
          <h1 className="App-title">
            Day Planner
            </h1>
        </header>
        <p className="App-intro">
          Today | This Week | This Month | This Year
          <div className="CreateAccount"></div>
        </p>
      </div>
    );
  }
}

export default Header;
