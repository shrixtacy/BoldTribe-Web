import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [ref, visibleItems] = useStaggeredAnimation(3, 150);

  const testimonials = [
    {
      name: 'Amitab Panda',
      role: 'Website Owner',
      company: '',
      content: "I'm early on in the process of building my website; however, I'm already impressed by customer support's response time. Great customer support ratings is something I consider before purchasing a theme.",
      rating: 5
    },
    {
      name: 'Rituparna Mohapatra',
      role: 'Content Creator',
      company: '',
      content: 'Bring your ideas to life with an intuitive visual editor. Create, edit, and customize your site visually and see the changes instantly.',
      rating: 5
    },
    {
      name: 'Raj Kumar Dash',
      role: 'Business Owner',
      company: '',
      content: 'Incredible theme and fantastic support! Every time I had a question, they got back to you so quickly and fixed your problem! I\'m so impressed! Thank you guys again for your precious help! Your customer support is amazing!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="relative bg-white dark:bg-[#1e1e1e] overflow-hidden transition-colors duration-300 zigzag-pattern">
        {/* Curved Background */}
        <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-gray-50 dark:bg-[#1a1a1a] rounded-b-[50px] sm:rounded-b-[100px] transition-colors duration-300 hexagon-pattern"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-32 sm:h-48 lg:h-64 bg-white dark:bg-[#1e1e1e] rounded-tl-[100px] sm:rounded-tl-[200px] transition-colors duration-300 dots-pattern"></div>
        
        <div className="container mx-auto px-4 sm:px-6 pt-28 sm:pt-40 pb-20 sm:pb-32 relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 transition-colors duration-300">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 transition-colors duration-300">
              Hear from the brands who've experienced the BoldTribe difference.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Main Testimonial */}
            <AnimatedSection animation="slideRight" delay={200} className="relative order-last lg:order-first">
              <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-2 border-red-100 dark:border-red-900/30 relative overflow-hidden transform rotate-1 hover:rotate-0 transition-all duration-300 dark:shadow-black/50">
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4 sm:mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, index) => (
                      <Star key={index} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed transition-colors duration-300">
                    {testimonials[activeTestimonial].content}
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col">
                    <div className="font-bold text-gray-900 dark:text-gray-100 text-lg sm:text-xl transition-colors duration-300">
                      {testimonials[activeTestimonial].name}
                    </div>
                    {testimonials[activeTestimonial].role && (
                      <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base transition-colors duration-300">
                        {testimonials[activeTestimonial].role}
                      </div>
                    )}
                    {testimonials[activeTestimonial].company && (
                      <div className="text-red-600 dark:text-red-400 font-medium text-sm sm:text-base transition-colors duration-300">
                        {testimonials[activeTestimonial].company}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Side - Testimonial Cards */}
            <div ref={ref} className="space-y-4 sm:space-y-6 order-first lg:order-last">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    activeTestimonial === index 
                      ? 'bg-gradient-to-br from-red-50 to-white dark:from-red-900/20 dark:to-[#2a2a2a] border-2 border-red-100 dark:border-red-900/30 shadow-lg' 
                      : 'bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-900/50 hover:shadow-md'
                  } ${visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100 text-base sm:text-lg transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base transition-colors duration-300 mb-2">
                      {testimonial.role}
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current flex-shrink-0" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Testimonials;