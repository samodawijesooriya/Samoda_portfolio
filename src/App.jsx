import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contacts';

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`} style={{width: '100%', overflow: 'hidden'}}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} darkMode={darkMode} />
      
      <main className="flex-grow" style={{width: '100%'}}>
        {currentPage === 'home' && <Home darkMode={darkMode} />}
        {currentPage === 'about' && <About darkMode={darkMode} />}
        {currentPage === 'experience' && <Experience darkMode={darkMode} />}
        {currentPage === 'contact' && <Contact darkMode={darkMode} />}
      </main>
      
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Chatbot darkMode={darkMode} />
    </div>
  );
}

export default App;