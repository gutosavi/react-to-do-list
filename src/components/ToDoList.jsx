import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, setTasks, setFilter }) => {
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
      <div className="filter-container">
        <label htmlFor="filter">Filter:</label>
        <select
          name="filter"
          id="filter"
          onChange={({ target }) => setFilter(target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

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
