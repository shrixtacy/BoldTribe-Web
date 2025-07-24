import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, ZoomIn, ArrowLeft, ArrowRight, Eye, Heart, Download } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface Photo {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
  likes: number;
  views: number;
}

const GalleryPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [heroRef, visibleHero] = useStaggeredAnimation(3, 200);

  // Gallery photos with high-quality images
  const photos: Photo[] = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Web Design',
      category: 'Web Development',
      description: 'Sleek and modern web interface design',
      likes: 124,
      views: 2340
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'AI Dashboard',
      category: 'AI Automation',
      description: 'Intelligent dashboard with AI analytics',
      likes: 89,
      views: 1890
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Brand Identity',
      category: 'Brand Design',
      description: 'Complete brand identity package',
      likes: 156,
      views: 3210
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Blockchain Platform',
      category: 'Blockchain',
      description: 'Decentralized trading platform',
      likes: 203,
      views: 4560
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mobile App UI',
      category: 'Mobile Development',
      description: 'Beautiful mobile application interface',
      likes: 178,
      views: 2890
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Product Design',
      category: 'Product Design',
      description: 'User-centered product design',
      likes: 134,
      views: 2100
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Healthcare App',
      category: 'Mobile Development',
      description: 'Healthcare management application',
      likes: 167,
      views: 3450
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'E-learning Platform',
      category: 'Web Development',
      description: 'Interactive learning platform',
      likes: 145,
      views: 2670
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Analytics Dashboard',
      category: 'AI Automation',
      description: 'Real-time analytics dashboard',
      likes: 189,
      views: 3890
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Creative Portfolio',
      category: 'Brand Design',
      description: 'Creative portfolio website',
      likes: 212,
      views: 4120
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tech Startup',
      category: 'Web Development',
      description: 'Modern startup website',
      likes: 98,
      views: 1780
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Smart City App',
      category: 'Mobile Development',
      description: 'Smart city management app',
      likes: 176,
      views: 3210
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = 2; // Pixels to scroll
        
        // Diagonal scrolling effect
        container.scrollLeft += scrollAmount;
        container.scrollTop += scrollAmount * 0.5;
        
        // Reset scroll when reaching the end
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
          container.scrollTop = 0;
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    setCurrentImageIndex(photos.findIndex(p => p.id === photo.id));
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % photos.length;
    setCurrentImageIndex(nextIndex);
    setSelectedPhoto(photos[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + photos.length) % photos.length;
    setCurrentImageIndex(prevIndex);
    setSelectedPhoto(photos[prevIndex]);
  };

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-[#1e1e1e] overflow-hidden grid-pattern transition-colors duration-300">
        {/* Red Corner Design Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top Right Corner Design */}
          <div className="absolute top-0 right-0 w-96 h-96 sm:w-[500px] sm:h-[500px]">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-red-500/40 via-red-600/25 to-transparent rounded-bl-full"></div>
            <div className="absolute top-4 right-4 w-20 h-20 bg-red-500 rounded-full"></div>
            <div className="absolute top-12 right-32 w-12 h-12 bg-red-600 rounded-full"></div>
            <div className="absolute top-24 right-16 w-8 h-8 bg-red-400 rounded-full"></div>
          </div>
          
          {/* Bottom Left Corner Design */}
          <div className="absolute bottom-0 left-0 w-80 h-80 sm:w-96 sm:h-96">
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-red-500/35 via-red-600/20 to-transparent rounded-tr-full"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-16 left-24 w-10 h-10 bg-red-600 rounded-full"></div>
            <div className="absolute bottom-8 left-32 w-6 h-6 bg-red-400 rounded-full"></div>
          </div>
          

        </div>

        <div className="container mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-32 relative z-10">
          <div className="text-center text-gray-900 dark:text-white max-w-5xl mx-auto transition-colors duration-300">
            <AnimatedSection animation="fadeUp">
              <div className="inline-flex items-center gap-3 bg-red-50 dark:bg-red-900/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-red-200 dark:border-red-800/30 transition-colors duration-300">
                <Eye className="w-5 h-5 text-red-600 dark:text-red-400" />
                <span className="font-medium text-red-700 dark:text-red-300 transition-colors duration-300">Visual Showcase</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={200}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Our Creative
                <span className="block bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                  Gallery
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={400}>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 transition-colors duration-300">
                Explore our portfolio of stunning designs, innovative solutions, and creative masterpieces.
              </p>
            </AnimatedSection>
            
            <div ref={heroRef} className="flex flex-wrap justify-center items-center gap-6 text-gray-600 dark:text-gray-300 transition-colors duration-300">
              {[
                { icon: Eye, label: '10K+ Views', index: 0 },
                { icon: Heart, label: '2K+ Likes', index: 1 },
                { icon: Download, label: '500+ Downloads', index: 2 }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 transition-all duration-700 ease-out ${
                    visibleHero.has(stat.index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <stat.icon className="w-5 h-5" />
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="py-8 bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={toggleAutoScroll}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                isAutoScrolling
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {isAutoScrolling ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isAutoScrolling ? 'Pause Auto-Scroll' : 'Start Auto-Scroll'}
            </button>
          </div>
        </div>
      </section>

      {/* Animated Scrolling Gallery */}
      <section className="py-20 relative bg-white dark:bg-[#1e1e1e] transition-colors duration-300 overflow-hidden dots-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/3 via-red-600/2 to-red-400/3"></div>
        
        <div
          ref={scrollContainerRef}
          className="relative overflow-hidden h-[600px] sm:h-[800px] lg:h-[1000px]"
          style={{
            maskImage: 'linear-gradient(45deg, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(45deg, transparent 0%, black 10%, black 90%, transparent 100%)'
          }}
        >
          <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 p-8 transform rotate-12 scale-150">
            {[...photos, ...photos, ...photos].map((photo, index) => (
              <div
                key={`${photo.id}-${index}`}
                className="group relative cursor-pointer transform hover:scale-110 hover:rotate-3 transition-all duration-500 hover:z-10"
                onClick={() => openLightbox(photo)}
                style={{
                  transform: `rotate(${(index % 4) * 5 - 10}deg) translateY(${(index % 3) * 20}px)`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white dark:bg-gray-800 p-2">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-xl transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-2 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-bold text-sm sm:text-base mb-1">{photo.title}</h3>
                      <p className="text-xs text-gray-300">{photo.category}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs">
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {photo.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {photo.views}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedPhoto.title}</h2>
                <p className="text-gray-300 mb-3">{selectedPhoto.description}</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">
                    {selectedPhoto.category}
                  </span>
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {selectedPhoto.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {selectedPhoto.views}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 relative bg-white dark:bg-[#1e1e1e] overflow-hidden waves-pattern transition-colors duration-300">
        {/* Red Corner Design Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top Right Corner Design */}
          <div className="absolute top-0 right-0 w-80 h-80 sm:w-96 sm:h-96">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-red-500/30 via-red-600/18 to-transparent rounded-bl-full"></div>
            <div className="absolute top-4 right-4 w-16 h-16 bg-red-500 rounded-full"></div>
            <div className="absolute top-12 right-24 w-10 h-10 bg-red-600 rounded-full"></div>
            <div className="absolute top-20 right-12 w-6 h-6 bg-red-400 rounded-full"></div>
          </div>
          
          {/* Bottom Left Corner Design */}
          <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-80 sm:h-80">
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-red-500/25 via-red-600/15 to-transparent rounded-tr-full"></div>
            <div className="absolute bottom-4 left-4 w-14 h-14 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-12 left-20 w-8 h-8 bg-red-600 rounded-full"></div>
            <div className="absolute bottom-6 left-28 w-5 h-5 bg-red-400 rounded-full"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center text-gray-900 dark:text-white transition-colors duration-300">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-300">
              Let's bring your vision to life with our creative expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-red-200 dark:border-red-800/30 text-red-600 dark:text-red-400 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300">
                View More Work
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;