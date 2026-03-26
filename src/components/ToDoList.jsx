import React from 'react';
import { ImCheckboxChecked } from 'react-icons/im';

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
          <li onClick={() => handleClick(item.id)} key={item.id}>
            {item.text} {item.done && <ImCheckboxChecked />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
