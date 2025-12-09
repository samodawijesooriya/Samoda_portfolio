import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

// Header Component
function Header({ currentPage, setCurrentPage, darkMode }) {
  const navItems = ['home', 'about', 'experience', 'contact'];

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left - Name */}
          <div 
            onClick={() => setCurrentPage('home')}
            className="text-xl font-bold cursor-pointer hover:text-blue-500 transition-colors"
          >
            Samoda Wijesooriya
          </div>

          {/* Center - Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`capitalize font-medium transition-colors ${
                  currentPage === item
                    ? 'text-blue-500'
                    : darkMode
                    ? 'text-gray-300 hover:text-blue-400'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/samoda-wijesooriya-3745512ba"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://github.com/samodawijesooriya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 flex justify-center space-x-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setCurrentPage(item)}
              className={`capitalize text-sm font-medium transition-colors ${
                currentPage === item
                  ? 'text-blue-500'
                  : darkMode
                  ? 'text-gray-300 hover:text-blue-400'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;