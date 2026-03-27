import React from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { FaTrashAlt } from 'react-icons/fa';

const ToDoItem = ({ id, text, done, onToggle, setTasks }) => {
  const handleClickDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== id));
  };

  return (
    <li onClick={() => onToggle(id)}>
      <span style={{ textDecoration: done ? 'line-through' : 'none' }}>
        {text}
      </span>
      <i className="checkbox">
        {done ? (
          <ImCheckboxChecked style={{ color: done ? '#4285F4' : '#ccc' }} />
        ) : (
          <ImCheckboxUnchecked />
        )}
      </i>
      <i className="trash">
        {<FaTrashAlt onClick={() => handleClickDelete(id)} />}
      </i>
    </li>
  );
};

export default ToDoItem;
