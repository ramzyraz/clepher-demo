import React from 'react';
import Navbar from './NavBar';
import { ThemeTypes } from '@/types';

const ThemeSwitcher = () => {
  const [theme, setTheme] = React.useState<ThemeTypes>('system');

  const toggleTheme = (selectedTheme: ThemeTypes) => {
    setTheme(selectedTheme);
    if (selectedTheme === 'system') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.toggle(
        'dark',
        selectedTheme === 'dark',
      );
    }
  };

  return <Navbar theme={theme} toggleTheme={toggleTheme} />;
};

export default ThemeSwitcher;
