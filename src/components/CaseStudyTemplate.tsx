import React from 'react';
import { ArrowLeft, ExternalLink, Clock, Users, CheckCircle, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

interface CaseStudyData {
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
  projectUrl?: string;
  githubUrl?: string;
}

interface CaseStudyTemplateProps {
  data: CaseStudyData;
  backUrl?: string;
}

const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({ data, backUrl = '/case-studies' }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-32 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeUp">
              <Link 
                to={backUrl}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Case Studies
              </Link>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={200}>
              <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                {data.industry}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={400}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {data.title}
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={600}>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                <strong>Client:</strong> {data.client}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={800}>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5" />
                  <span>{data.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5" />
                  <span>{data.team_size} team members</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slideRight">
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Project Overview
                  </h2>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Challenge</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {data.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Solution</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {data.solution}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideLeft">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-20 bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeUp" className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Key Results
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Measurable outcomes that demonstrate the success of this project
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.results.map((result, index) => (
                <AnimatedSection key={index} animation="fadeUp" delay={index * 100}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                        {result}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeUp" className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Technologies Used
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                The tech stack and tools that powered this successful project
              </p>
            </AnimatedSection>

            <div className="flex flex-wrap justify-center gap-4">
              {data.technologies.map((tech, index) => (
                <AnimatedSection key={index} animation="fadeUp" delay={index * 50}>
                  <span className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    {tech}
                  </span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {data.gallery.length > 1 && (
        <section className="py-20 bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection animation="fadeUp" className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Project Gallery
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Visual showcase of the project's key features and interface
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.gallery.map((image, index) => (
                  <AnimatedSection key={index} animation="fadeUp" delay={index * 100}>
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <img
                        src={image}
                        alt={`${data.title} gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Client Testimonial */}
      {data.testimonial && (
        <section className="py-20 bg-gray-50 dark:bg-[#1a1a1a] transition-colors duration-300">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fadeUp" className="text-center">
                <div className="bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-2xl">
                  <Quote className="w-12 h-12 text-red-500 mx-auto mb-6" />
                  <blockquote className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-8">
                    "{data.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {data.testimonial.author.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                        {data.testimonial.author}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {data.testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* Project Links */}
      {(data.projectUrl || data.githubUrl) && (
        <section className="py-20 bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection animation="fadeUp">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  Project Links
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {data.projectUrl && (
                    <a
                      href={data.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Project
                    </a>
                  )}
                  {data.githubUrl && (
                    <a
                      href={data.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View All Case Studies
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyTemplate;
