'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme(); 

  useEffect(() => {
    console.log('Current Theme:', resolvedTheme);
  }, [resolvedTheme]);
  
  
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} 
      aria-label="Toggle Theme"
      className="text-2xl p-2 rounded-full transition-all duration-300 
                 focus:outline-none focus:ring-2 focus:ring-mantis-400"
    >
      {resolvedTheme === 'dark' ? (
        <FiSun className="text-yellow-400" /> 
      ) : (
        <FiMoon className="text-blue-800" /> 
      )}
    </button>
  );
}
