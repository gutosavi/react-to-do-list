import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>...</header>
      <main className="container">
        <div className="task-box">
          <div>
            <input type="text" id="task" placeholder="Write your task here" />
          </div>
          <button className="btnSubmit">Enviar</button>
          <ul>
            <li>Tarefa 1</li>
            <li>Tarefa 2</li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
