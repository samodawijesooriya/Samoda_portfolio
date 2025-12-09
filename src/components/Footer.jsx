import React from 'react';
import { Moon, Sun } from 'lucide-react';

// Footer Component
function Footer({ darkMode, toggleDarkMode }) {
  return (
    <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} py-6 mt-auto`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Samoda Wijesooriya. All rights reserved.
          </p>
          
          <button
            onClick={toggleDarkMode}
            className={`mt-4 md:mt-0 p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;