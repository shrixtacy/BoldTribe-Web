import React from 'react';
import { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Preloader from './components/Preloader';
import ResourceHints from './components/ResourceHints';
import { useLenis } from './hooks/useLenis';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';

// Lazy load components
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'));
const GalleryPage = React.lazy(() => import('./pages/GalleryPage'));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = React.lazy(() => import('./pages/TermsOfServicePage'));
const ServicesPolicyPage = React.lazy(() => import('./pages/ServicesPolicyPage'));
const RefundPolicyPage = React.lazy(() => import('./pages/RefundPolicyPage'));

// Individual Case Study Pages
const NewztokCaseStudy = React.lazy(() => import('./pages/NewztokCaseStudy'));
const CohopersCaseStudy = React.lazy(() => import('./pages/CohopersCaseStudy'));
const MysocusCaseStudy = React.lazy(() => import('./pages/MysocusCaseStudy'));
const BoldeatsCaseStudy = React.lazy(() => import('./pages/BoldeatsCaseStudy'));
const AhamCaseStudy = React.lazy(() => import('./pages/AhamCaseStudy'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const lenis = useLenis();
  usePerformanceMonitor();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <ResourceHints />
      <Preloader />
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Router>
        <div className="min-h-screen bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
          <Navigation />
          <main className="pt-24">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
              </div>
            }>
              <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/services-policy" element={<ServicesPolicyPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              
              {/* Individual Case Study Routes */}
              <Route path="/case-studies/newztok" element={<NewztokCaseStudy />} />
              <Route path="/case-studies/cohopers" element={<CohopersCaseStudy />} />
              <Route path="/case-studies/mysocus" element={<MysocusCaseStudy />} />
              <Route path="/case-studies/boldeats" element={<BoldeatsCaseStudy />} />
              <Route path="/case-studies/aham" element={<AhamCaseStudy />} />
            </Routes>
          </Suspense>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;