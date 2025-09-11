import React from 'react';
import CaseStudyTemplate from '../components/CaseStudyTemplate';

const BoldeatsCaseStudy = () => {
  const caseStudyData = {
    id: 4,
    title: 'Boldeats - Tiffin Center Listing',
    client: 'Food Delivery Startup',
    industry: 'Food & Beverage',
    challenge: 'Build a food delivery platform specializing in tiffin services, connecting customers with local home-cooked meal providers and ensuring quality food delivery. The platform needed to handle vendor onboarding, quality assurance, location-based delivery, payment processing, and provide a seamless user experience for both customers and vendors.',
    solution: 'Created a specialized food delivery platform with comprehensive vendor onboarding system, quality assurance protocols with regular inspections, location-based delivery optimization, integrated payment system supporting multiple payment methods, real-time order tracking, customer review and rating system, and vendor management dashboard with analytics and reporting features.',
    results: [
      '400% increase in vendor registrations within the first year',
      '250% growth in customer base through targeted marketing',
      '95% customer satisfaction rate based on reviews and ratings',
      '180% increase in daily orders through improved user experience',
      '85% vendor retention rate with comprehensive support system',
      '70% reduction in delivery time through route optimization'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    duration: '5 months',
    team_size: 5,
    image: '/team/Screenshot 2025-09-11 095942.png',
    gallery: [
      '/team/Screenshot 2025-09-11 095942.png',
      'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    testimonial: {
      quote: 'Boldeats has revolutionized the tiffin delivery market. Our customers love the authentic home-cooked meals, and our vendors are thriving. The platform\'s user-friendly interface and quality assurance system have built trust in the market, leading to remarkable growth.',
      author: 'Priya Sharma',
      position: 'Founder, Food Delivery Startup'
    },
    projectUrl: 'https://boldeats.com',
    githubUrl: 'https://github.com/boldtribe/boldeats'
  };

  return <CaseStudyTemplate data={caseStudyData} />;
};

export default BoldeatsCaseStudy;
