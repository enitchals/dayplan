import React, { Component } from 'react';
import './Notes.css';

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      memo: '',
      notes: [],
      title: '',
      notebook: []
    }
    this.handleMemo = this.handleMemo.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
  }

  handleMemo(event) {
    this.setState({ memo: event.target.value });
  }

  handleAddNote() {
    const memo = this.state.memo;
    const notes = this.state.notes;
    notes.push(memo);
    this.setState({ memo: '', notes });
  }

  render() {
    return (
      <div className="Notes">
          <h1>Notes</h1>
          <ul>
            {this.state.notes.map((note, i) => {
              return (
                <div className="Note" key={i}>{note}</div>
                )
            })}
          </ul>
          <input type="text" width="300px" value={this.state.memo} onChange={this.handleMemo} />
          <button onClick={this.handleAddNote}> Add Note </button>
          <p></p>
      </div>
    );
  }
}

export default Notes;
