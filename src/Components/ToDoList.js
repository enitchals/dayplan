import React from 'react';

const ToDoList = props => {
  const remove = item => {
    props.removeFromList(item);
  };
  return (
    <div>
      <ul>
        {props.toDoItems.map((todo, i) => {
          return (
            <div>
              <p className="ToDo-item" key={i}>{todo}
                <button onClick={() => { remove(todo) }}> Complete </button>
                </p>
              </div>
          );
        })}
      </ul>
      <input type="text" width="90%" value={props.item} onChange={props.changeHandler} />
      <button onClick={props.addToList}> Add To-Do Item </button>
      <p></p>
    </div>
  );
};

export default ToDoList;