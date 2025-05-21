import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const steps = [
    {
      title: "Energy-to-Token Conversion",
      description: "Renewable energy sources generate power, which is measured and converted into AI GAZ tokens based on output and efficiency."
    },
    {
      title: "AI Resource Allocation",
      description: "Tokens are used to access AI computing resources in a decentralized network, optimizing for efficiency and cost."
    },
    {
      title: "Smart Contract Execution",
      description: "AI-powered smart contracts automate complex operations, from energy distribution to resource allocation."
    },
    {
      title: "Sustainable Reward System",
      description: "Network participants earn rewards for contributing resources, validating transactions, and eco-friendly practices."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-dark-950 relative">
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
            How AI GAZ Works
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our innovative platform creates a circular economy where energy, AI computation, and value transfer seamlessly integrate.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-secondary-400 hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
          
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="mb-16 relative">
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div 
                    className={`md:w-1/2 ${isEven ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'} text-center md:text-${isEven ? 'right' : 'left'} mb-8 md:mb-0`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <h3 className="text-2xl font-display font-semibold text-primary-400 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative z-10"
                  >
                    {/* Number badge */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 flex items-center justify-center text-dark-950 text-2xl font-bold font-display shadow-lg shadow-primary-400/20">
                      {index + 1}
                    </div>
                  </motion.div>
                  
                  <div className={`md:w-1/2 ${isEven ? 'md:pl-16 lg:pl-24' : 'md:pr-16 lg:pr-24'} hidden md:block`}></div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 hidden md:block">
                    <ArrowRight className="w-6 h-6 text-secondary-400 transform rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-r from-primary-400 to-secondary-400 text-dark-950 font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-primary-400/20 transition-all duration-300"
          >
            Explore Technical Documentation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;