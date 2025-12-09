import React from 'react';
import { Code, Briefcase, User } from 'lucide-react';
import profileImage from '../assets/samodaProfile.jpg';
import pythonLogo from '../assets/python.png';
import kotlinLogo from '../assets/kotlin.png';
import jsLogo from '../assets/javascript.png';
import javaLogo from '../assets/java.png';
import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/node.png';
import djangoLogo from '../assets/django.png';
import dockerLogo from '../assets/docker.png';
import gitLogo from '../assets/github.png';
import arduinoLogo from '../assets/arduino.png';

// Home Page Component
function Home({ darkMode }) {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <img 
              src={profileImage} 
              alt="Samoda Wijesooriya" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title with Scattered Logos */}
        <div className="relative">
          {/* Scattered Tech Logos */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top Left */}
            <img src={pythonLogo} alt="" className="absolute -left-20 -top-8 w-12 h-12 opacity-60 animate-float" style={{animationDelay: '0s'}} />
            <img src={reactLogo} alt="" className="absolute -left-32 top-12 w-10 h-10 opacity-50 animate-float" style={{animationDelay: '0.5s'}} />
            
            {/* Top Right */}
            <img src={jsLogo} alt="" className="absolute -right-20 -top-6 w-11 h-11 opacity-55 animate-float" style={{animationDelay: '1s'}} />
            <img src={nodeLogo} alt="" className="absolute -right-32 top-14 w-12 h-12 opacity-50 animate-float" style={{animationDelay: '1.5s'}} />
            
            {/* Bottom Left */}
            <img src={dockerLogo} alt="" className="absolute -left-24 bottom-8 w-11 h-11 opacity-55 animate-float" style={{animationDelay: '2s'}} />
            <img src={gitLogo} alt="" className="absolute -left-36 bottom-2 w-10 h-10 opacity-50 animate-float" style={{animationDelay: '2.5s'}} />
            
            {/* Bottom Right */}
            <img src={djangoLogo} alt="" className="absolute -right-24 bottom-10 w-10 h-10 opacity-55 animate-float" style={{animationDelay: '3s'}} />
            <img src={arduinoLogo} alt="" className="absolute -right-36 bottom-0 w-11 h-11 opacity-50 animate-float" style={{animationDelay: '3.5s'}} />
            
            {/* Additional scattered logos */}
            <img src={kotlinLogo} alt="" className="absolute -left-16 top-24 w-9 h-9 opacity-45 animate-float" style={{animationDelay: '4s'}} />
            <img src={javaLogo} alt="" className="absolute -right-16 top-28 w-9 h-9 opacity-45 animate-float" style={{animationDelay: '4.5s'}} />
          </div>
          
          {/* Name with Highlight */}
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-2 relative inline-block">
              <span className="relative z-10">Samoda Wijesooriya</span>
              <span className={`absolute inset-0 blur-xl ${darkMode ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20' : 'bg-gradient-to-r from-blue-400/30 to-purple-500/30'} -z-10 scale-110`}></span>
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Junior Software Engineer & IoT Enthusiast
            </p>
          </div>
        </div>

        {/* Introduction Text */}
        <p className={`max-w-2xl text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Passionate about building innovative IoT systems, web applications, and AI-integrated solutions. 
          Currently pursuing B.Sc. (Hons) in Management and Information Technology at University of Kelaniya.
        </p>

        {/* Icons/Skills */}
        <div className="flex items-center justify-center space-x-8 pt-8">
          <div className="flex flex-col items-center space-y-2">
            <div className={`p-4 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
              <Code className="text-blue-500" size={32} />
            </div>
            <span className="text-sm font-medium">Clean Code</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className={`p-4 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-purple-100'}`}>
              <Briefcase className="text-purple-500" size={32} />
            </div>
            <span className="text-sm font-medium">Professional</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className={`p-4 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-green-100'}`}>
              <User className="text-green-500" size={32} />
            </div>
            <span className="text-sm font-medium">User Focused</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;