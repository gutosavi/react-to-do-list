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
    <nav className="dark-mode-container">
      <button
        className="toggleBtn"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme ? (
          <CgSun color="white" size="1.5em" />
        ) : (
          <MdDarkMode color="black" size="1.5em" />
        )}
      </button>
    </nav>
  );
};

export default ThemeToggleButton;
