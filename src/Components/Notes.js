import React, { Component } from 'react';

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      memo: '',
      notes: []
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
        <div className="Box">
          <h1>Notes</h1>
          <ul>
            {this.state.notes.map((note, i) => {
              return (
                <div className="Note" key={i}>{note}</div>
                )
            })}
          </ul>
          <textarea width="90%" value={this.state.memo} onChange={this.handleMemo} />
          <button onClick={this.handleAddNote}> Add Note </button>
          <p></p>
        </div>
      </div>
    );
  }
}

export default Notes;
