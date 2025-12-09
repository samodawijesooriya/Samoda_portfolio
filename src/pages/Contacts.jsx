import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Twitter, Instagram, Send } from 'lucide-react';

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

  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" size={24} />,
      label: 'Email',
      value: 'samodawijesooriya2@gmail.com',
      link: 'mailto:samodawijesooriya2@gmail.com'
    },
    {
      icon: <Phone className="text-green-500" size={24} />,
      label: 'Phone',
      value: '(+94) 70 380 4216',
      link: 'tel:+94703804216'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={28} />,
      name: 'GitHub',
      url: 'https://github.com/samodawijesooriya',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      icon: <Linkedin size={28} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/samoda-wijesooriya-3745512ba',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Twitter size={28} />,
      name: 'X (Twitter)',
      url: 'https://twitter.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Instagram size={28} />,
      name: 'Instagram',
      url: 'https://www.instagram.com/samodawijesooriya?igsh=MXdiMWwzbm1qOXVhNQ==',
      color: 'hover:text-pink-600'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
        {/* Left Column - Contact Info */}
        <div>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I'd love to hear from you! Feel free to reach out for collaborations, opportunities, or just a friendly chat.
          </p>
          
          {/* Contact Information */}
          <div className="space-y-6 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className={`flex items-center space-x-4 p-4 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {contact.icon}
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {contact.label}
                  </p>
                  <p className="font-medium">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-5 py-3 rounded-lg transition-all transform hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  } ${social.color}`}
                  title={social.name}
                >
                  {social.icon}
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <div className="space-y-5">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode 
                      ? 'bg-gray-700 text-white border border-gray-600' 
                      : 'bg-white text-gray-900 border border-gray-300'
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
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode 
                      ? 'bg-gray-700 text-white border border-gray-600' 
                      : 'bg-white text-gray-900 border border-gray-300'
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
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    darkMode 
                      ? 'bg-gray-700 text-white border border-gray-600' 
                      : 'bg-white text-gray-900 border border-gray-300'
                  }`}
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 font-medium"
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