import React from 'react';
import CaseStudyTemplate from '../components/CaseStudyTemplate';

const NewztokCaseStudy = () => {
  const caseStudyData = {
    id: 1,
    title: 'Newztok - News Aggregator App',
    client: 'Media House Pvt. Ltd.',
    industry: 'Media & News',
    challenge: 'Create a comprehensive news aggregation platform that curates and delivers personalized news content from multiple sources with real-time updates and user engagement features. The challenge was to build a scalable solution that could handle high traffic, provide personalized content recommendations, and maintain fast loading times across different devices.',
    solution: 'Developed a cross-platform mobile application using React Native with AI-powered content curation, real-time news updates via WebSocket connections, personalized feeds based on user preferences and reading history, and seamless user experience across Android and iOS platforms. Implemented advanced caching mechanisms and optimized API calls for fast performance.',
    results: [
      '500% increase in user engagement through personalized content delivery',
      '300% faster news delivery with real-time updates and optimized caching',
      '95% user satisfaction rate based on app store reviews and user feedback',
      '200% increase in daily active users within the first 6 months',
      '80% reduction in app loading time through performance optimization',
      '150% increase in user retention rate with personalized recommendations'
    ],
    technologies: ['React Native', 'Node.js', 'AI/ML', 'Real-time APIs', 'Push Notifications', 'Content Management', 'WebSocket', 'Redis', 'MongoDB', 'AWS'],
    duration: '6 months',
    team_size: 5,
    image: '/team/Screenshot 2025-09-11 100059.png',
    gallery: [
      '/team/Screenshot 2025-09-11 100059.png',
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    testimonial: {
      quote: 'Newztok has revolutionized how we consume news. The personalized content delivery and real-time updates have significantly improved user engagement. The app\'s performance and user experience exceeded our expectations, and we\'ve seen remarkable growth in our user base.',
      author: 'Sarah Johnson',
      position: 'CEO, Media House Pvt. Ltd.'
    },
    projectUrl: 'https://newztok.app',
    githubUrl: 'https://github.com/boldtribe/newztok'
  };

  return <CaseStudyTemplate data={caseStudyData} />;
};

export default NewztokCaseStudy;
