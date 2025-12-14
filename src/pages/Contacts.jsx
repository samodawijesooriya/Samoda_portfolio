import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info Card */}
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'}`}>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            {/* Email */}
            <div className="flex items-start space-x-4 mb-6">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-cyan-500/20' : 'bg-cyan-100'}`}>
                <Mail className="text-cyan-500" size={24} />
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  Email
                </p>
                <p className="font-medium">samodawijesooriya2@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4 mb-8">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-cyan-500/20' : 'bg-cyan-100'}`}>
                <MapPin className="text-cyan-500" size={24} />
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  Location
                </p>
                <p className="font-medium">Colombo, Sri Lanka</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-700">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                Connect with me
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/samoda-wijesooriya-3745512ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  title="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/samodawijesooriya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  title="GitHub"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'}`}>
            <div className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                    darkMode 
                      ? 'bg-gray-700/50 text-white placeholder-gray-500' 
                      : 'bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200'
                  }`}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                    darkMode 
                      ? 'bg-gray-700/50 text-white placeholder-gray-500' 
                      : 'bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200'
                  }`}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none ${
                    darkMode 
                      ? 'bg-gray-700/50 text-white placeholder-gray-500' 
                      : 'bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200'
                  }`}
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center space-x-2 font-medium"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;