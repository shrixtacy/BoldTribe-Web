import React from 'react';
import { ArrowDown, Play, Sparkles, Zap, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white dark:bg-[#1e1e1e] overflow-hidden diagonal-lines transition-colors duration-300">
      {/* Red Corner Design Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Right Corner Design */}
        <div className="absolute top-0 right-0 w-96 h-96 sm:w-[500px] sm:h-[500px]">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-red-500/40 via-red-600/25 to-transparent rounded-bl-full"></div>
          <div className="absolute top-4 right-4 w-20 h-20 bg-red-500 rounded-full"></div>
          <div className="absolute top-12 right-32 w-12 h-12 bg-red-600 rounded-full"></div>
          <div className="absolute top-24 right-16 w-8 h-8 bg-red-400 rounded-full"></div>
        </div>
        
        {/* Bottom Left Corner Design */}
        <div className="absolute bottom-0 left-0 w-80 h-80 sm:w-96 sm:h-96">
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-red-500/35 via-red-600/20 to-transparent rounded-tr-full"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-red-500 rounded-full"></div>
          <div className="absolute bottom-16 left-24 w-10 h-10 bg-red-600 rounded-full"></div>
          <div className="absolute bottom-8 left-32 w-6 h-6 bg-red-400 rounded-full"></div>
        </div>
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Sparkles className="w-8 h-8 text-red-500/30 dark:text-red-400/30" />
        </div>
        <div className="absolute top-3/4 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
          <Zap className="w-6 h-6 text-red-600/25 dark:text-red-500/25" />
        </div>
        <div className="absolute bottom-1/3 left-1/2 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="w-10 h-10 text-red-400/20 dark:text-red-300/20" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - Text Content */}
          <AnimatedSection animation="fadeUp" className="space-y-6 sm:space-y-8 lg:space-y-10 text-gray-900 dark:text-white text-center lg:text-left transition-colors duration-300">
            {/* Badge */}
            <AnimatedSection animation="fadeUp" delay={100}>
              <div className="inline-flex items-center gap-3 bg-red-50 dark:bg-red-900/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4 border border-red-200 dark:border-red-800/30 transition-colors duration-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-red-700 dark:text-red-300 font-medium text-sm transition-colors duration-300">Available for new projects</span>
              </div>
            </AnimatedSection>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">
              <span className="block">We design and build</span>
              <span className="block bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                solutions that work
              </span>
            </h1>
            
            <AnimatedSection animation="fadeUp" delay={200}>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors duration-300">
                BoldTribe crafts futuristic digital experiences that transform visions into reality through strategy, design, and cutting-edge code.
              </p>
            </AnimatedSection>

            {/* Stats Row */}
            <AnimatedSection animation="fadeUp" delay={300}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 py-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">50+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">30+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">100%</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">Success</div>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="fadeUp" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 justify-center lg:justify-start">
                <button className="group bg-white text-red-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:bg-red-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden">
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="group border-2 border-red-200 dark:border-red-800/30 text-red-600 dark:text-red-400 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                  View Our Work
                </button>
              </div>
            </AnimatedSection>
            
            {/* Trust Indicators */}
            <AnimatedSection animation="fadeUp" delay={500}>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 pt-6 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">48h Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">100% Satisfaction</span>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* Right Column - Visual Cards */}
          <AnimatedSection animation="slideLeft" delay={600} className="space-y-6 sm:space-y-8 order-first lg:order-last">
            {/* Main Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl transform rotate-1 sm:rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-3xl border border-white/20">
              <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl sm:text-3xl">B</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">BoldTribe</h3>
                  <p className="text-red-600 text-base sm:text-lg font-semibold">Digital Innovation</p>
                </div>
              </div>
              <div className="h-40 sm:h-48 lg:h-56 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-xl sm:rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-8 h-8 bg-red-200 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-orange-200 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-1/2 right-8 w-4 h-4 bg-yellow-200 rounded-full animate-pulse delay-1000"></div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-xl animate-pulse">
                    <span className="text-white font-bold text-2xl sm:text-3xl">✨</span>
                  </div>
                  <p className="text-gray-800 font-bold text-base sm:text-lg">Crafting Digital Excellence</p>
                  <p className="text-gray-600 text-sm mt-2">Since 2019</p>
                </div>
              </div>
            </div>

            {/* Secondary Card */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl transform -rotate-1 hover:rotate-0 transition-all duration-500 ml-6 sm:ml-12 hover:shadow-2xl border border-red-400/20">
              <div className="text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-red-100 text-sm font-medium">ACTIVE PROJECTS</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">50+ Projects Delivered</h4>
                <p className="text-red-100 text-base sm:text-lg">Transforming visions into reality</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-white/20 rounded-full border-2 border-white/30"></div>
                    <div className="w-6 h-6 bg-white/20 rounded-full border-2 border-white/30"></div>
                    <div className="w-6 h-6 bg-white/20 rounded-full border-2 border-white/30"></div>
                  </div>
                  <span className="text-red-100 text-xs">+30 Happy Clients</span>
                </div>
              </div>
            </div>
            
            {/* Floating Achievement Badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce">
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <AnimatedSection animation="fadeIn" delay={1000} className="flex justify-center mt-12 sm:mt-16 lg:mt-20">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors duration-300">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-red-300 dark:border-red-700 rounded-full flex justify-center transition-colors duration-300">
              <div className="w-1 h-3 bg-red-500 dark:bg-red-400 rounded-full mt-2 animate-pulse transition-colors duration-300"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;