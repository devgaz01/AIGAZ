import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-950/90 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-primary-400 font-display font-bold text-2xl flex items-center">
                <div className="mr-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 flex items-center justify-center">
                  <span className="text-dark-950">AI</span>
                </div>
                GAZ
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#features" className="text-gray-200 hover:text-primary-400 transition-colors duration-300 font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-200 hover:text-primary-400 transition-colors duration-300 font-medium">How It Works</a>
              <a href="#use-cases" className="text-gray-200 hover:text-primary-400 transition-colors duration-300 font-medium">Use Cases</a>
              <a href="#ecosystem" className="text-gray-200 hover:text-primary-400 transition-colors duration-300 font-medium">Ecosystem</a>
              
              <div className="relative group">
                <button className="flex items-center text-gray-200 group-hover:text-primary-400 transition-colors duration-300 font-medium">
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-dark-800 ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-dark-700 hover:text-primary-400">Documentation</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-dark-700 hover:text-primary-400">Whitepaper</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-dark-700 hover:text-primary-400">Roadmap</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-primary-400 to-secondary-400 text-dark-950 font-semibold px-6 py-2 rounded-full hover:shadow-lg hover:shadow-primary-400/20 transition-all duration-300">
              Get Started
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-primary-400 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-dark-900/95 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-dark-800 hover:text-primary-400">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-dark-800 hover:text-primary-400">How It Works</a>
            <a href="#use-cases" className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-dark-800 hover:text-primary-400">Use Cases</a>
            <a href="#ecosystem" className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-dark-800 hover:text-primary-400">Ecosystem</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-dark-800 hover:text-primary-400">Documentation</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-dark-800 hover:text-primary-400">Whitepaper</a>
            <button className="mt-4 w-full bg-gradient-to-r from-primary-400 to-secondary-400 text-dark-950 font-semibold px-6 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;