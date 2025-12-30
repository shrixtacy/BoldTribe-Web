import React, { useState } from 'react';
import { Code, Brain, Palette, Link, Smartphone, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [ref, visibleItems] = useStaggeredAnimation(6, 150);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Crafting responsive, high-performance websites and web applications with cutting-edge technologies that drive business growth.',
      features: ['React & Next.js', 'TypeScript', 'Performance Optimization', 'SEO Ready']
    },
    {
      icon: Brain,
      title: 'AI Automation',
      description: 'Leveraging artificial intelligence to automate processes, enhance decision-making, and create intelligent solutions.',
      features: ['Machine Learning', 'Process Automation', 'Data Analytics', 'AI Integration']
    },
    {
      icon: Palette,
      title: 'Brand Design',
      description: 'Creating distinctive brand identities that resonate with audiences, build trust, and stand out in competitive markets.',
      features: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Brand Guidelines']
    },

    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Creating native and cross-platform mobile applications with exceptional user experiences that engage and retain users.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization']
    },
    {
      icon: Zap,
      title: 'Product Design',
      description: 'Designing intuitive, user-centered digital products that solve real problems elegantly while delivering exceptional user experiences.',
      features: ['UI/UX Design', 'Prototyping', 'User Research', 'Design Systems']
    }
  ];

  return (
    <section id="services" className="relative bg-gradient-to-b from-white to-gray-50 dark:from-[#1e1e1e] dark:to-[#1a1a1a] overflow-hidden transition-colors duration-300">
      {/* Curved Top */}
      <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-b-[50px] sm:rounded-b-[100px]"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid-pattern w-full h-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-red-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-red-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-28 sm:pt-40 pb-20 sm:pb-32 relative z-10">
        <AnimatedSection animation="fadeUp" className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-colors duration-300">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 transition-colors duration-300">
            What We Do
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 transition-colors duration-300">
            Transforming visions into digital realities with our comprehensive suite of cutting-edge services.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-out ${visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                }`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`bg-white/80 backdrop-blur-sm dark:bg-[#2a2a2a]/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-500 cursor-pointer border-2 relative overflow-hidden ${hoveredService === index
                  ? 'border-red-500/50 shadow-2xl shadow-red-500/20 scale-105 -rotate-1 sm:-rotate-2 bg-white dark:bg-[#2a2a2a]'
                  : 'border-transparent hover:border-red-500/30 dark:shadow-black/50'
                }`}>
                {/* Hover Glow Effect */}
                {hoveredService === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-2xl sm:rounded-3xl"></div>
                )}

                <div className="relative z-10">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 ${hoveredService === index
                      ? 'bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/30 scale-110'
                      : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-red-50 dark:group-hover:bg-red-900/30'
                    }`}>
                    <service.icon className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300 ${hoveredService === index ? 'text-white' : 'text-gray-600 dark:text-gray-300 group-hover:text-red-600'
                      }`} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base min-h-[3rem] sm:min-h-[3rem] transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="transition-all duration-500 overflow-hidden">
                    <ul className="space-y-2 sm:space-y-3 pt-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                          <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 transition-colors duration-300 ${hoveredService === index ? 'bg-red-500' : 'bg-gray-400'
                            }`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fadeUp" delay={800} className="text-center mt-12 sm:mt-16">
          <div className="bg-white/50 dark:bg-[#2a2a2a]/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto border border-gray-200/50 dark:border-gray-600/50">
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base transition-colors duration-300">Ready to transform your vision into reality?</p>
            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">Let's Discuss Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;