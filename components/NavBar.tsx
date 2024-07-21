import React from 'react';
import Link from 'next/link';
import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons-react';
import { NavbarProps } from '@/types/props';
import SelectTheme from './SelectTheme';

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <nav className="flex justify-between bg-white dark:bg-gray-800 shadow mb-4">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold dark:text-white">
          Clepher Demo
        </Link>
      </div>
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex space-x-2">
          <SelectTheme theme={theme} toggleTheme={() => toggleTheme('system')}>
            <IconDeviceDesktop className="w-5 h-5 mr-1" />
          </SelectTheme>
          <SelectTheme theme={theme} toggleTheme={() => toggleTheme('light')}>
            <IconSun className="w-5 h-5 mr-1" />
          </SelectTheme>
          <SelectTheme theme={theme} toggleTheme={() => toggleTheme('dark')}>
            <IconMoon className="w-5 h-5 mr-1" />
          </SelectTheme>
        </div>
      </div>
    </nav>
  );
}
