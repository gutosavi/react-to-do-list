import React from 'react';
import './App.css';

function App() {
  const [text, setText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

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
    console.log(tasks);
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
          <ul>
            {tasks.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
