import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const TeamSection = () => {
  const leadership = [
    {
      name: 'Abhinab Tripathy',
      role: 'Creative Director',
      linkedin: 'https://www.linkedin.com/in/abhinab-tripathy-b0936b268/'
    },
    {
      name: 'Sivasish Bebartta',
      role: 'Mentor',
      linkedin: 'https://www.linkedin.com/in/sivasish/'
    }
  ];

  const teamMembers = [
    {
      name: 'Rajesh Kumar Pattnaik',
      role: 'Application Developer',
      linkedin: 'https://www.linkedin.com/in/rajesh-kumar-pattanaik-032b64243/'
    },
    {
      name: 'Suvendu Kumar Rath',
      role: 'Technical Project Coordinator',
      linkedin: ''
    },
    {
      name: 'Manoranjan Basantia',
      role: 'Backend Developer',
      linkedin: 'https://www.linkedin.com/in/manoranjanbasantia/'
    },
    {
      name: 'Arpita Singh',
      role: 'Web Developer',
      linkedin: ''
    },
    {
      name: 'Shriyansh Dash',
      role: 'Creative Associate',
      linkedin: 'https://www.linkedin.com/in/shriyanshdash/',
      github: 'https://github.com/shrixtacy'
    },
    {
      name: 'Jayshree Padhi',
      role: 'Content Creator Intern',
      linkedin: 'https://www.linkedin.com/in/jayshree-padhi-7b05b5280/'
    }
  ];

  return (
    <section id="team" className="relative bg-gray-50 dark:bg-[#1a1a1a] py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection animation="fadeUp" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
            Meet the Tribe
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 transition-colors duration-300">
            The passionate individuals behind BoldTribe's success
          </p>
        </AnimatedSection>

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
            Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((person, index) => (
              <AnimatedSection 
                key={index} 
                animation="fadeUp" 
                delay={index * 100}
                className="bg-white dark:bg-[#2a2a2a] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-6"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-2xl font-bold">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{person.name}</h4>
                  <p className="text-red-600 dark:text-red-400 font-medium">{person.role}</p>
                  {person.linkedin && (
                    <a 
                      href={person.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 mr-1" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
            Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <AnimatedSection 
                key={index} 
                animation="fadeUp" 
                delay={(index % 3) * 100}
                className="bg-white dark:bg-[#2a2a2a] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-lg font-bold mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h4>
                  <p className="text-red-600 dark:text-red-400 text-sm font-medium mb-3">{member.role}</p>
                  <div className="flex space-x-3">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.github && (
                      <a 
                        href={member.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
