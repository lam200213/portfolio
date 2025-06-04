// ThemeContext.jsx
// Provides a context and hook for managing dark/light theme across the app.

import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // State for current theme, defaulting to value in localStorage or 'dark'
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored : 'dark';
  });

  // Update body class and localStorage when theme changes
  useEffect(() => {
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to access theme context
export function useTheme() {
  return useContext(ThemeContext);
} 