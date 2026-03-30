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
  const inputRef = React.useRef(null);

  const handleClickDelete = (id) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this task?',
    );
    if (confirm) {
      setTasks((prevTasks) => prevTasks.filter((item) => item.id !== id));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    }
  };

  const handleSaveEdit = () => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text: editText } : task)),
    );
    setEditingId(null);
  };

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <>
      <li>
        {editingId === id ? (
          <input
            ref={inputRef}
            id="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <span
            onClick={() => onToggle(id)}
            style={{ textDecoration: done ? 'line-through' : 'none' }}
          >
            {text}
          </span>
        )}
        {editingId === id && (
          <button className="btn-SaveEdit" onClick={handleSaveEdit}>
            Save
          </button>
        )}

        <i className="checkbox" onClick={() => onToggle(id)}>
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
