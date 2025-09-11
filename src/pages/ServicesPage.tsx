import React, { useState } from 'react';
import { ArrowRight, Code, Brain, Palette, Link, Smartphone, Zap, CheckCircle, Star, Users, Award, Clock, Shield } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [ref, visibleItems] = useStaggeredAnimation(6, 150);
  const [featuresRef, visibleFeatures] = useStaggeredAnimation(4, 100);
  const [processRef, visibleProcess] = useStaggeredAnimation(5, 200);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      subtitle: 'Modern & Scalable Solutions',
      description: 'We craft responsive, high-performance websites and web applications using cutting-edge technologies that drive business growth.',
      features: ['React & Next.js', 'TypeScript', 'Performance Optimization', 'SEO Ready', 'Progressive Web Apps', 'API Integration'],
      pricing: 'Starting at $5,000',
      timeline: '4-8 weeks',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      formLink: 'https://forms.google.com/web-development'
    },
    {
      icon: Brain,
      title: 'AI Automation',
      subtitle: 'Intelligent Process Enhancement',
      description: 'Leverage artificial intelligence to automate processes, enhance decision-making, and create intelligent solutions that transform your business.',
      features: ['Machine Learning', 'Process Automation', 'Data Analytics', 'AI Integration', 'Chatbots & Virtual Assistants', 'Predictive Analytics'],
      pricing: 'Starting at $8,000',
      timeline: '6-12 weeks',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      formLink: 'https://forms.google.com/ai-automation'
    },
    {
      icon: Palette,
      title: 'Brand Design',
      subtitle: 'Distinctive Visual Identity',
      description: 'Create distinctive brand identities that resonate with audiences, build trust, and stand out in competitive markets.',
      features: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Marketing Materials', 'Brand Positioning'],
      pricing: 'Starting at $3,000',
      timeline: '3-6 weeks',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      formLink: 'https://forms.google.com/brand-design'
    },
    {
      icon: Link,
      title: 'Blockchain Development',
      subtitle: 'Decentralized Solutions',
      description: 'Build secure, decentralized applications and smart contracts on blockchain technology for the future of digital transactions.',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Web3 Integration', 'Cryptocurrency Solutions', 'Blockchain Consulting'],
      pricing: 'Starting at $12,000',
      timeline: '8-16 weeks',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600',
      formLink: 'https://forms.google.com/blockchain-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      subtitle: 'Native & Cross-Platform Apps',
      description: 'Create native and cross-platform mobile applications with exceptional user experiences that engage and retain users.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization', 'Push Notifications', 'Offline Functionality'],
      pricing: 'Starting at $10,000',
      timeline: '8-14 weeks',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
      formLink: 'https://forms.google.com/mobile-development'
    },
    {
      icon: Zap,
      title: 'Product Design',
      subtitle: 'User-Centered Experiences',
      description: 'Design intuitive, user-centered digital products that solve real problems elegantly while delivering exceptional user experiences.',
      features: ['UI/UX Design', 'Prototyping', 'User Research', 'Design Systems', 'Usability Testing', 'Interaction Design'],
      pricing: 'Starting at $4,000',
      timeline: '4-10 weeks',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      formLink: 'https://forms.google.com/product-design'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Over 5 years of experience delivering cutting-edge solutions across various industries.'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'A passionate team of designers, developers, and strategists committed to your success.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We pride ourselves on meeting deadlines and delivering projects on schedule.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control ensure flawless execution of every project.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive strategy and roadmap tailored to your specific needs.'
    },
    {
      number: '03',
      title: 'Design',
      description: 'Our team creates stunning designs that align with your brand and user expectations.'
    },
    {
      number: '04',
      title: 'Development',
      description: 'We bring designs to life using the latest technologies and best practices.'
    },
    {
      number: '05',
      title: 'Launch',
      description: 'We deploy your solution and provide ongoing support to ensure continued success.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 overflow-hidden diagonal-lines">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-32 relative z-10">
          <div className="text-center text-white max-w-5xl mx-auto">
            <AnimatedSection animation="fadeUp" className="mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 sm:mb-8">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">Premium Digital Solutions</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={200}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="text-red-600 dark:text-red-400">Transform Your Vision Into</span>
                <span className="block text-gray-800 dark:text-white bg-white/95 dark:bg-transparent px-4 py-2 rounded-xl dark:px-0 dark:py-0 dark:rounded-none shadow-lg">
                  Digital Reality
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={400}>
              <p className="text-xl sm:text-2xl text-gray-900 dark:text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 transition-colors duration-300">
                Premium digital solutions that transform your business and drive exceptional results.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
                <a 
                  href="/contact" 
                  className="group bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-3"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/case-studies" 
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={800}>
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-red-600 dark:text-red-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm sm:text-base">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm sm:text-base">48h Response Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm sm:text-base">100% Satisfaction Guarantee</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <AnimatedSection animation="fadeIn" delay={1000} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Floating Elements with Scroll Parallax */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="scroll-parallax-slow absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/5 rounded-full blur-2xl"></div>
        <div className="scroll-parallax-medium absolute top-1/2 right-1/3 w-24 h-24 bg-red-600/10 rounded-full blur-xl"></div>
        <div className="scroll-parallax-fast absolute bottom-1/3 left-1/2 w-40 h-40 bg-red-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Enhanced Background Animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent animate-pulse"></div>
      </div>

      {/* Services Grid */}
      <section className="py-20 sm:py-32 relative bg-white dark:bg-[#1e1e1e] transition-colors duration-300 grid-pattern overflow-hidden">
        {/* Scroll-triggered fade elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent opacity-0 scroll-fade-in"></div>
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fadeUp" className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              What We Offer
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              From concept to completion, we provide end-to-end solutions that drive growth and innovation.
            </p>
          </AnimatedSection>

          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 ease-out ${
                  visibleItems.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={`bg-white dark:bg-[#2a2a2a] rounded-3xl p-8 sm:p-10 shadow-xl transition-all duration-500 border-2 hover:shadow-2xl hover:shadow-red-500/20 hover:scale-105 hover:-rotate-1 ${
                  activeService === index 
                    ? 'border-red-500/50 shadow-2xl shadow-red-500/20 scale-105 -rotate-1' 
                    : 'border-transparent dark:shadow-black/50'
                }`}>
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      activeService === index 
                        ? 'bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/30' 
                        : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-red-50 dark:group-hover:bg-red-900/30'
                    }`}>
                      <service.icon className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-300 ${
                        activeService === index ? 'text-white' : 'text-gray-600 dark:text-gray-300 group-hover:text-red-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-red-600 dark:text-red-400 font-semibold mb-4 transition-colors duration-300">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg transition-colors duration-300">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-600 transition-colors duration-300">
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">{service.pricing}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">{service.timeline}</p>
                    </div>
                    <a 
                      href={service.formLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2 no-underline"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-32 relative bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300 waves-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fadeUp" className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Why Choose BoldTribe?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              We combine creative excellence with technical expertise to deliver solutions that exceed expectations.
            </p>
          </AnimatedSection>

          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ease-out ${
                  visibleFeatures.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-105 dark:shadow-black/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-32 relative bg-white dark:bg-[#1e1e1e] transition-colors duration-300 dots-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fadeUp" className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Our Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              A proven methodology that ensures exceptional results and seamless project delivery.
            </p>
          </AnimatedSection>

          <div ref={processRef} className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500/30 to-red-600/20 rounded-full hidden lg:block"></div>

            <div className="space-y-16 lg:space-y-24">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ease-out ${
                    visibleProcess.has(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  <div className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                      <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-105 dark:shadow-black/50">
                        <div className="flex items-center mb-4">
                          <span className="text-4xl font-bold text-red-600/20 mr-4">{step.number}</span>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors duration-300">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/12 flex justify-center mb-8 lg:mb-0">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-xl shadow-red-500/30 border-4 border-white dark:border-[#1e1e1e]">
                        <span className="text-white font-bold text-xl lg:text-2xl">{index + 1}</span>
                      </div>
                    </div>

                    <div className="hidden lg:block lg:w-5/12"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 overflow-hidden zigzag-pattern">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can transform your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;