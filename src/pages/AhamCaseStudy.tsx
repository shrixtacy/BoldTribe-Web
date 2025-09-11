import React from 'react';
import CaseStudyTemplate from '../components/CaseStudyTemplate';

const AhamCaseStudy = () => {
  const caseStudyData = {
    id: 5,
    title: 'Aham - E-commerce & Kindle App',
    client: 'Digital Content Platform',
    industry: 'E-commerce & Digital Content',
    challenge: 'Develop an innovative e-commerce platform with digital content distribution, combining physical products with digital media sales and content management. The platform needed to handle both physical and digital product sales, provide seamless content consumption experience, support multiple content formats, and integrate with various payment and content delivery systems.',
    solution: 'Built a hybrid e-commerce platform with integrated digital content management system, e-book distribution with DRM protection, seamless payment processing for both physical and digital products, user-friendly content consumption interface with offline reading capabilities, comprehensive analytics dashboard for content creators, and automated content delivery system with CDN integration.',
    results: [
      '300% increase in digital content sales within the first year',
      '200% growth in user engagement through improved content discovery',
      '90% customer retention rate with personalized recommendations',
      '150% increase in average order value through cross-selling',
      '85% content creator satisfaction with comprehensive analytics',
      '120% improvement in content loading speed with CDN optimization'
    ],
    technologies: ['React', 'E-commerce', 'Digital Content', 'Payment Gateway', 'Content Management', 'User Analytics', 'Node.js', 'DRM', 'CDN', 'MongoDB'],
    duration: '7 months',
    team_size: 6,
    image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    testimonial: {
      quote: 'Aham has created a unique marketplace for both physical and digital products. The seamless integration has significantly boosted our sales and user engagement. The platform\'s content management system and analytics have empowered our content creators to reach wider audiences.',
      author: 'Alex Rodriguez',
      position: 'CEO, Digital Content Platform'
    },
    projectUrl: 'https://aham.com',
    githubUrl: 'https://github.com/boldtribe/aham'
  };

  return <CaseStudyTemplate data={caseStudyData} />;
};

export default AhamCaseStudy;
