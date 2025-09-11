import React, { useState } from 'react';
import { ArrowDown, Users, Target, Heart, Award, Lightbulb, Shield, Zap, CheckCircle, Star, Quote, Github, Linkedin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface TeamMember {
  name: string;
  role: string;
  essence: string;
  image: string;
  quote: string;
  social: {
    github?: string;
    linkedin?: string;
  };
}

const AboutPage = () => {
  const [statsRef, visibleStats] = useStaggeredAnimation(3, 200);
  const [valuesRef, visibleValues] = useStaggeredAnimation(4, 150);
  const [leadershipRef, visibleLeadership] = useStaggeredAnimation(2, 150);
  const [teamRef, visibleTeam] = useStaggeredAnimation(6, 100);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const stats = [
    { number: '10+', label: 'Projects Completed', description: 'Successfully delivered projects across various industries' },
    { number: '150+', label: 'Satisfied Clients', description: 'Happy clients who trust us with their digital transformation' },
    { number: '50+', label: 'Industry Awards', description: 'Recognition for excellence in design and development' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of the curve, embracing cutting-edge technologies and creative solutions that push boundaries.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of partnership, working closely with clients to understand and exceed their vision.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous testing and quality control to ensure flawless execution and performance.'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'Our team is fueled by passion for creating exceptional digital experiences that make a lasting impact.'
    }
  ];

  const leadership: TeamMember[] = [
    {
      name: 'Abhinab Tripathy',
      role: 'Creative Director',
      essence: 'Visionary',
      image: '/team/Abhinab.jpg',
      quote: 'Transforming ideas into impactful digital experiences.',
      social: { linkedin: 'https://www.linkedin.com/in/abhinab-tripathy-b0936b268/' },
    },
    {
      name: 'Sivasish Bebartta',
      role: 'Mentor',
      essence: 'Guide',
      image: '/team/Sivashis.jpg',
      quote: 'Empowering teams to achieve their full potential.',
      social: { linkedin: 'https://www.linkedin.com/in/sivasish/' },
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: 'Rajesh Kumar Pattnaik',
      role: 'Application Developer',
      essence: 'Developer',
      image: '/team/Rajesh .jpg',
      quote: 'Building robust and scalable applications.',
      social: { linkedin: 'https://www.linkedin.com/in/rajesh-kumar-pattanaik-032b64243/' },
    },
    {
      name: 'Suvendu Kumar Rath',
      role: 'Technical Project Coordinator',
      essence: 'Organizer',
      image: '/team/Suvendu.jpg',
      quote: 'Bridging the gap between ideas and execution.',
      social: {},
    },
    {
      name: 'Manoranjan Basantia',
      role: 'Backend Developer',
      essence: 'Architect',
      image: '/team/Manoranjan.jpg',
      quote: 'Crafting powerful server-side solutions.',
      social: { linkedin: 'https://www.linkedin.com/in/manoranjanbasantia/' },
    },
    {
      name: 'Arpita Singh',
      role: 'Web Developer',
      essence: 'Creator',
      image: '/team/Arpita.jpg',
      quote: 'Building beautiful and functional web experiences.',
      social: {},
    },
    {
      name: 'Shriyansh Dash',
      role: 'Creative Associate',
      essence: 'Designer',
      image: '/team/Shriyansh.jpg',
      quote: 'Blending creativity with functionality.',
      social: {
        linkedin: 'https://www.linkedin.com/in/shriyanshdash/',
        github: 'https://github.com/shrixtacy',
      },
    },
    {
      name: 'Jayshree Padhi',
      role: 'Content Creator Intern',
      essence: 'Storyteller',
      image: '/team/Jayshree.jpg',
      quote: 'Crafting compelling narratives for digital spaces.',
      social: { linkedin: 'https://www.linkedin.com/in/jayshree-padhi-7b05b5280/' },
    },
  ];

  const renderTeamMember = (member: TeamMember, index: number, isLeadership: boolean) => {
    const memberIndex = isLeadership ? index : index + leadership.length;
    const isHovered = hoveredMember === memberIndex;

    return (
      <div
        key={`team-${index}`}
        className="group relative transition-all duration-700 ease-out w-full"
        onMouseEnter={() => setHoveredMember(memberIndex)}
        onMouseLeave={() => setHoveredMember(null)}
      >
        <div
          className={`bg-white dark:bg-[#2a2a2a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-500 cursor-pointer border-2 h-full ${
            isHovered
              ? 'border-red-500/50 shadow-2xl shadow-red-500/20 scale-105 -rotate-1 sm:-rotate-2'
              : 'border-transparent dark:shadow-black/50'
          }`}>
          <div className="text-center">
            <div className="relative mb-4 sm:mb-6">
              <img src={member.image} alt={member.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-800 shadow-lg" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {member.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              {member.role}
            </p>

            <div
              className={`inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 transition-all duration-300 ${
                isHovered
                  ? 'bg-gradient-to-br from-red-500 to-red-600 text-white'
                  : 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
              }`}>
              {member.essence}
            </div>

            <div className={`transition-all duration-500 overflow-hidden ${isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 italic mb-3 sm:mb-4">
                "{member.quote}"
              </p>
            </div>

            <div className={`flex justify-center space-x-4 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0 h-0'}`}>
              {member.social.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#1a1a1a] dark:via-[#1e1e1e] dark:to-[#2a2a2a] overflow-hidden transition-colors duration-300">
        {/* Curved Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-red-600/10 to-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          {/* Spiral Pattern Inspired by Screenshot */}
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/30 to-gray-300/20 dark:from-gray-700/20 dark:to-gray-600/10 rounded-full blur-sm transition-colors duration-300"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-gray-100/40 to-gray-200/30 dark:from-gray-600/15 dark:to-gray-500/10 rounded-full blur-sm transition-colors duration-300"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-white/50 to-gray-100/40 dark:from-gray-500/10 dark:to-gray-400/5 rounded-full blur-sm transition-colors duration-300"></div>
              <div className="absolute inset-12 bg-gradient-to-br from-gray-50/60 to-white/50 dark:from-gray-400/5 dark:to-gray-300/5 rounded-full blur-sm transition-colors duration-300"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 sm:space-y-8">
              <AnimatedSection animation="fadeUp">
                <div className="inline-flex items-center gap-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-colors duration-300">
                  <Star className="w-4 h-4" />
                  About BoldTribe
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight transition-colors duration-300">
                  Our Story, Vision,
                  <span className="block text-red-600 dark:text-red-400">and Values</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={400}>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl transition-colors duration-300">
                  Learn about our commitment to excellence, innovation, and the principles that guide our work every day.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={600}>
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center animate-bounce">
                    <ArrowDown className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 font-medium transition-colors duration-300">Scroll to explore our journey</span>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Visual Element */}
            <AnimatedSection animation="slideLeft" delay={400} className="relative">
              <div className="bg-white dark:bg-[#2a2a2a] rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 dark:shadow-black/50">
                <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/10 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">B</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold transition-colors duration-300">Crafting Digital Excellence</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">Since 2019</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                  Transforming visions into digital realities with passion and precision.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-32 relative bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300 waves-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Quote */}
            <AnimatedSection animation="slideRight" className="relative">
              <div className="bg-white dark:bg-[#2a2a2a] rounded-3xl p-8 sm:p-12 shadow-xl transform -rotate-1 hover:rotate-0 transition-all duration-300 dark:shadow-black/50">
                <Quote className="w-12 h-12 text-red-600 dark:text-red-400 mb-6" />
                <blockquote className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 transition-colors duration-300">
                  "Our team of experts works tirelessly to bring your vision to life, ensuring every project we undertake not only meets but exceeds expectations. We are dedicated to transforming your ideas into impactful digital experiences that resonate with your audience and drive success."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">Alex Rivera</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">Founder & CEO</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column - About Us Card */}
            <AnimatedSection animation="slideLeft" delay={200}>
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8" />
                  <span className="text-red-100 font-semibold">ABOUT US</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                  We believe in the power of collaboration and creativity
                </h3>
                
                <p className="text-red-100 leading-relaxed mb-8">
                  By partnering closely with our clients, we gain a deep understanding of their unique needs and goals, allowing us to deliver customized solutions that truly make a difference. Our holistic approach integrates design, technology, and strategy to create seamless and engaging digital experiences.
                </p>
                
                <p className="text-red-100 leading-relaxed">
                  By staying ahead of the curve and embracing the latest trends and technologies, we ensure that we provide cutting-edge solutions that not only address current challenges but also anticipate future opportunities. Let us help you navigate the digital landscape and achieve your business objectives with flair.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-32 relative bg-white dark:bg-[#1e1e1e] transition-colors duration-300 dots-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fadeUp" className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Our Impact in Numbers
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              These numbers represent our commitment to excellence and the trust our clients place in us.
            </p>
          </AnimatedSection>

          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ease-out ${
                  visibleStats.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-white dark:bg-[#2a2a2a] rounded-3xl p-8 sm:p-12 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-600 dark:shadow-black/50">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-600 dark:text-red-400 mb-4">
                    {stat.number}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-32 relative bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300 hexagon-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fadeUp" className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              The principles that drive everything we do and shape our approach to every project.
            </p>
          </AnimatedSection>

          <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 ease-out ${
                  visibleValues.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-105 text-center dark:shadow-black/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Tribe Section */}
      <section id="team" className="relative bg-gray-50 dark:bg-[#1a1a1a] overflow-hidden transition-colors duration-300 waves-pattern">
        <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-gray-50 dark:bg-[#1a1a1a] rounded-b-[50px] sm:rounded-b-[100px] transition-colors duration-300"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-48 sm:h-64 lg:h-96 bg-white dark:bg-[#1e1e1e] rounded-tl-[100px] sm:rounded-tl-[200px] transition-colors duration-300"></div>
        
        <div className="container mx-auto px-4 sm:px-6 pt-28 sm:pt-40 pb-20 sm:pb-32 relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
              Meet The Tribe
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              The passionate individuals behind BoldTribe's success
            </p>
          </AnimatedSection>

          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
              Leadership
            </h3>
            <div ref={leadershipRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leadership.map((member, index) => (
                <div
                  key={`leadership-${index}`}
                  className={`transition-all duration-500 ease-out ${
                    visibleLeadership.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {renderTeamMember(member, index, true)}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
              Our Team
            </h3>
            <div 
              ref={teamRef as React.RefObject<HTMLDivElement>} 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {teamMembers.map((member, index) => (
                <div
                  key={`team-member-${index}`}
                  className={`transition-all duration-500 ease-out ${
                    visibleTeam.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {renderTeamMember(member, index, false)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise and passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all duration-300 hover:shadow-xl hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;