import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoInput from './components/ToDoInput';
import Header from './components/Header/Header';

function App() {
  const [coords, setCoords] = React.useState(null);
  const [tasks, setTasks] = React.useState(
    JSON.parse(localStorage.getItem('task')) || [],
  );
  const [text, setText] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const [filter, setFilter] = React.useState('All');
  const [editingId, setEditingId] = React.useState(null);

  const taskFiltered = tasks.filter((task) => {
    if (filter === 'completed') return task.done;
    if (filter === 'pending') return !task.done;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: crypto.randomUUID(),
        text: text,
        done: false,
      },
    ]);
    setIsVisible(true);
    setText('');
  };

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  React.useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks));
    setIsVisible(true);
  }, [tasks]);

  return (
    <>
      <header>
        <Header coords={coords} setCoords={setCoords} />
      </header>
      <main className="container">
        <ToDoInput
          text={text}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        {isVisible && (
          <ToDoList
            tasks={taskFiltered}
            setTasks={setTasks}
            filter={filter}
            setFilter={setFilter}
            editingId={editingId}
            setEditingId={setEditingId}
          />
        )}
      </main>
    </>
  );
}

export default App;
