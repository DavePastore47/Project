import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null); // null pour éviter le flash

  useEffect(() => {
    // Récupérer le thème depuis le localStorage ou système
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  if (!theme) return null; // Empêche le flash blanc ou mismatch SSR

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 mb-4 font-semibold rounded bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
    >
      {theme === 'light' ? '🌙 Mode Sombre' : '☀️ Mode Clair'}
    </button>
  );
}
