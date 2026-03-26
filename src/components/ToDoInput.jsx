import React from 'react';

const ToDoInput = ({ text, setText, setTasks, setIsVisible }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: crypto.randomUUID(),
        text: text,
        done: false,
      },
    ]);
    setIsVisible(true);
  };

  const handleChange = ({ target }) => {
    setText(target.value);
  };

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
