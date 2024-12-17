import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { lightTheme, darkTheme } from '../themes/theme';
import { ThemeProvider, CssBaseline } from '@mui/material/styles';

const ThemeSwitcher = () => {
  const savedTheme = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState(savedTheme === 'dark');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Button variant="contained" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
