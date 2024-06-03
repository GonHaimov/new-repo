import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './DarkModeToggle.css'; // Import any necessary CSS

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <button
      className="btn dark-mode-toggle"
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaSun className="fa-sun" /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
