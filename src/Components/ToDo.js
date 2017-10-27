import React, { Component } from 'react';
import ToDoList from './ToDoList.js';

class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      toDo: '',
      toDoItems: []
    }
    this.handleToDo = this.handleToDo.bind(this);
    this.handleAddItemToList = this.handleAddItemToList.bind(this);
    this.handleRemoveFromList = this.handleRemoveFromList.bind(this);
  }

  handleToDo(event) {
    this.setState({ toDo: event.target.value });
  }

  handleAddItemToList() {
    const toDo = this.state.toDo;
    const toDoItems = this.state.toDoItems;
    toDoItems.push(toDo);
    this.setState({ toDoItems, toDo: '' });
  } 

  handleRemoveFromList(todo) {
    const toDoItems = this.state.toDoItems;
    toDoItems.forEach((item, i) => {
      if (todo === item) {
        toDoItems.splice(i, 1);
      }
    });
    this.setState({ toDoItems });
  }

  render() {
    return (
      <div className="ToDo">
        <div className="Box">
          <h1> To Do List </h1>
          <ToDoList
            changeHandler={this.handleToDo}
            addToList={this.handleAddItemToList}
            removeFromList={this.handleRemoveFromList}
            item={this.state.toDo}
            toDoItems={this.state.toDoItems}
            />
        </div>
      </div>
    );
  }
}

export default ToDo;
