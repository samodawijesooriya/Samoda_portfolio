import React from 'react';
import { Code2, Building2, Users } from 'lucide-react';
import profileImage from '../assets/samodaProfile.jpg';
import pythonLogo from '../assets/python.png';
import reactLogo from '../assets/react.png';
import androidLogo from '../assets/andriod.png';
import javascriptLogo from '../assets/javascript.png';
import firebaseLogo from '../assets/firebase.png';
import githubLogo from '../assets/github.png';
import djangoLogo from '../assets/django.png';
import nodeLogo from '../assets/node.png';

const floatingIcons = [
  { icon: pythonLogo, alt: "Python", position: "top-[20%] left-[25%]", delay: "animate-float" },
  { icon: reactLogo, alt: "React", position: "top-[35%] left-[20%]", delay: "animate-float-delayed" },
  { icon: firebaseLogo, alt: "Firebase", position: "top-[50%] left-[23%]", delay: "animate-float-slow" },
  { icon: javascriptLogo, alt: "JavaScript", position: "top-[20%] right-[25%]", delay: "animate-float-delayed" },
  { icon: androidLogo, alt: "Android", position: "top-[35%] right-[20%]", delay: "animate-float" },
  { icon: nodeLogo, alt: "Node", position: "top-[50%] right-[23%]", delay: "animate-float-slow" },
  { icon: githubLogo, alt: "GitHub", position: "top-[65%] left-[25%]", delay: "animate-float" },
  { icon: djangoLogo, alt: "Django", position: "top-[65%] right-[25%]", delay: "animate-float-delayed" },
];

const highlights = [
  { icon: Code2, label: "Clean Code" },
  { icon: Building2, label: "Professional" },
  { icon: Users, label: "User Focused" },
];

// Home Page Component
function Home({ darkMode }) {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden pt-16">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} ${item.delay} hidden sm:block`}
        >
          <img
            src={item.icon}
            alt={item.alt}
            className="w-8 h-8 sm:w-12 sm:h-12 opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow mx-auto">
              <img
                src={profileImage}
                alt="Samoda Wijesooriya"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 glass-card rounded-full">
              <span className="text-xs font-medium text-primary">Available for hire</span>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Samoda Wijesooriya
          </h1>
          <p className="text-lg sm:text-xl text-primary font-medium mb-6">
            Junior Software Engineer & IoT Enthusiast
          </p>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-10">
            Passionate about building innovative IoT systems, web applications, and AI-integrated solutions.
            Currently pursuing B.Sc. (Hons) in Management and Information Technology at University of Kelaniya.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {highlights.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="p-4 rounded-2xl glass-card shadow-soft hover:shadow-glow transition-all duration-300 group">
                  <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

export default Home;