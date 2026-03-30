import React from 'react';

const ToDoInput = ({ text, handleChange, handleSubmit }) => {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <div className="task-box">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            id="task"
            placeholder="Write your task"
            value={text}
            onChange={handleChange}
          />
          <button className="btnSubmit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default ToDoInput;
