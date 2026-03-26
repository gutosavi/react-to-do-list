import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  const [text, setText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);
  const [isVisible, setIsVisible] = React.useState(false);

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
    <>
      <header>TO DO LIST</header>
      <main className="container">
        <div className="task-box">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="task"
              placeholder="Write your task here"
              value={text}
              onChange={handleChange}
            />
            <button className="btnSubmit">Enviar</button>
          </form>
          {isVisible && <ToDoList tasks={tasks} />}
        </div>
      </main>
    </>
  );
}

export default App;
