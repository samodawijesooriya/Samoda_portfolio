import React from 'react';
import { Briefcase, Calendar, MapPin, Award, ExternalLink, Github } from 'lucide-react';
import orelLogo from '../assets/orelIT.jpg';

// Project Card Component
function ProjectCard({ project, darkMode }) {
  return (
    <div className={`p-6 rounded-lg transition-all hover:shadow-xl ${
      darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-2xl border border-gray-200'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <span className={`text-sm px-3 py-1 rounded-full ${
          darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
        }`}>
          {project.year}
        </span>
      </div>
      
      <div className="mb-4">
        <p className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Tech Stack:
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded ${
                darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <ul className={`space-y-2 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {project.description.map((desc, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span className="text-sm">{desc}</span>
          </li>
        ))}
      </ul>
      
      {project.links && (
        <div className="flex gap-3 pt-4 border-t border-gray-600">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

// Experience Page Component
function Experience({ darkMode }) {
  const projects = [
    {
      title: "IoT-based Fish Tank Management System",
      year: "2025",
      tech: ["Arduino", "MongoDB", "Express", "React", "Node.js", "IoT Sensors"],
      description: [
        "Monitors environmental conditions (temperature, pH) in fish tanks using sensors",
        "Built a web dashboard to visualize real-time data and control actuators",
        "Designed the system so collected data can be used to automate control and replicate optimal settings across other tanks"
      ],
      links: {
        github: "https://github.com/samodawijesooriya/IOTFishTank.git"
      }
    },
    {
      title: "Chattermind AI – Custom Document Chatbot Platform",
      year: "2025",
      tech: ["Python", "Django", "Hugging Face", "Pinecone", "AI/ML"],
      description: [
        "Built a system where users can upload documents and generate AI chatbots with document-based responses",
        "Implemented document ingestion and vector embedding with Pinecone",
        "Conversational interface using Hugging Face models for natural language processing"
      ],
      links: {
        github: "https://github.com/samodawijesooriya/ChatterMind_AI.git"
      }
    },
    {
      title: "Photography Management System",
      year: "2025",
      tech: ["React.js", "Node.js", "Express", "MySQL"],
      description: [
        "Developed a web-based platform for photographers to manage customer bookings and event packages",
        "Implemented event calendar, photographer scheduling, payment tracking, and reporting features",
        "Focused on clean architecture and modular backend design"
      ],
      links: {
        github: "https://github.com/samodawijesooriya/SDP_PhotographyMGT.git"
      }
    },
    {
      title: "Android Recipe App",
      year: "2024",
      tech: ["Java", "Android Studio", "Firebase"],
      description: [
        "Created an app for adding, editing, deleting, and viewing recipes",
        "Included YouTube video integration for cooking tutorials",
        "Implemented step-by-step instructions and ingredient lists with search functionality"
      ],
      links: {
        github: "https://github.com/samodawijesooriya/TummyYummy.git"
      }
    },
    {
      title: "Revolutionary IoT Neck Pillow",
      year: "2024",
      tech: ["Arduino", "IoT", "Hardware"],
      description: [
        "Designed a neck pillow with vibration alerts and destination monitoring for public transport users",
        "The system gently wakes users before their stop to prevent missed destinations",
        "Integrated GPS tracking and customizable alert settings"
      ],
      links: {
        github: "https://github.com/samodawijesooriya/TransitiesApp.git"
      }
    }
  ];

  return (
    <div className="container mx-auto px-6 pt-24 py-20">
      
      {/* Work Experience Section */}
      <div className="mb-16">
        <h3 className="text-4xl font-bold text-center">Professional Experience</h3>
        <p className={`text-center mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          These experiences highlight the evolution of my technical career.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Intern Software Engineer - Orel IT */}
          <div className={`p-6 rounded-lg transition-all hover:shadow-xl ${
            darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-2xl border border-gray-200'
          }`}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <img 
                    src={orelLogo}
                    alt="Orel IT Logo" 
                    className="w-full h-full object-cover"
                />
                </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-1">Intern Software Engineer</h4>
                <p className="text-blue-500 font-semibold mb-1">Orel IT</p>
                <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Jul 2025 - Dec 2025 · 6 months
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  On-site · Colombo, Sri Lanka
                </p>
              </div>
            </div>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              I'm an intern software engineer at Orel IT, focusing on Full stack developments.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className={`my-16 ${darkMode ? 'border-gray-500' : 'border-gray-300'}`} />

      {/* Achievements Section */}
      <div className="mb-16">
        <h3 className="text-4xl font-bold text-center">Achievements & Highlights</h3>
        <p className={`text-center mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          A snapshot of my proudest accomplishments.
        </p>
        <div className={`p-6 rounded-lg border-l-4 border-yellow-500 ${
          darkMode ? 'bg-gray-800' : 'bg-yellow-50'
        }`}>
          <h4 className="text-xl font-bold mb-2">Finalist – Hackfest 2025</h4>
          <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
            Developed a fundraising management system using Salesforce (LWC, Apex) on Salesforce Playground. 
            Gained hands-on experience configuring Salesforce objects, flows, and custom components.
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className={`my-16 ${darkMode ? 'border-gray-500' : 'border-gray-300'}`} />

      {/* Certifications Section */}
      <div className="mb-16">
        <h3 className="text-4xl font-bold text-center">Certifications</h3>
        <p className={`text-center mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Professional certifications and credentials.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="https://badges.parchment.com/public/assertions/0xHWHa0qTJGXbxLKBSs7ew"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 rounded-lg transition-all hover:shadow-xl w-full sm:w-[400px] ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-2xl border border-gray-200'}`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-orange-900/30' : 'bg-orange-100'}`}>
                <Award className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex-1">
                <h4 className={`font-bold mb-1 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  Postman API Fundamentals Student Expert
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Postman
                </p>
                <p className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Dec 10, 2025
                </p>
              </div>
            </div>
          </a>
          <a 
            href="https://badges.parchment.com/public/assertions/km-Bq5UWS7ii1EcloGJeWA"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 rounded-lg transition-all hover:shadow-xl w-full sm:w-[400px] ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-2xl border border-gray-200'}`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-orange-900/30' : 'bg-orange-100'}`}>
                <Award className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex-1">
                <h4 className={`font-bold mb-1 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  Postman Flows - Beginner
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Postman
                </p>
                <p className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Dec 10, 2025
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className={`my-16 ${darkMode ? 'border-gray-500' : 'border-gray-300'}`} />

      {/* Projects Section */}
      <div>
        <h3 className="text-4xl font-bold text-center">Featured Projects</h3>
        <p className={`text-center mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          A selection of my most impactful projects.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;