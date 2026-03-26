import React from 'react';

const ToDoList = ({ tasks }) => {
  return (
    <div className="todo-list">
      <ul>
        {tasks.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
