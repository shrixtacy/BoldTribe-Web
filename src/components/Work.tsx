import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Work = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [ref, visibleItems] = useStaggeredAnimation(3, 200);

  const projects = [
    {
      title: 'FinTech Revolution',
      category: 'Web Application',
      description: 'A comprehensive financial platform that revolutionizes how users manage their investments and track market trends.',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'AI/ML', 'Blockchain'],
      link: '#'
    },
    {
      title: 'EcoSmart Cities',
      category: 'Mobile App',
      description: 'An innovative IoT platform connecting smart city infrastructure with citizen engagement for sustainable urban living.',
      image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'IoT', 'Data Analytics', 'Cloud'],
      link: '#'
    },
    {
      title: 'MetaVerse Commerce',
      category: 'Blockchain',
      description: 'A decentralized marketplace enabling virtual asset trading and NFT commerce in the metaverse ecosystem.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Web3', 'Solidity', 'React', 'IPFS'],
      link: '#'
    }
  ];

  return (
    <section id="work" className="relative bg-gray-50 dark:bg-[#1a1a1a] overflow-hidden transition-colors duration-300 hexagon-pattern">
      {/* Curved Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-white dark:bg-[#1e1e1e] rounded-b-[50px] sm:rounded-b-[100px] transition-colors duration-300 circuit-pattern"></div>
      <div className="absolute bottom-0 right-0 w-2/3 h-32 sm:h-48 lg:h-64 bg-white dark:bg-[#1e1e1e] rounded-tl-[100px] sm:rounded-tl-[200px] transition-colors duration-300 diagonal-lines"></div>
      
      <div className="container mx-auto px-4 sm:px-6 pt-28 sm:pt-40 pb-20 sm:pb-32 relative z-10">
        <AnimatedSection animation="fadeUp" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 transition-colors duration-300">
            Our Work
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 transition-colors duration-300">
            Explore our portfolio of transformative digital solutions that push boundaries and deliver exceptional results.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Project Cards */}
          <div ref={ref} className="space-y-6 sm:space-y-8 order-last lg:order-first">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-[#2a2a2a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-700 ease-out cursor-pointer border-2 shadow-xl ${
                  hoveredProject === index 
                    ? 'border-red-500/50 scale-105 shadow-2xl shadow-red-500/20' 
                    : 'border-transparent hover:border-red-500/30 dark:shadow-black/50 transition-colors duration-300'
                } ${
                  visibleItems.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-full sm:w-16 h-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">{project.title}</h3>
                      <span className="text-xs px-2 sm:px-3 py-1 bg-red-500 text-white rounded-full self-start">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base transition-colors duration-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Featured Project Display */}
          <AnimatedSection animation="slideLeft" delay={400} className="relative order-first lg:order-last">
            <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl transform rotate-1 sm:rotate-2 hover:rotate-0 transition-all duration-300 dark:shadow-black/50">
              <div className="aspect-video bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center transition-colors duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg sm:text-xl">B</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base transition-colors duration-300">Featured Project Preview</p>
                </div>
              </div>
              
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">
                {projects[hoveredProject || 0]?.title || 'FinTech Revolution'}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base transition-colors duration-300">
                {projects[hoveredProject || 0]?.description || 'A comprehensive financial platform...'}
              </p>
              
              <button className="flex items-center gap-2 text-red-600 dark:text-red-400 font-semibold hover:gap-3 transition-all text-sm sm:text-base">
                View Case Study <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="fadeUp" delay={800} className="text-center mt-16 sm:mt-20">
          <button className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-red-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
            View All Projects
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Work;