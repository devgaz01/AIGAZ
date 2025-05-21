import React from 'react';
import { Github, Twitter, Linkedin, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 pt-16 pb-8 relative">
      <div className="absolute inset-0 opacity-5 bg-circuit-pattern bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="text-primary-400 font-display font-bold text-2xl flex items-center mb-4">
              <div className="mr-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 flex items-center justify-center">
                <span className="text-dark-950">AI</span>
              </div>
              GAZ
            </a>
            <p className="text-gray-400 mb-6">
              Powering the AI Future, One GAZ at a Time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">GitHub</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Press Kit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AI GAZ. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors duration-300 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;