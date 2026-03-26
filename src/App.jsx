import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoInput from './components/ToDoInput';

function App() {
  const [text, setText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <>
      <header>TO DO LIST</header>
      <main className="container">
        <ToDoInput
          text={text}
          setText={setText}
          setTasks={setTasks}
          setIsVisible={setIsVisible}
        />
        {isVisible && <ToDoList tasks={tasks} setTasks={setTasks} />}
      </main>
    </>
  );
}

export default App;
