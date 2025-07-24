import React, { useState } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [ref, visibleItems] = useStaggeredAnimation(3, 200);

  const teamMembers = [
    {
      name: 'Alex Rivera',
      role: 'Creative Director',
      essence: 'Visionary',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Design is not just what it looks like - it\'s how it works.',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      essence: 'Architect',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Code is poetry written in logic.',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Marcus Thompson',
      role: 'AI Specialist',
      essence: 'Innovator',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The future is already here, we just make it accessible.',
      social: { github: '#', linkedin: '#', twitter: '#' }
    }
  ];

  return (
    <section id="team" className="relative bg-gray-50 dark:bg-[#1a1a1a] overflow-hidden transition-colors duration-300 waves-pattern">
      {/* Curved Background */}
      <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-gray-50 dark:bg-[#1a1a1a] rounded-b-[50px] sm:rounded-b-[100px] transition-colors duration-300 waves-pattern"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-48 sm:h-64 lg:h-96 bg-white dark:bg-[#1e1e1e] rounded-tl-[100px] sm:rounded-tl-[200px] transition-colors duration-300 zigzag-pattern"></div>
      
      <div className="container mx-auto px-4 sm:px-6 pt-28 sm:pt-40 pb-20 sm:pb-32 relative z-10">
        <AnimatedSection animation="fadeUp" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 transition-colors duration-300">
            Meet The Tribe
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 transition-colors duration-300">
            The creative minds and technical wizards who bring bold visions to life.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Team Grid */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ease-out ${
                  index === 2 ? 'sm:col-span-2 sm:w-full md:w-2/3 sm:mx-auto' : ''
                } ${
                  visibleItems.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className={`bg-white dark:bg-[#2a2a2a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-500 cursor-pointer border-2 ${
                  hoveredMember === index 
                    ? 'border-red-500/50 shadow-2xl shadow-red-500/20 scale-105 -rotate-1 sm:-rotate-2' 
                    : 'border-transparent dark:shadow-black/50 transition-colors duration-300'
                }`}>
                  <div className="text-center">
                    {/* Profile Image */}
                    <div className="relative mb-4 sm:mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover border-4 border-gray-100 dark:border-gray-600 group-hover:border-red-500/50 transition-all duration-300"
                      />
                      <div className={`absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                        hoveredMember === index 
                          ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors duration-300'
                      }`}>
                        {member.essence.charAt(0)}
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base transition-colors duration-300">
                      {member.role}
                    </p>

                    {/* Essence Badge */}
                    <div className={`inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 transition-all duration-300 ${
                      hoveredMember === index 
                        ? 'bg-gradient-to-br from-red-500 to-red-600 text-white' 
                        : 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                    }`}>
                      {member.essence}
                    </div>

                    {/* Quote */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      hoveredMember === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 italic mb-3 sm:mb-4 transition-colors duration-300">
                        "{member.quote}"
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className={`flex justify-center space-x-3 sm:space-x-4 transition-all duration-500 ${
                      hoveredMember === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <a href={member.social.github} className="text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                      <a href={member.social.linkedin} className="text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                      <a href={member.social.twitter} className="text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                        <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Philosophy Card */}
          <AnimatedSection animation="slideLeft" delay={400} className="relative order-first lg:order-last">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl transform -rotate-1 sm:-rotate-2 hover:rotate-0 transition-transform duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Philosophy</h3>
              <p className="text-red-100 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                "We don't just build products, we craft experiences. Every line of code, every pixel, every interaction is designed with purpose, passion, and precision."
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-red-100 text-sm sm:text-base">Innovation-First Mindset</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-red-100 text-sm sm:text-base">User-Centered Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-red-100 text-sm sm:text-base">Technical Excellence</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Team;