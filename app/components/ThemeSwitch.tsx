'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true); // Asegúrate de que se monte solo en el cliente
  }, []);

  if (!mounted) return null; // Asegúrate de no renderizar antes de montar el componente

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle Theme"
      className="text-2xl p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mantis-400"
    >
      {resolvedTheme === 'dark' ? (
        <FiSun className="text-yellow-400" />
      ) : (
        <FiMoon className="text-blue-800" />
      )}
    </button>
  );
}
