import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageCircle, CheckCircle, ArrowRight, Sparkles, Zap, Star } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const [contactRef, visibleContact] = useStaggeredAnimation(3, 200);
  const [formRef, visibleForm] = useStaggeredAnimation(6, 100);
  const [featuresRef, visibleFeatures] = useStaggeredAnimation(4, 150);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Drop us a line anytime',
      value: 'support@boldtribe.in',
      href: 'mailto:support@boldtribe.in',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      subtitle: 'Mon-Fri from 8am to 5pm',
      value: '+91 76848 36139',
      href: 'tel:+917684836139',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      subtitle: 'Come say hello at our office',
      value: '630, DLF Cyber City, Patia, Bhubaneswar',
      href: '#',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const services = [
    'Web Development',
    'Mobile Development',
    'AI Automation',
    'Brand Design',
    'Blockchain Development',
    'Product Design'
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const features = [
    {
      icon: Clock,
      title: '24h Response',
      description: 'We respond to all inquiries within 24 hours'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Working with clients worldwide'
    },
    {
      icon: MessageCircle,
      title: 'Free Consultation',
      description: 'Get expert advice at no cost'
    },
    {
      icon: CheckCircle,
      title: '100% Satisfaction',
      description: 'We guarantee your satisfaction'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Floating Icons */}
          <div className="absolute top-1/4 left-1/4 animate-float">
            <Sparkles className="w-8 h-8 text-white/20" />
          </div>
          <div className="absolute top-3/4 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
            <Zap className="w-6 h-6 text-white/15" />
          </div>
          <div className="absolute bottom-1/3 left-1/2 animate-float" style={{ animationDelay: '2s' }}>
            <Star className="w-10 h-10 text-white/10" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-32 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <AnimatedSection animation="fadeUp">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Let's Start a Conversation</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={200}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Get In Touch
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  With BoldTribe
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={400}>
              <p className="text-xl sm:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Ready to transform your vision into reality? Let's discuss your project and create something extraordinary together.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={600}>
              <div className="flex flex-wrap justify-center items-center gap-6 text-red-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24h Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No Commitment</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 sm:py-32 relative bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300 waves-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Multiple Ways to Connect
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Choose the method that works best for you. We're here to help in any way we can.
            </p>
          </AnimatedSection>

          <div ref={contactRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className={`group block transition-all duration-700 ease-out ${
                  visibleContact.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-white dark:bg-[#2a2a2a] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-rotate-1 text-center dark:shadow-black/50">
                  <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 transition-colors duration-300">
                    {contact.subtitle}
                  </p>
                  <p className="text-red-600 dark:text-red-400 font-semibold group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 sm:py-32 relative bg-white dark:bg-[#1e1e1e] transition-colors duration-300 dots-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Form */}
            <div className="order-last lg:order-first">
              <AnimatedSection animation="slideRight">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
                  Tell Us About Your Project
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </AnimatedSection>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div ref={formRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className={`transition-all duration-700 ease-out ${
                    visibleForm.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 outline-none ${
                        focusedField === 'name'
                          ? 'border-red-500 ring-4 ring-red-500/20 scale-105'
                          : 'border-gray-200 dark:border-gray-600 hover:border-red-300'
                      } bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-100`}
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div className={`transition-all duration-700 ease-out ${
                    visibleForm.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 outline-none ${
                        focusedField === 'email'
                          ? 'border-red-500 ring-4 ring-red-500/20 scale-105'
                          : 'border-gray-200 dark:border-gray-600 hover:border-red-300'
                      } bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-100`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company Field */}
                  <div className={`transition-all duration-700 ease-out ${
                    visibleForm.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 outline-none ${
                        focusedField === 'company'
                          ? 'border-red-500 ring-4 ring-red-500/20 scale-105'
                          : 'border-gray-200 dark:border-gray-600 hover:border-red-300'
                      } bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-100`}
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Service Field */}
                  <div className={`transition-all duration-700 ease-out ${
                    visibleForm.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 outline-none ${
                        focusedField === 'service'
                          ? 'border-red-500 ring-4 ring-red-500/20 scale-105'
                          : 'border-gray-200 dark:border-gray-600 hover:border-red-300'
                      } bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-100`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget Field */}
                <div className={`transition-all duration-700 ease-out ${
                  visibleForm.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Project Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('budget')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 outline-none ${
                      focusedField === 'budget'
                        ? 'border-red-500 ring-4 ring-red-500/20 scale-105'
                        : 'border-gray-200 dark:border-gray-600 hover:border-red-300'
                    } bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-100`}
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div className={`transition-all duration-700 ease-out ${
                  visibleForm.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 outline-none resize-none ${
                      focusedField === 'message'
                        ? 'border-red-500 ring-4 ring-red-500/20 scale-105'
                        : 'border-gray-200 dark:border-gray-600 hover:border-red-300'
                    } bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-100`}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitted
                      ? 'bg-green-600 text-white'
                      : isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 hover:shadow-xl hover:scale-105'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Message Sent Successfully!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column - Features */}
            <div className="order-first lg:order-last">
              <AnimatedSection animation="slideLeft" delay={200}>
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 text-white shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-6">Why Choose BoldTribe?</h3>
                  <div ref={featuresRef} className="space-y-6">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-4 transition-all duration-700 ease-out ${
                          visibleFeatures.has(index) 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 translate-x-4'
                        }`}
                      >
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{feature.title}</h4>
                          <p className="text-red-100 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideLeft" delay={400} className="mt-8">
                <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl p-6 shadow-xl dark:shadow-black/50">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
                    What Happens Next?
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-400 text-xs font-bold">1</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">We review your project details</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-400 text-xs font-bold">2</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">Schedule a free consultation call</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-400 text-xs font-bold">3</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">Provide detailed proposal & timeline</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300 circuit-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Prefer to Talk Directly?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-300">
              Sometimes a conversation is worth a thousand emails. Give us a call and let's discuss your project.
            </p>
            <a
              href="tel:+917684836139"
              className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Call Now: +91 76848 36139
              <ArrowRight className="w-5 h-5" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;