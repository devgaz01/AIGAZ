import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Lightbulb, BarChart, Network, Factory, Cloud } from 'lucide-react';

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-2xl border border-dark-700 hover:border-primary-400/30 transition-all duration-300 group h-full"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-400/20 to-secondary-400/5 flex items-center justify-center mb-5 group-hover:from-secondary-400/30 group-hover:to-secondary-400/10 transition-all duration-300">
        <div className="text-secondary-400">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-display font-semibold text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const UseCases: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const useCases = [
    {
      icon: <Cpu size={24} />,
      title: "AI Computing Marketplace",
      description: "AI GAZ facilitates a decentralized marketplace where users can buy and sell AI computing resources, making high-performance AI accessible to everyone."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Smart Energy Grids",
      description: "Power smart energy grids that automatically optimize energy distribution based on real-time demand and supply data, reducing waste and costs."
    },
    {
      icon: <BarChart size={24} />,
      title: "Predictive Analytics Platforms",
      description: "Fund and power predictive analytics services that help businesses make data-driven decisions using advanced AI algorithms."
    },
    {
      icon: <Network size={24} />,
      title: "IoT Networks",
      description: "Facilitate secure micropayments between IoT devices, enabling autonomous machine-to-machine transactions and services."
    },
    {
      icon: <Factory size={24} />,
      title: "Manufacturing Optimization",
      description: "Smart factories use AI GAZ to optimize production processes, predict maintenance needs, and reduce downtime through intelligent automation."
    },
    {
      icon: <Cloud size={24} />,
      title: "Decentralized Cloud Services",
      description: "Support decentralized cloud computing platforms that provide alternatives to centralized cloud providers with better privacy and cost structures."
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-dark-900 relative">
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
            Real-World Applications
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            AI GAZ is designed to power a wide range of applications at the intersection of AI and energy technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard 
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;