import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 right-6 z-50 bg-zinc-800/90 border border-zinc-700 p-3 rounded-full shadow-lg text-fuchsia-400 hover:bg-zinc-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun size={22} /> : <Moon size={22} />}
    </motion.button>
  );
};

export default DarkModeToggle;