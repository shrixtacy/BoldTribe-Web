import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Calendar, User, Tag, Search, Filter, Eye, Heart, Share2, Clock, Award, TrendingUp, Zap, Star, ChevronDown } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featured_image: string;
  slug: string;
  views: number;
  likes: number;
}

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  team_size: number;
  image: string;
  gallery: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const CaseStudiesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'case-studies' | 'blog'>('case-studies');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const [studiesRef, visibleStudies] = useStaggeredAnimation(6, 150);
  const [blogRef, visibleBlogs] = useStaggeredAnimation(6, 150);
  const [featuresRef, visibleFeatures] = useStaggeredAnimation(4, 100);

  // Mock case studies data
  const mockCaseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'FinTech Revolution Platform',
      client: 'TechVision Inc.',
      industry: 'Financial Technology',
      challenge: 'Create a comprehensive financial platform that revolutionizes investment tracking and market analysis.',
      solution: 'Built a scalable web application with real-time data processing, AI-powered insights, and intuitive user interface.',
      results: ['300% increase in user engagement', '150% faster transaction processing', '95% user satisfaction rate'],
      technologies: ['React', 'Node.js', 'AI/ML', 'Blockchain', 'WebSocket'],
      duration: '8 months',
      team_size: 6,
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      testimonial: {
        quote: 'BoldTribe delivered beyond our expectations. The platform has transformed our business.',
        author: 'Robert Johnson',
        position: 'CEO, TechVision Inc.'
      }
    },
    {
      id: 2,
      title: 'EcoSmart Cities Platform',
      client: 'GreenTech Solutions',
      industry: 'Smart Cities',
      challenge: 'Develop an IoT platform connecting smart city infrastructure with citizen engagement.',
      solution: 'Created a comprehensive mobile and web platform with real-time monitoring and citizen interaction features.',
      results: ['40% reduction in energy consumption', '200% increase in citizen engagement', '85% operational efficiency improvement'],
      technologies: ['React Native', 'IoT', 'Data Analytics', 'Cloud Computing'],
      duration: '10 months',
      team_size: 8,
      image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      id: 3,
      title: 'MetaVerse Commerce Hub',
      client: 'Digital Innovations Ltd.',
      industry: 'E-commerce',
      challenge: 'Build a decentralized marketplace for virtual asset trading in the metaverse.',
      solution: 'Developed a blockchain-based platform with NFT integration and virtual reality shopping experience.',
      results: ['500% increase in virtual sales', '120% user retention rate', '90% transaction success rate'],
      technologies: ['Web3', 'Solidity', 'React', 'IPFS', 'VR'],
      duration: '12 months',
      team_size: 10,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      id: 4,
      title: 'HealthTech AI Assistant',
      client: 'MedCare Systems',
      industry: 'Healthcare',
      challenge: 'Create an AI-powered healthcare assistant for patient monitoring and diagnosis support.',
      solution: 'Built an intelligent system with machine learning algorithms for health data analysis and recommendations.',
      results: ['60% faster diagnosis time', '95% accuracy in health predictions', '80% reduction in manual work'],
      technologies: ['Python', 'TensorFlow', 'React', 'Cloud AI', 'IoT'],
      duration: '14 months',
      team_size: 12,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      id: 5,
      title: 'EdTech Learning Platform',
      client: 'Future Learning Co.',
      industry: 'Education',
      challenge: 'Develop an interactive online learning platform with personalized education paths.',
      solution: 'Created a comprehensive LMS with AI-driven personalization and interactive content delivery.',
      results: ['250% increase in student engagement', '90% course completion rate', '85% knowledge retention improvement'],
      technologies: ['React', 'Node.js', 'AI/ML', 'Video Streaming', 'Analytics'],
      duration: '9 months',
      team_size: 7,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      id: 6,
      title: 'RetailTech Analytics Suite',
      client: 'Retail Dynamics',
      industry: 'Retail',
      challenge: 'Build a comprehensive analytics platform for retail performance optimization.',
      solution: 'Developed a data-driven platform with real-time analytics, inventory management, and customer insights.',
      results: ['180% improvement in inventory turnover', '65% increase in customer satisfaction', '45% boost in sales performance'],
      technologies: ['React', 'Python', 'Big Data', 'Machine Learning', 'Cloud'],
      duration: '11 months',
      team_size: 9,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    }
  ];

  const categories = ['all', 'fintech', 'healthcare', 'e-commerce', 'education', 'smart-cities', 'retail'];
  const industries = ['All', 'Financial Technology', 'Healthcare', 'E-commerce', 'Education', 'Smart Cities', 'Retail'];

  const features = [
    {
      icon: Award,
      title: 'Award-Winning Projects',
      description: 'Our case studies showcase industry-recognized excellence'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Measurable outcomes that drive business growth'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tech',
      description: 'Latest technologies and innovative solutions'
    },
    {
      icon: Star,
      title: 'Client Success',
      description: '100% client satisfaction across all projects'
    }
  ];

  // Simulate WordPress API call
  useEffect(() => {
    const fetchWordPressContent = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock WordPress blog posts
      const mockBlogPosts: BlogPost[] = [
        {
          id: 1,
          title: 'The Future of Web Development: Trends to Watch in 2024',
          excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
          content: 'Full blog content would come from WordPress...',
          author: 'Alex Rivera',
          date: '2024-01-15',
          category: 'Web Development',
          tags: ['React', 'AI', 'PWA', 'Future Tech'],
          featured_image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
          slug: 'future-web-development-trends-2024',
          views: 1250,
          likes: 89
        },
        {
          id: 2,
          title: 'Building Scalable Applications with Modern Architecture',
          excerpt: 'Learn how to design and build applications that can scale with your business growth using modern architectural patterns.',
          content: 'Full blog content would come from WordPress...',
          author: 'Sarah Chen',
          date: '2024-01-10',
          category: 'Architecture',
          tags: ['Scalability', 'Microservices', 'Cloud', 'Architecture'],
          featured_image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
          slug: 'scalable-applications-modern-architecture',
          views: 980,
          likes: 67
        },
        {
          id: 3,
          title: 'AI Integration in Business: A Practical Guide',
          excerpt: 'Discover practical ways to integrate AI into your business processes for improved efficiency and innovation.',
          content: 'Full blog content would come from WordPress...',
          author: 'Marcus Thompson',
          date: '2024-01-05',
          category: 'AI & Machine Learning',
          tags: ['AI', 'Business', 'Automation', 'Innovation'],
          featured_image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
          slug: 'ai-integration-business-practical-guide',
          views: 1450,
          likes: 112
        },
        {
          id: 4,
          title: 'Design Systems: Creating Consistency at Scale',
          excerpt: 'Learn how to build and maintain design systems that ensure consistency across large-scale applications.',
          content: 'Full blog content would come from WordPress...',
          author: 'Alex Rivera',
          date: '2023-12-28',
          category: 'Design',
          tags: ['Design Systems', 'UI/UX', 'Consistency', 'Scale'],
          featured_image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
          slug: 'design-systems-consistency-scale',
          views: 875,
          likes: 54
        },
        {
          id: 5,
          title: 'Blockchain Beyond Cryptocurrency: Real-World Applications',
          excerpt: 'Explore how blockchain technology is being used beyond cryptocurrency in various industries.',
          content: 'Full blog content would come from WordPress...',
          author: 'Sarah Chen',
          date: '2023-12-20',
          category: 'Blockchain',
          tags: ['Blockchain', 'Web3', 'Innovation', 'Technology'],
          featured_image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600',
          slug: 'blockchain-beyond-cryptocurrency-applications',
          views: 1120,
          likes: 78
        },
        {
          id: 6,
          title: 'Mobile-First Development: Best Practices for 2024',
          excerpt: 'Master mobile-first development with the latest best practices and techniques for creating responsive applications.',
          content: 'Full blog content would come from WordPress...',
          author: 'Marcus Thompson',
          date: '2023-12-15',
          category: 'Mobile Development',
          tags: ['Mobile', 'Responsive', 'Best Practices', 'Development'],
          featured_image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
          slug: 'mobile-first-development-best-practices-2024',
          views: 1340,
          likes: 95
        }
      ];

      setBlogPosts(mockBlogPosts);
      setCaseStudies(mockCaseStudies);
      setLoading(false);
    };

    fetchWordPressContent();
  }, []);

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesFilter = activeFilter === 'all' || study.industry.toLowerCase().includes(activeFilter);
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filteredBlogPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase().includes(selectedCategory);
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const blogCategories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category.toLowerCase())))];

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
            <Award className="w-8 h-8 text-white/20" />
          </div>
          <div className="absolute top-3/4 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
            <TrendingUp className="w-6 h-6 text-white/15" />
          </div>
          <div className="absolute bottom-1/3 left-1/2 animate-float" style={{ animationDelay: '2s' }}>
            <Star className="w-10 h-10 text-white/10" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-32 relative z-10">
          <div className="text-center text-white max-w-5xl mx-auto">
            <AnimatedSection animation="fadeUp">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <Eye className="w-5 h-5" />
                <span className="font-medium">Our Work & Insights</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={200}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Case Studies
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  & Blog
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={400}>
              <p className="text-xl sm:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed mb-8">
                Explore our successful projects and stay updated with the latest insights in technology and design.
              </p>
            </AnimatedSection>
            
            {/* Tab Navigation */}
            <AnimatedSection animation="fadeUp" delay={600}>
              <div className="flex justify-center mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 flex gap-2">
                  <button
                    onClick={() => setActiveTab('case-studies')}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === 'case-studies'
                        ? 'bg-white text-red-600 shadow-lg'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Case Studies
                  </button>
                  <button
                    onClick={() => setActiveTab('blog')}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === 'blog'
                        ? 'bg-white text-red-600 shadow-lg'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Blog Posts
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300 waves-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ease-out ${
                  visibleFeatures.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-105 dark:shadow-black/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={`Search ${activeTab === 'case-studies' ? 'case studies' : 'blog posts'}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-100"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
              <select
                value={activeTab === 'case-studies' ? activeFilter : selectedCategory}
                onChange={(e) => activeTab === 'case-studies' ? setActiveFilter(e.target.value) : setSelectedCategory(e.target.value)}
                className="appearance-none bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 pr-10 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all text-gray-900 dark:text-gray-100"
              >
                {activeTab === 'case-studies' ? (
                  <>
                    <option value="all">All Industries</option>
                    {industries.slice(1).map(industry => (
                      <option key={industry} value={industry.toLowerCase()}>
                        {industry}
                      </option>
                    ))}
                  </>
                ) : (
                  <>
                    <option value="all">All Categories</option>
                    {blogCategories.slice(1).map(category => (
                      <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </>
                )}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      {loading ? (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300">Loading content from WordPress...</p>
              </div>
            </div>
          </div>
        </section>
      ) : activeTab === 'case-studies' ? (
        /* Case Studies Grid */
        <section className="py-20 bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300 dots-pattern">
          <div className="container mx-auto px-4 sm:px-6">
            <div ref={studiesRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className={`group transition-all duration-700 ease-out ${
                    visibleStudies.has(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="bg-white dark:bg-[#2a2a2a] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-105 hover:-rotate-1 dark:shadow-black/50">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {study.industry}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-red-600 dark:text-red-400 font-semibold mb-4 transition-colors duration-300">
                        {study.client}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                        {study.challenge}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Results Preview */}
                      <div className="space-y-2 mb-6">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                            <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <button className="flex items-center gap-2 text-red-600 dark:text-red-400 font-semibold hover:gap-3 transition-all group">
                        View Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Blog Posts Grid */
        <section className="py-20 bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300 hexagon-pattern">
          <div className="container mx-auto px-4 sm:px-6">
            <div ref={blogRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogPosts.map((post, index) => (
                <div
                  key={post.id}
                  className={`group transition-all duration-700 ease-out ${
                    visibleBlogs.has(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-105 dark:shadow-black/50">
                    {/* Featured Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 transition-colors duration-300">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-300">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded transition-colors duration-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-600 transition-colors duration-300">
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {post.likes}
                          </div>
                        </div>
                        <button className="flex items-center gap-1 text-red-600 dark:text-red-400 font-semibold hover:gap-2 transition-all">
                          Read More
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 overflow-hidden circuit-pattern">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all duration-300 hover:shadow-xl hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                View All Case Studies
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;