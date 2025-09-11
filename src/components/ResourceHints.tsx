import { useEffect } from 'react';

const ResourceHints = () => {
  useEffect(() => {
    // Add DNS prefetch for external domains
    const dnsPrefetch = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    dnsPrefetch.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Add preconnect for critical external resources
    const preconnect = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    preconnect.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Add modulepreload for critical JS chunks
    const modulePreload = [
      '/src/main.tsx',
      '/src/App.tsx',
    ];

    modulePreload.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

export default ResourceHints;
