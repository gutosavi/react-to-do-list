import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, setTasks }) => {
  const handleClick = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((item) => {
        if (item.id === id) return { ...item, done: !item.done };
        return item;
      }),
    );
  };

  return (
    <div className="todo-list">
      <ul>
        {tasks.map((item) => (
          <ToDoItem
            key={item.id}
            id={item.id}
            text={item.text}
            done={item.done}
            setTasks={setTasks}
            onToggle={handleClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
