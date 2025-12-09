import React from 'react';
import { Code2, Database, Smartphone, Cloud, Cpu, Wrench, Globe, Server, Zap, Coffee, FileCode } from 'lucide-react';
import pythonLogo from '../assets/python.png';
import kotlinLogo from '../assets/kotlin.png';
import jsLogo from '../assets/javascript.png';
import javaLogo from '../assets/java.png';
import dartLogo from '../assets/dart.png';
import cppLogo from '../assets/cplusplus.png';
import cssLogo from '../assets/css.png';
import htmlLogo from '../assets/html.png';
import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/node.png';
import djangoLogo from '../assets/django.png';
import dockerLogo from '../assets/docker.png';
import salesforceLogo from '../assets/salesforce.png';
import gitLogo from '../assets/github.png';
import arduinoLogo from '../assets/arduino.png';
import mysqlLogo from '../assets/mysql.png';
import postgresqlLogo from '../assets/postgresql.png';
import firebaseLogo from '../assets/firebase.png';
import mongodbLogo from '../assets/mongodb.png';
import androidLogo from '../assets/andriod.png';
import flutterLogo from '../assets/flutter.png';
import androidStudioLogo from '../assets/andriodStudio.png';

// About Page Component
function About({ darkMode }) {
  const skills = {
    languages: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Kotlin', logo: kotlinLogo },
      { name: 'Dart', logo: dartLogo }
    ],
    webDevelopment: [
      { name: 'React.js', logo: reactLogo },
      { name: 'Node.js', logo: nodeLogo },
      { name: 'Django', logo: djangoLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo }
    ],
    mobile: [
      { name: 'Android', logo: androidLogo },
      { name: 'Flutter', logo: flutterLogo },
      { name: 'Android Studio', logo: androidStudioLogo }
    ],
    databases: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgresqlLogo },
      { name: 'Firebase', logo: firebaseLogo }
    ],
    cloudDevOps: [
      { name: 'Docker', logo: dockerLogo },
      { name: 'Salesforce', logo: salesforceLogo },
      { name: 'Git/GitHub', logo: gitLogo }
    ],
    iot: [
      { name: 'Arduino', logo: arduinoLogo }
    ]
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-12">About Me</h2>
      
      {/* Introduction */}
      <div className={`max-w-4xl mb-16 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        <p className="text-lg leading-relaxed mb-4">
          Hello! I'm <span className="font-semibold text-blue-500">Samoda Wijesooriya</span>, a passionate junior software engineer and IoT enthusiast with hands-on experience in MERN stack, Android development, and cloud-based solutions.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I specialize in building innovative IoT systems, web applications, and AI-integrated solutions with clean architecture principles. My work spans across full-stack development, mobile applications, and hardware integration, always focusing on creating practical solutions to real-world problems.
        </p>
        <p className="text-lg leading-relaxed">
          Currently seeking opportunities in software engineering and IoT-based application development where I can contribute my skills and continue growing as a developer.
        </p>
      </div>

      {/* Divider */}
      <hr className={`my-16 ${darkMode ? 'border-gray-500' : 'border-gray-300'}`} />

      {/* Education Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold mb-8">Education</h3>
        <div className="space-y-6">
          {/* University */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} border-l-4 border-blue-500`}>
            <div className="flex items-start justify-between flex-wrap">
              <div>
                <h4 className="text-2xl font-semibold mb-2">
                  B.Sc. (Hons) in Management and Information Technology
                </h4>
                <p className={`text-lg mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  University of Kelaniya
                </p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Department of Industrial Management
                </p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className="text-lg font-semibold text-blue-500">GPA: 3.67</p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  2023 - Present
                </p>
              </div>
            </div>
          </div>

          {/* A/L */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} border-l-4 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
            <div className="flex items-start justify-between flex-wrap">
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  G.C.E. Advanced Level – Physical Science Stream
                </h4>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Rivisanda Central College, Aranayaka
                </p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  2021 (held 2022)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className={`my-16 ${darkMode ? 'border-gray-500' : 'border-gray-300'}`} />

      {/* Skills Section */}
      <div>
        <h3 className="text-3xl font-bold mb-8">Technical Skills</h3>
        
        {/* Programming Languages */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Code2 className="mr-3 text-blue-500" size={28} />
            <h4 className="text-xl font-semibold">Programming Languages</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.languages.map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-center transition-transform hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <img src={skill.logo} alt={skill.name} className="mx-auto mb-2 w-10 h-10 object-contain" />
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Web Development */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Code2 className="mr-3 text-green-500" size={28} />
            <h4 className="text-xl font-semibold">Web Development</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.webDevelopment.map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-center transition-transform hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <img src={skill.logo} alt={skill.name} className="mx-auto mb-2 w-10 h-10 object-contain" />
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Development */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Smartphone className="mr-3 text-purple-500" size={28} />
            <h4 className="text-xl font-semibold">Mobile Development</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.mobile.map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-center transition-transform hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <img src={skill.logo} alt={skill.name} className="mx-auto mb-2 w-10 h-10 object-contain" />
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Database className="mr-3 text-yellow-500" size={28} />
            <h4 className="text-xl font-semibold">Databases</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.databases.map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-center transition-transform hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <img src={skill.logo} alt={skill.name} className="mx-auto mb-2 w-10 h-10 object-contain" />
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Cloud className="mr-3 text-cyan-500" size={28} />
            <h4 className="text-xl font-semibold">Cloud & DevOps</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.cloudDevOps.map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-center transition-transform hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <img src={skill.logo} alt={skill.name} className="mx-auto mb-2 w-10 h-10 object-contain" />
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IoT & Hardware */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Cpu className="mr-3 text-red-500" size={28} />
            <h4 className="text-xl font-semibold">IoT & Hardware</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.iot.map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-center transition-transform hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <img src={skill.logo} alt={skill.name} className="mx-auto mb-2 w-10 h-10 object-contain" />
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;