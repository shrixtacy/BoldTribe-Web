import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [ref, visibleItems] = useStaggeredAnimation(3, 150);

  const testimonials = [
    {
      name: 'Robert Johnson',
      role: 'CEO, TechVision',
      company: 'TechVision Inc.',
      content: 'BoldTribe transformed our digital presence with a elegant, modern website that perfectly captures our brand. Their strategic approach and technical expertise have led to a 300% increase in online engagement.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Jennifer Lopez',
      role: 'Founder, GreenTech',
      company: 'GreenTech Solutions',
      content: 'They delivered an exceptional sustainability platform that exceeded all our expectations. The innovative AI features and seamless user experience have revolutionized how we track ESG metrics.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'David Smith',
      role: 'CTO, FinanceFlow',
      company: 'FinanceFlow Corp',
      content: 'Working with BoldTribe was a game-changer for our business. Their blockchain expertise and attention to detail resulted in a secure, scalable platform that our users love.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150'
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
                    "{testimonials[activeTestimonial].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-red-100 dark:border-red-900/30 mr-3 sm:mr-4 transition-colors duration-300"
                    />
                    <div>
                      <div className="font-bold text-gray-900 dark:text-gray-100 text-base sm:text-lg transition-colors duration-300">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base transition-colors duration-300">
                        {testimonials[activeTestimonial].role}
                      </div>
                      <div className="text-red-600 dark:text-red-400 font-medium text-sm sm:text-base transition-colors duration-300">
                        {testimonials[activeTestimonial].company}
                      </div>
                    </div>
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
                  className={`bg-white dark:bg-[#2a2a2a] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg cursor-pointer transition-all duration-500 border-2 ${
                    activeTestimonial === index
                      ? 'border-red-500 shadow-xl scale-105'
                      : 'border-transparent hover:border-red-200 dark:hover:border-red-800 dark:shadow-black/50 transition-colors duration-300'
                  } ${
                    visibleItems.has(index) 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-4'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base transition-colors duration-300">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">{testimonial.company}</div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
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