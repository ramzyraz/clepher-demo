import React from 'react';
import { SelectThemeProps } from '../types/props';

export default function SelectTheme({
  theme,
  children,
  toggleTheme,
}: SelectThemeProps) {
  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center p-2 rounded border ${
        theme === 'system'
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600'
      }`}
    >
      {children}
    </button>
  );
}
