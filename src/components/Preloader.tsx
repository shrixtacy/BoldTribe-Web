import { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/Crayon.gif',
      '/team/Boldtribe logo logo.svg',
      '/favicon.ico',
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);

    // Preload critical CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'preload';
    cssLink.href = '/src/index.css';
    cssLink.as = 'style';
    document.head.appendChild(cssLink);

    // Preload critical JavaScript chunks
    const jsLink = document.createElement('link');
    jsLink.rel = 'modulepreload';
    jsLink.href = '/src/main.tsx';
    document.head.appendChild(jsLink);
  }, []);

  return null;
};

export default Preloader;
