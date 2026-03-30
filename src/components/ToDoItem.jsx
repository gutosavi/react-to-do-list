import React from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { FaTrashAlt } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';

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
      <li onClick={() => onToggle(id)}>
        {editingId === id ? (
          <input
            id="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <span style={{ textDecoration: done ? 'line-through' : 'none' }}>
            {text}
          </span>
        )}
        {editingId === id && (
          <button className="btn-SaveEdit" onClick={handleSave}>
            Salvar
          </button>
        )}

        <i className="checkbox">
          {done ? (
            <ImCheckboxChecked style={{ color: done ? '#4285F4' : '#ccc' }} />
          ) : (
            <ImCheckboxUnchecked />
          )}
        </i>
        <i className="edit-icon">
          {<CiEdit onClick={() => setEditingId(id)} />}
        </i>
        <i className="trash">
          {<FaTrashAlt onClick={() => handleClickDelete(id)} />}
        </i>
      </li>
    </>
  );
};

export default ToDoItem;
