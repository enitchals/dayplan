import React, { Component } from 'react';
import Calendar from './Calendar.js';
import ToDo from './ToDo.js';
import Notes from './Notes.js';

class Today extends Component {
  render() {
    return (
      <div className="Today">
        <div className="App-body">
          <div className="App-body__column NarrowColumn">
            <ToDo />
          </div>
          <div className="App-body__column WideColumn">
            <Notes />
          </div>
          <div className="App-body__column NarrowColumn">
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}

export default Today;
