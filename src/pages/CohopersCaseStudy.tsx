import React from 'react';
import CaseStudyTemplate from '../components/CaseStudyTemplate';

const CohopersCaseStudy = () => {
  const caseStudyData = {
    id: 2,
    title: 'Cohopers - Visitor Management App',
    client: 'Corporate Solutions Inc.',
    industry: 'Security & Management',
    challenge: 'Develop an intelligent visitor management system that streamlines check-in processes, enhances security, and provides digital visitor tracking with real-time monitoring capabilities. The system needed to integrate with existing security infrastructure, support multiple locations, and provide comprehensive reporting and analytics.',
    solution: 'Built a comprehensive visitor management platform with QR code integration for contactless check-in, digital visitor pre-registration system, real-time security monitoring dashboard, automated visitor notifications, and seamless integration with existing security systems. Implemented advanced security features including photo capture, ID verification, and visitor history tracking.',
    results: [
      '80% reduction in check-in time through automated QR code scanning',
      '100% digital visitor tracking eliminating paper-based systems',
      '90% improvement in security compliance with automated reporting',
      '60% reduction in administrative workload through automation',
      '95% visitor satisfaction rate with streamlined check-in process',
      '50% improvement in security response time with real-time monitoring'
    ],
    technologies: ['React', 'QR Code', 'Database', 'Security', 'Real-time Monitoring', 'Mobile Integration', 'Node.js', 'PostgreSQL', 'WebRTC', 'JWT Authentication'],
    duration: '4 months',
    team_size: 4,
    image: '/team/Screenshot 2025-09-11 100036.png',
    gallery: [
      '/team/Screenshot 2025-09-11 100036.png',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    testimonial: {
      quote: 'Cohopers has transformed our visitor management process. The digital tracking and security features have made our facility much more secure and efficient. The system is intuitive for both visitors and staff, and the real-time monitoring capabilities give us peace of mind.',
      author: 'Michael Chen',
      position: 'Security Manager, Corporate Solutions Inc.'
    },
    projectUrl: 'https://cohopers.com',
    githubUrl: 'https://github.com/boldtribe/cohopers'
  };

  return <CaseStudyTemplate data={caseStudyData} />;
};

export default CohopersCaseStudy;
