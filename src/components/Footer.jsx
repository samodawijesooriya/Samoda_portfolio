import React from 'react';

// Footer Component
function Footer({ darkMode }) {
  return (
    <footer className="bg-card border-t border-border py-6 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Samoda Wijesooriya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;