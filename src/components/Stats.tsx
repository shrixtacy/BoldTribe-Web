import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Stats = () => {
  const [statsRef, visibleStats] = useStaggeredAnimation(3, 200);
  const [logosRef, visibleLogos] = useStaggeredAnimation(6, 100);

  const stats = [
    { number: '10+', label: 'Projects Delivered', color: 'from-red-500 to-red-600' },
    { number: '5+', label: 'Partner Brands', color: 'from-red-600 to-red-700' },
    { number: '100%', label: 'Vision Execution', color: 'from-red-500 to-red-600' }
  ];

  const clientLogos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2560px-Microsoft_Azure.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Intel_Logo_July_2006.svg/1280px-Intel_Logo_July_2006.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png'
  ];

  return (
    <section className="pt-20 sm:pt-32 pb-20 sm:pb-32 relative bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300 circuit-pattern">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Client Logos */}
        <div className="mb-16 sm:mb-20">
          <AnimatedSection animation="fadeUp" className="text-center text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg transition-colors duration-300">
            Trusted by industry leaders
          </AnimatedSection>
          <div ref={logosRef} className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 opacity-60">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className={`w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-gray-700 rounded-xl sm:rounded-2xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-110 dark:shadow-gray-900/50 ${
                  visibleLogos.has(index) 
                    ? 'opacity-60 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg sm:rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-out ${
                index === 1 ? 'sm:scale-110' : ''
              } ${
                visibleStats.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className={`bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border-2 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 ${
                index === 1 
                  ? 'border-red-500/30 bg-gradient-to-br from-red-50 to-white dark:from-red-900/20 dark:to-[#2a2a2a] transition-colors duration-300' 
                  : 'border-gray-100 dark:border-gray-600 hover:border-red-500/50 dark:shadow-black/50 transition-colors duration-300'
              }`}>
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4 sm:mb-6`}>
                    {stat.number}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold text-base sm:text-lg lg:text-xl transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Achievement Banner */}
        <AnimatedSection animation="fadeUp" delay={600} className="mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Why Choose BoldTribe?</h3>
            <p className="text-red-100 text-base sm:text-lg leading-relaxed">
              We combine creative excellence with technical expertise to deliver solutions that don't just meet expectations—they exceed them.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Stats;