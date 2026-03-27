import React from 'react';
import { CgSun } from 'react-icons/cg';
import { MdDarkMode } from 'react-icons/md';
import './ThemeToggleButton.css';

const ThemeToggleButton = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || '');

  React.useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === '' ? 'dark' : '');
  };

  return (
    <nav>
      <button onClick={toggleTheme} aria-label="Toggle theme">
        {theme ? (
          <MdDarkMode color="black" size="1.5em" />
        ) : (
          <CgSun color="white" size="1.5em" />
        )}
      </button>
    </nav>
  );
};

export default ThemeToggleButton;
