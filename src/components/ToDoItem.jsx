import React from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { FaTrashAlt } from 'react-icons/fa';

const ToDoItem = ({
  id,
  text,
  done,
  onToggle,
  setTasks,
  editingId,
  setEditingId,
}) => {
  const [editText, setEditText] = React.useState(text);

  const handleClickDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== id));
  };

  const handleSave = () => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text: editText } : task)),
    );
    setEditingId(null);
  };

  return (
    <>
      {editingId === id ? (
        <input value={editText} onChange={(e) => setEditText(e.target.value)} />
      ) : (
        ''
      )}
      {editingId === id && <button onClick={handleSave}>Salvar</button>}
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
        <i onClick={() => setEditingId(id)}>Editar</i>
        <i className="trash">
          {<FaTrashAlt onClick={() => handleClickDelete(id)} />}
        </i>
      </li>
    </>
  );
};

export default ToDoItem;
