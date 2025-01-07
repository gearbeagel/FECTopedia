import React, { useContext } from 'react';
import { Moon, Sun } from 'react-bootstrap-icons';
import { ThemeContext } from '../context/ThemeContext';

const ThemeChanger = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-blue-500 transition duration-300"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeChanger;
