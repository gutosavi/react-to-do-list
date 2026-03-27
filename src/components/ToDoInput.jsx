import React from 'react';

const ToDoInput = ({ text, handleChange, handleSubmit }) => {
  return (
    <div className="task-box">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            id="task"
            placeholder="Write your task here"
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
