'use client';

import { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkStored = localStorage.getItem('theme') === 'dark';
    setIsDark(isDarkStored);
    document.documentElement.classList.toggle('dark', isDarkStored);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded text-2xl text-[var(--foreground)]"
    >
      {isDark ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
}