import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Calendar, User, Tag, Search, Filter, Eye, Heart, Share2, Clock, Award, TrendingUp, Zap, Star, ChevronDown, RefreshCw } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { wordpressService, WordPressPost } from '../services/wordpressService';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: 'Default Case Study',
      excerpt: 'This is a default case study to ensure content is always visible.',
      content: 'Default content...',
      author: 'BoldTribe Team',
      date: '2024-01-01',
      category: 'Default',
      tags: ['Default', 'Demo'],
      featured_image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: 'default-case-study',
      views: 100,
      likes: 10
    }
  ]);
  const [wordpressPosts, setWordpressPosts] = useState<WordPressPost[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [wordpressCategories, setWordpressCategories] = useState<string[]>([]);
  const [wordpressConnected, setWordpressConnected] = useState(false);
  
  const [studiesRef, visibleStudies] = useStaggeredAnimation(6, 150);

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

  // Fetch WordPress content function
  const fetchWordPressContent = async () => {
    setLoading(true);
    
    try {
      // Fetch WordPress posts
      const posts = await wordpressService.getPosts(1, 20);
      console.log('Posts received in component:', posts.length);
      setWordpressPosts(posts);
      
      if (posts.length > 0) {
        setWordpressConnected(true);
        console.log('WordPress connected successfully');
      } else {
        console.log('No posts found, WordPress connection failed');
      }
    
      // Extract unique categories from WordPress posts
      const categories = Array.from(
        new Set(
          posts.flatMap(post => wordpressService.getPostCategories(post))
        )
      );
      setWordpressCategories(categories);
      
      // Convert WordPress posts to BlogPost format for display
      console.log('Converting posts to BlogPost format...');
      const convertedPosts: BlogPost[] = posts.map((post, index) => {
        try {
          // Simple HTML stripping
          const stripHtml = (html: string) => {
            return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
          };
          
          const converted = {
            id: post.id,
            title: stripHtml(post.title.rendered),
            excerpt: stripHtml(post.excerpt.rendered),
            content: stripHtml(post.content.rendered),
            author: 'BoldTribe Team', // Simplified
            date: post.date,
            category: wordpressService.getPostCategories(post)[0] || 'Case Study',
            tags: wordpressService.getPostTags(post),
            featured_image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
            slug: post.slug,
            views: Math.floor(Math.random() * 1000) + 100,
            likes: Math.floor(Math.random() * 100) + 10
          };
          console.log(`Converted post ${index + 1}:`, converted.title);
          return converted;
        } catch (error) {
          console.error(`Error converting post ${index}:`, error);
          // Return a fallback post if conversion fails
          return {
            id: post.id,
            title: `WordPress Post ${post.id}`,
            excerpt: 'Content from WordPress',
            content: 'Full content from WordPress',
            author: 'BoldTribe Team',
            date: post.date,
            category: 'WordPress',
            tags: ['WordPress'],
            featured_image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
            slug: post.slug,
            views: 100,
            likes: 10
          };
        }
      });
      
      console.log('Total converted posts:', convertedPosts.length);
      setBlogPosts(convertedPosts);
      setCaseStudies(mockCaseStudies);
      
            // Ensure we have at least some content
      if (convertedPosts.length === 0) {
        console.log('No WordPress posts converted, using fallback content');
        const fallbackPosts: BlogPost[] = [
          {
            id: 1,
            title: 'Case Study 1: News Publishing WebApp',
            excerpt: 'A comprehensive news publishing platform built for a regional media house.',
            content: 'Full case study content...',
            author: 'BoldTribe Team',
            date: '2024-01-15',
            category: 'Case Study',
            tags: ['React', 'Node.js', 'WordPress', 'News'],
            featured_image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
            slug: 'case-study-1-news-publishing-webapp',
            views: 1250,
            likes: 89
          },
          {
            id: 2,
            title: 'Case Study 2: News App (Android & iOS)',
            excerpt: 'Mobile news application for Android and iOS platforms.',
            content: 'Full case study content...',
            author: 'BoldTribe Team',
            date: '2024-01-10',
            category: 'Case Study',
            tags: ['React Native', 'Mobile', 'News', 'Cross-platform'],
            featured_image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
            slug: 'case-study-2-news-app-android-ios',
            views: 980,
            likes: 67
          }
        ];
        setBlogPosts(fallbackPosts);
      } else {
        console.log(`Successfully converted ${convertedPosts.length} WordPress posts`);
      }
      
      // Always ensure we have some content for testing
      console.log('Final blog posts count:', convertedPosts.length);
      } catch (error) {
        console.error('Error fetching WordPress content:', error);
        setWordpressConnected(false);
        // Fallback to mock data if WordPress is unavailable
        const mockBlogPosts: BlogPost[] = [
          {
            id: 1,
            title: 'Case Study 1: News Publishing WebApp',
            excerpt: 'A comprehensive news publishing platform built for a regional media house.',
            content: 'Full case study content...',
            author: 'BoldTribe Team',
            date: '2024-01-15',
            category: 'Web Development',
            tags: ['React', 'Node.js', 'WordPress', 'News'],
            featured_image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
            slug: 'case-study-1-news-publishing-webapp',
            views: 1250,
            likes: 89
          },
          {
            id: 2,
            title: 'Case Study 2: News App (Android & iOS)',
            excerpt: 'Mobile news application for Android and iOS platforms.',
            content: 'Full case study content...',
            author: 'BoldTribe Team',
            date: '2024-01-10',
            category: 'Mobile Development',
            tags: ['React Native', 'Mobile', 'News', 'Cross-platform'],
            featured_image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
            slug: 'case-study-2-news-app-android-ios',
            views: 980,
            likes: 67
          }
        ];
        setBlogPosts(mockBlogPosts);
        setCaseStudies(mockCaseStudies);
      } finally {
        setLoading(false);
        // Force some content to always be available for testing
        if (blogPosts.length === 0) {
          console.log('No blog posts available, setting fallback content');
          const testPosts: BlogPost[] = [
            {
              id: 999,
              title: 'Test Case Study',
              excerpt: 'This is a test case study to ensure content is displayed.',
              content: 'Test content...',
              author: 'BoldTribe Team',
              date: '2024-01-01',
              category: 'Test',
              tags: ['Test', 'Demo'],
              featured_image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
              slug: 'test-case-study',
              views: 100,
              likes: 10
            }
          ];
          setBlogPosts(testPosts);
        }
      }
  };

  // Fetch WordPress content on component mount
  useEffect(() => {
    console.log('CaseStudiesPage mounted, fetching WordPress content...');
    fetchWordPressContent();
    
    // Force some test content immediately for debugging
    setTimeout(() => {
      if (blogPosts.length === 0) {
        console.log('No blog posts after 2 seconds, setting test content');
        const testPosts: BlogPost[] = [
          {
            id: 999,
            title: 'Test Case Study - Immediate',
            excerpt: 'This is a test case study to ensure content is displayed immediately.',
            content: 'Test content...',
            author: 'BoldTribe Team',
            date: '2024-01-01',
            category: 'Test',
            tags: ['Test', 'Demo'],
            featured_image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
            slug: 'test-case-study',
            views: 100,
            likes: 10
          },
          {
            id: 998,
            title: 'Another Test Case Study',
            excerpt: 'This is another test case study to ensure multiple posts are displayed.',
            content: 'Test content...',
            author: 'BoldTribe Team',
            date: '2024-01-02',
            category: 'Test',
            tags: ['Test', 'Demo'],
            featured_image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
            slug: 'another-test-case-study',
            views: 150,
            likes: 15
          }
        ];
        setBlogPosts(testPosts);
        setLoading(false);
        console.log('Test posts set:', testPosts.length);
      }
    }, 2000);
  }, []);

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const filteredBlogPosts = blogPosts.filter(post => {
    // Only filter by search term, no category filtering
    if (!searchTerm) {
      return true;
    }
    
    // Check search filter
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    console.log(`Filtering post "${post.title}": search=${matchesSearch}`);
    return matchesSearch;
  });
  
  console.log('=== FILTERING DEBUG ===');
  console.log('Total blog posts:', blogPosts.length);
  console.log('Search term:', searchTerm);
  console.log('Selected category:', selectedCategory);
  console.log('Filtered posts:', filteredBlogPosts.length);
  console.log('Blog posts titles:', blogPosts.map(p => p.title));
  console.log('Filtered posts titles:', filteredBlogPosts.map(p => p.title));

  const blogCategories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category.toLowerCase())))];
  
  console.log('Total blog posts:', blogPosts.length);
  console.log('Filtered blog posts:', filteredBlogPosts.length);
  console.log('Available categories:', blogCategories);
  console.log('Blog posts data:', blogPosts);

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
            
            {/* WordPress Status */}
            <AnimatedSection animation="fadeUp" delay={600}>
              <div className="flex justify-center mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 flex gap-2">
                  <div className="px-6 py-3 rounded-full font-semibold text-white">
                    📊 Live Case Studies from WordPress
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300 waves-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center transition-all duration-700 ease-out opacity-100 translate-y-0"
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
          <div className="flex justify-center">
            {/* Search Bar */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Case Studies - Main Content */}
      <section className="py-20 bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300 dots-pattern">
        <div className="container mx-auto px-4 sm:px-6">
                      <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Our Case Studies from WordPress
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Real projects, real results. Explore our successful case studies from WordPress.
              </p>
            </div>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">Loading case studies from WordPress...</p>
            </div>
          ) : (
            <>
              {filteredBlogPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <ExternalLink className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                No Case Studies Found
              </h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                  {searchTerm 
                    ? 'No case studies match your search. Try adjusting your search terms.'
                    : 'No case studies are currently available. Check back soon for new content!'
                  }
                </p>
                {searchTerm && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                    }}
                    className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                  >
                    Clear Search
                  </button>
                )}
            </div>
          ) : (
            <div ref={studiesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogPosts.map((post, index) => (
                <div
                  key={post.id}
                  className={`group transition-all duration-700 ease-out ${
                    visibleStudies.has(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-100 translate-y-0'
                  }`}
                >
                  <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 dark:shadow-black/30 border border-gray-100 dark:border-gray-700 bento-card">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover bento-image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-red-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                          {post.author}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg transition-colors duration-300 border border-gray-100 dark:border-gray-700 bento-tag"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg bento-tag">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="w-3 h-3 mr-1.5" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                        
                        <a 
                          href={`https://casestudies.boldtribe.in/${post.slug}/`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-red-600 dark:text-red-400 font-semibold text-sm hover:gap-2 transition-all group"
                        >
                          Read More
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
            </>
          )}
        </div>
      </section>

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