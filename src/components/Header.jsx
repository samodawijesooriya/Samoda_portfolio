import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Menu, X, Moon, Sun } from 'lucide-react';

// Header Component
function Header({ currentPage, setCurrentPage, darkMode, toggleDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ['home', 'about', 'experience', 'contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Name */}
          <button
            onClick={() => setCurrentPage('home')}
            className="font-heading font-semibold text-lg text-foreground hover:text-primary transition-colors"
          >
            Samoda Wijesooriya
          </button>

          {/* Center - Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`capitalize text-sm font-medium transition-colors ${currentPage === item
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right - Social Links, Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/samoda-wijesooriya-3745512ba"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/samodawijesooriya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setCurrentPage(item);
                  setMobileOpen(false);
                }}
                className={`block w-full text-left py-2 capitalize text-sm font-medium transition-colors ${currentPage === item
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;