import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  isScrolled?: boolean;
}

const ThemeToggle = ({ isScrolled = false }: ThemeToggleProps) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all duration-300 hover:scale-110 ${
        isScrolled 
          ? 'bg-gray-100/80 border-gray-300/50 hover:bg-gray-200/80 dark:bg-[#2a2a2a]/80 dark:border-gray-600/50 dark:hover:bg-[#3a3a3a]/80' 
          : 'bg-white/10 border-white/20 hover:bg-white/20 dark:bg-[#2a2a2a]/50 dark:border-gray-600/30 dark:hover:bg-[#3a3a3a]/50'
      }`}
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 sm:w-6 sm:h-6">
        <Sun 
          className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
            isScrolled 
              ? 'text-gray-700 dark:text-gray-300' 
              : 'text-white'
          } ${
            isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
            isScrolled 
              ? 'text-gray-700 dark:text-gray-300' 
              : 'text-white'
          } ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;