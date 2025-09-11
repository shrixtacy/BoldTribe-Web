import React, { useState } from 'react';
import { ArrowRight, Sparkles, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { submitEnquiry, submitEnquiryViaEmail } from '../services/enquiryService';

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const result = await submitEnquiry({
        ...formData,
        source: 'home' as const
      });

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setSubmitError(result.message);
        // Fallback to email if Google Sheets fails
        submitEnquiryViaEmail({
          ...formData,
          source: 'home' as const
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit. Opening email client as fallback...');
      // Fallback to email
      submitEnquiryViaEmail({
        ...formData,
        source: 'home' as const
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 overflow-hidden">
      {/* Curved Top */}
      <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-white rounded-b-[50px] sm:rounded-b-[100px]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-28 sm:pt-40 pb-16 sm:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - CTA Content */}
          <AnimatedSection animation="fadeUp" className="text-white space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Sparkles Effect */}
            <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-white animate-pulse" />
              <span className="text-red-200 font-semibold text-sm sm:text-base">Ready to get started?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Let's build something 
              <span className="block text-white/90">unforgettable.</span>
            </h2>
            
            <AnimatedSection animation="fadeUp" delay={200}>
              <p className="text-lg sm:text-xl text-red-100 leading-relaxed max-w-lg mx-auto lg:mx-0">
              We don't follow trends — we create what's next. Ready to bring your vision to life?
              </p>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection animation="fadeUp" delay={400}>
              <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4 text-red-100 justify-center lg:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Email us</p>
                  <p className="text-xs sm:text-sm">support@boldtribe.in</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 text-red-100 justify-center lg:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Call us</p>
                  <p className="text-xs sm:text-sm">+91 76848 36139</p>
                </div>
              </div>
              </div>
            </AnimatedSection>

            {/* CTA Button */}
            <AnimatedSection animation="fadeUp" delay={600}>
              <div className="pt-4 flex justify-center lg:justify-start">
              <a 
                href="/contact" 
                className="group bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-red-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-3 sm:gap-4"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* Right Column - Contact Form Card */}
          <AnimatedSection animation="slideLeft" delay={400} className="relative order-first lg:order-last">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl transform -rotate-1 sm:-rotate-2 hover:rotate-0 transition-transform duration-300 grid-pattern">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Get In Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {submitError && (
                  <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                    {submitError}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-green-600 text-white'
                      : isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:shadow-lg'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>

        {/* Additional Info */}
        <AnimatedSection animation="fadeUp" delay={800} className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 text-red-100">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-sm sm:text-base">Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-sm sm:text-base">48h Response Time</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-sm sm:text-base">100% Vision Execution</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCTA;