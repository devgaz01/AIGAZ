import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Bot, Leaf, Lock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative min-h-screen bg-dark-950 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 opacity-10 bg-circuit-pattern bg-cover bg-center mix-blend-overlay"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-400/20"
            style={{
              width: Math.random() * 5 + 2 + 'px',
              height: Math.random() * 5 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `pulse ${Math.random() * 5 + 3}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center"
        >
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400"
            >
              AI GAZ
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-display font-medium"
            >
              Powering the AI Future, One GAZ at a Time.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-lg max-w-xl mx-auto lg:mx-0"
            >
              A next-generation digital currency designed to fuel innovation at the intersection of artificial intelligence and energy.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="bg-gradient-to-r from-primary-400 to-secondary-400 text-dark-950 font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-primary-400/20 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-primary-400 text-primary-400 px-8 py-3 rounded-full hover:bg-primary-400/10 transition-all duration-300">
                View Whitepaper
              </button>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="pt-4 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4"
            >
              <div className="flex items-center text-gray-200">
                <Zap className="w-5 h-5 text-secondary-400 mr-2" />
                <span>Fast & Scalable</span>
              </div>
              <div className="flex items-center text-gray-200">
                <Bot className="w-5 h-5 text-secondary-400 mr-2" />
                <span>AI-powered</span>
              </div>
              <div className="flex items-center text-gray-200">
                <Leaf className="w-5 h-5 text-secondary-400 mr-2" />
                <span>Green-friendly</span>
              </div>
              <div className="flex items-center text-gray-200">
                <Lock className="w-5 h-5 text-secondary-400 mr-2" />
                <span>Secure & Decentralized</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 mt-12 lg:mt-0 relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto animate-float">
              <div className="absolute inset-0 rounded-full bg-primary-400/20 animate-pulse-slow blur-xl"></div>
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="AI GAZ Logo" 
                className="w-full h-full object-contain z-10 relative"
              />
              <div className="absolute inset-0 animate-glow rounded-full"></div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary-400/20 to-primary-400/5 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-secondary-400/20 to-secondary-400/5 blur-xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;