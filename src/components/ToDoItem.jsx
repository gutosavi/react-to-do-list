import React from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

const ToDoItem = ({ id, text, done, onToggle }) => {
  return (
    <li onClick={() => onToggle(id)}>
      {text} {done ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
    </li>
  );
};

export default ToDoItem;
