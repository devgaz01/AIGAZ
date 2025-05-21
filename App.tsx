import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Ecosystem from './components/Ecosystem';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Ecosystem />
      <Footer />
    </div>
  );
}

export default App;