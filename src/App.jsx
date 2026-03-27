import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoInput from './components/ToDoInput';
import ThemeToggleButton from './components/Theme/ThemeToggleButton';
import WeatherApi from './components/Api/WeatherApi';
import UserLocation from './components/UserLocation';

function App() {
  const [coords, setCoords] = React.useState(null);
  const [tasks, setTasks] = React.useState(
    JSON.parse(localStorage.getItem('task')) || [],
  );
  const [text, setText] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);

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
        <ThemeToggleButton />
        <UserLocation onLocation={setCoords} />
        <WeatherApi coords={coords} />
      </header>
      <main className="container">
        <ToDoInput
          text={text}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        {isVisible && <ToDoList tasks={tasks} setTasks={setTasks} />}
      </main>
    </>
  );
}

export default App;
