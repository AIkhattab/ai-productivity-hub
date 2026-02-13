
import React from 'react';
import { Bot, Zap, Shield, Search, Layout, Bug } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "AI Pair Programming",
    description: "Collaborate with models that understand your context, offering real-time logic suggestions.",
    icon: <Bot className="w-6 h-6" />
  },
  {
    title: "Instant UI Mockups",
    description: "Generate pixel-perfect components using text prompts. From hero sections to complex dashboards.",
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: "Automated Debugging",
    description: "Let AI scan your stack traces to identify and fix performance bottlenecks in seconds.",
    icon: <Bug className="w-6 h-6" />
  },
  {
    title: "Semantic Search",
    description: "Navigate massive codebases with natural language queries instead of complex regex.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Rapid Prototyping",
    description: "Go from idea to functional prototype 10x faster with boilerplate generation.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Secure Refactoring",
    description: "Upgrade legacy systems with confidence as AI ensures type safety and consistency.",
    icon: <Shield className="w-6 h-6" />
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Productivity Boosters</h2>
          <p className="text-emerald-400/60 max-w-2xl mx-auto">
            Focus on creative strategy while AI handles the heavy lifting of boilerplate and syntax.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl group hover:border-emerald-500/50 transition-all cursor-default">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-emerald-400/60 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
