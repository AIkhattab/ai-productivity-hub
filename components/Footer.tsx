
import React from 'react';
import { Cpu, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-6 border-t border-emerald-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">AI<span className="gradient-text">Productive</span></span>
            </div>
            <p className="text-emerald-400/60 max-w-sm mb-8">
              Empowering the next generation of developers to build the future with 
              human-machine collaboration. Efficiency is just the beginning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 glass rounded-lg text-emerald-400 hover:text-emerald-200 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 glass rounded-lg text-emerald-400 hover:text-emerald-200 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 glass rounded-lg text-emerald-400 hover:text-emerald-200 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Product</h5>
            <ul className="space-y-4 text-emerald-400/60 text-sm">
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-emerald-400/60 text-sm">
              <li><a href="#" className="hover:text-emerald-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-emerald-900/50 text-center text-sm text-emerald-600/50">
          <p>© 2025 AIProductive. Designed for builders of tomorrow.</p>
        </div>
      </div>
    </footer>
  );
};
