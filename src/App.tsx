import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import OurApproach from './components/OurApproach';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <OurApproach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;