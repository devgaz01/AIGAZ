import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Bot, Leaf, Lock, Shield, BarChart3 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-2xl border border-dark-700 hover:border-primary-400/30 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400/20 to-primary-400/5 flex items-center justify-center mb-5 group-hover:from-primary-400/30 group-hover:to-primary-400/10 transition-all duration-300">
        <div className="text-primary-400">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-display font-semibold text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Zap size={24} />,
      title: "Fast & Scalable",
      description: "Our blockchain infrastructure ensures lightning-fast transactions and can scale to handle millions of operations per second."
    },
    {
      icon: <Bot size={24} />,
      title: "AI-Powered Contracts",
      description: "Smart contracts with built-in AI capabilities for automation and advanced decision-making processes."
    },
    {
      icon: <Leaf size={24} />,
      title: "Green-Friendly Focus",
      description: "Designed with sustainability in mind, AI GAZ incentivizes and supports renewable energy projects."
    },
    {
      icon: <Lock size={24} />,
      title: "Secure & Decentralized",
      description: "Advanced cryptography and decentralized architecture protect user data and digital assets."
    },
    {
      icon: <Shield size={24} />,
      title: "Privacy Protection",
      description: "Built-in privacy features that allow users to control their data while maintaining transparency."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "DeFi Integration",
      description: "Seamlessly integrates with decentralized finance platforms for lending, staking, and yield farming."
    }
  ];

  return (
    <section id="features" className="py-20 bg-dark-900 relative">
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
            Key Features
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            AI GAZ combines cutting-edge blockchain technology with artificial intelligence to create a sustainable ecosystem for the future of digital transactions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;