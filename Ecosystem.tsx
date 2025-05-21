import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, BookOpen, Github, Globe } from 'lucide-react';

const Ecosystem: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="ecosystem" className="py-20 bg-dark-950 relative">
      <div className="absolute inset-0 opacity-5 bg-circuit-pattern bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-4">
            Join the AI GAZ Ecosystem
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Become part of a growing community of innovators, developers, and users shaping the future of AI and energy.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-dark-700 hover:border-primary-400/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-display font-semibold text-primary-400 mb-4 flex items-center">
              <Users className="mr-3 h-6 w-6" />
              Community
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of innovators, developers, and enthusiasts who are building the future of decentralized AI and sustainable energy solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center bg-dark-700 hover:bg-dark-600 px-4 py-2 rounded-lg text-gray-200 transition-colors duration-300">
                <Users className="mr-2 h-4 w-4" /> 
                Discord
              </button>
              <button className="flex items-center bg-dark-700 hover:bg-dark-600 px-4 py-2 rounded-lg text-gray-200 transition-colors duration-300">
                <Globe className="mr-2 h-4 w-4" /> 
                Forum
              </button>
              <button className="flex items-center bg-dark-700 hover:bg-dark-600 px-4 py-2 rounded-lg text-gray-200 transition-colors duration-300">
                <Github className="mr-2 h-4 w-4" /> 
                GitHub
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-dark-700 hover:border-primary-400/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-display font-semibold text-primary-400 mb-4 flex items-center">
              <BookOpen className="mr-3 h-6 w-6" />
              Resources
            </h3>
            <p className="text-gray-300 mb-6">
              Access comprehensive documentation, tutorials, and development tools to build on the AI GAZ platform or integrate it into your projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center bg-dark-700 hover:bg-dark-600 px-4 py-2 rounded-lg text-gray-200 transition-colors duration-300">
                <BookOpen className="mr-2 h-4 w-4" /> 
                Documentation
              </button>
              <button className="flex items-center bg-dark-700 hover:bg-dark-600 px-4 py-2 rounded-lg text-gray-200 transition-colors duration-300">
                <Github className="mr-2 h-4 w-4" /> 
                API Reference
              </button>
              <button className="flex items-center bg-dark-700 hover:bg-dark-600 px-4 py-2 rounded-lg text-gray-200 transition-colors duration-300">
                <Users className="mr-2 h-4 w-4" /> 
                Tutorials
              </button>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-primary-400/10 to-secondary-400/10 p-8 rounded-2xl border border-primary-400/20 text-center"
        >
          <h3 className="text-2xl font-display font-semibold text-gray-100 mb-4">
            Ready to start with AI GAZ?
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Whether you're a developer, investor, or enthusiast, there are multiple ways to get involved with the AI GAZ ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-primary-400 to-secondary-400 text-dark-950 font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-primary-400/20 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-primary-400 text-primary-400 px-8 py-3 rounded-full hover:bg-primary-400/10 transition-all duration-300">
              Contact Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ecosystem;