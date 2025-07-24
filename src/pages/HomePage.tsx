import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Team from '../components/Team';
import Work from '../components/Work';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="diagonal-lines">
      <Hero />
      <Services />
      <Process />
      <Team />
      <Work />
      <Stats />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default HomePage;