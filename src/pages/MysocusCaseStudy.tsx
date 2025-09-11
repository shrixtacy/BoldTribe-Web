import React from 'react';
import CaseStudyTemplate from '../components/CaseStudyTemplate';

const MysocusCaseStudy = () => {
  const caseStudyData = {
    id: 3,
    title: 'Mysocus - Apartment Management App',
    client: 'Real Estate Developers',
    industry: 'Real Estate & Property Management',
    challenge: 'Create a complete apartment management solution that digitizes property management, tenant communication, maintenance workflows, and financial transactions. The system needed to handle multiple properties, support various payment methods, provide real-time communication between tenants and management, and streamline maintenance request processes.',
    solution: 'Developed a comprehensive property management platform with tenant portal for rent payments and maintenance requests, real-time chat system for instant communication, automated maintenance workflow management, integrated payment gateway supporting multiple payment methods, document management system for lease agreements and notices, and comprehensive reporting dashboard for property managers.',
    results: [
      '70% improvement in tenant satisfaction through streamlined communication',
      '85% reduction in maintenance response time with automated workflows',
      '100% digital payment processing eliminating cash transactions',
      '50% increase in operational efficiency through automation',
      '90% reduction in administrative paperwork with digital document management',
      '120% increase in on-time rent collection through automated reminders'
    ],
    technologies: ['React Native', 'Firebase', 'Payment Gateway', 'Cloud', 'Real-time Chat', 'Document Management', 'Node.js', 'Stripe API', 'WebRTC', 'Cloud Storage'],
    duration: '8 months',
    team_size: 6,
    image: '/team/Screenshot 2025-09-11 100014.png',
    gallery: [
      '/team/Screenshot 2025-09-11 100014.png',
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    testimonial: {
      quote: 'Mysocus has completely digitized our property management. The tenant satisfaction has improved dramatically, and our operations are now much more efficient. The automated maintenance system and real-time communication features have transformed how we manage our properties.',
      author: 'David Kumar',
      position: 'Property Manager, Real Estate Developers'
    },
    projectUrl: 'https://mysocus.com',
    githubUrl: 'https://github.com/boldtribe/mysocus'
  };

  return <CaseStudyTemplate data={caseStudyData} />;
};

export default MysocusCaseStudy;
