
import React from 'react';
import { Cpu, Zap } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between border-emerald-500/20">
        <div className="flex items-center space-x-2">
          <div className="bg-emerald-600 p-2 rounded-lg">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">AI<span className="gradient-text">Productive</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-emerald-300/60">
          <a href="#features" className="hover:text-emerald-100 transition-colors">Features</a>
          <a href="#tools" className="hover:text-emerald-100 transition-colors">Tools</a>
          <a href="#stats" className="hover:text-emerald-100 transition-colors">Efficiency</a>
          <a href="#workflow" className="hover:text-emerald-100 transition-colors">Workflow</a>
        </div>

        <button className="bg-emerald-50 text-emerald-950 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-emerald-100 transition-all flex items-center space-x-2">
          <Zap className="w-4 h-4" />
          <span>Get Started</span>
        </button>
      </div>
    </nav>
  );
};
