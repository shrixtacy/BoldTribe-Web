import React, { useEffect, useState } from 'react';
import { Search, Lightbulb, Palette, Code, Rocket } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [ref, visibleItems] = useStaggeredAnimation(5, 200);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We dive deep into understanding your vision, goals, and audience to lay a solid foundation for success.',
      icon: Search,
      details: [
        'Stakeholder Interviews',
        'Market Research',
        'Competitor Analysis',
        'Target Audience'
      ]
    },
    {
      number: '02',
      title: 'Ideate',
      description: 'We brainstorm innovative solutions and strategies that align with your objectives and brand vision.',
      icon: Lightbulb,
      details: [
        'Creative Workshops',
        'Concept Development',
        'Solution Mapping',
        'Strategy Formation'
      ]
    },
    {
      number: '03',
      title: 'Design',
      description: 'We craft visually stunning, user-centered designs that bring your vision to life with perfection and creativity.',
      icon: Palette,
      details: [
        'UI/UX Design',
        'Wireframing & Prototyping',
        'Visual Design',
        'User Testing'
      ]
    },
    {
      number: '04',
      title: 'Build',
      description: 'Our expert development team brings designs to life using cutting-edge technologies and best practices.',
      icon: Code,
      details: [
        'Development Sprints',
        'Quality Assurance',
        'Performance Optimization',
        'Security Implementation'
      ]
    },
    {
      number: '05',
      title: 'Deliver',
      description: 'We launch your project with precision and provide ongoing support to ensure continued success.',
      icon: Rocket,
      details: [
        'Launch Strategy',
        'Training & Documentation',
        'Performance Monitoring',
        'Ongoing Support'
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="process" className="pt-20 sm:pt-32 pb-20 sm:pb-32 relative bg-white dark:bg-[#1e1e1e] transition-colors duration-300 dots-pattern">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-br from-red-600/10 to-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection animation="fadeUp" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 transition-colors duration-300">
            Our Process
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 transition-colors duration-300">
            A streamlined approach that ensures exceptional results while keeping you involved every step of the way.
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div ref={ref} className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500/30 to-red-600/20 rounded-full hidden lg:block"></div>

            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative transition-all duration-700 ease-out ${
                    visibleItems.has(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  <div className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Step Content */}
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8 xl:pr-12' : 'lg:pl-8 xl:pl-12'} mb-8 lg:mb-0`}>
                      <div className={`bg-white dark:bg-[#2a2a2a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border transition-all duration-500 ${
                        activeStep === index 
                          ? 'border-red-500/50 shadow-2xl shadow-red-500/20 scale-105 -rotate-1' 
                          : 'border-gray-100 dark:border-gray-600 dark:shadow-black/50'
                      }`}>
                        {/* Ambient Glow */}
                        {activeStep === index && (
                          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-2xl sm:rounded-3xl blur-xl"></div>
                        )}
                        
                        <div className="relative z-10">
                          <div className="flex items-center mb-4">
                            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600/20 mr-3 sm:mr-4">
                              {step.number}
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                              {step.title}
                            </h3>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg transition-colors duration-300">
                            {step.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                                {detail}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step Icon */}
                    <div className="w-full lg:w-2/12 flex justify-center mb-8 lg:mb-0 order-first lg:order-none">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center transition-all duration-500 border-4 ${
                        activeStep === index 
                          ? 'bg-gradient-to-br from-red-500 to-red-600 shadow-xl shadow-red-500/30 scale-110 border-red-500' 
                          : 'bg-white dark:bg-gray-800 border-red-500/20 shadow-lg dark:shadow-gray-900/50'
                      }`}>
                        <step.icon className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-colors duration-300 ${
                          activeStep === index ? 'text-white' : 'text-red-600'
                        }`} />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:w-5/12"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Process CTA */}
        <AnimatedSection animation="fadeUp" delay={1000} className="text-center mt-16 sm:mt-20">
          <div className="bg-gray-50 dark:bg-[#2a2a2a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto transition-colors duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 transition-colors duration-300">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base transition-colors duration-300">Let's discuss how our proven process can bring your vision to life.</p>
            <button className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-red-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Process;