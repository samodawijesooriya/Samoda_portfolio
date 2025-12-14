import React from 'react';
import { Code2, Smartphone, Database, Cloud, Cpu, Globe } from 'lucide-react';
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
    <>
      <section className="pt-28 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-8">About Me</h2>

            {/* Introduction */}
            <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
              <p>
                Hello! I'm <span className="text-primary font-medium">Samoda Wijesooriya</span>, a passionate junior software engineer and IoT enthusiast with hands-on experience in MERN stack, Android development, and cloud-based solutions.
              </p>
              <p>
                I specialize in building innovative IoT systems, web applications, and AI-integrated solutions with clean architecture principles. My work spans across full-stack development, mobile applications, and hardware integration, always focusing on creating practical solutions to real-world problems.
              </p>
              <p>
                Currently seeking opportunities in software engineering and IoT-based application development where I can contribute my skills and continue growing as a developer.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-8">Education</h3>

              <div className="space-y-6">
                {/* University */}
                <div className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors">
                  <div className="glass-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-1">
                          B.Sc. (Hons) in Management and Information Technology
                        </h4>
                        <p className="text-primary text-sm mb-1">University of Kelaniya</p>
                        <p className="text-muted-foreground text-sm">Department of Industrial Management</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-2">
                          GPA: 3.67
                        </span>
                        <p className="text-sm text-muted-foreground">2023 - Present</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* A/L */}
                <div className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors">
                  <div className="glass-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-1">
                          G.C.E. Advanced Level – Physical Science Stream
                        </h4>
                        <p className="text-primary text-sm mb-1">Rivisanda Central College, Aranayaka</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">2021/2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
              <p className="text-muted-foreground">A comprehensive toolkit built through hands-on projects and continuous learning</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Programming Languages Card */}
              <div className="glass-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Programming Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'Java', 'C++', 'Kotlin', 'Dart'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm font-medium bg-secondary/50 hover:bg-secondary text-foreground rounded-lg transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Web Development Card */}
              <div className="glass-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Web Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Node.js', 'Django', 'HTML', 'CSS', 'Express'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm font-medium bg-secondary/50 hover:bg-secondary text-foreground rounded-lg transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile Development Card */}
              <div className="glass-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Mobile Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Android', 'Flutter', 'Android Studio'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm font-medium bg-secondary/50 hover:bg-secondary text-foreground rounded-lg transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases Card */}
              <div className="glass-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm font-medium bg-secondary/50 hover:bg-secondary text-foreground rounded-lg transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud & DevOps Card */}
              <div className="glass-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Cloud className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Cloud & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Docker', 'Git', 'GitHub Actions'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm font-medium bg-secondary/50 hover:bg-secondary text-foreground rounded-lg transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* IoT & Hardware Card */}
              <div className="glass-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Cpu className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">IoT & Hardware</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Arduino'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm font-medium bg-secondary/50 hover:bg-secondary text-foreground rounded-lg transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;