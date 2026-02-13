
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ToolsGrid } from './components/ToolsGrid';
import { ProductivityChart } from './components/ProductivityChart';
import { AIAdvisor } from './components/AIAdvisor';
import { Workflow } from './components/Workflow';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-emerald-950 bg-grid relative overflow-hidden">
      {/* Background Orbs with Green/Teal palette */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <ToolsGrid />
          <section id="stats" className="py-24 px-4 container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The Productivity Gap</h2>
              <p className="text-emerald-400/80 max-w-2xl mx-auto">
                Compare typical development timelines. See how AI tools accelerate your time-to-market across various stages.
              </p>
            </div>
            <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <ProductivityChart />
            </div>
          </section>
          
          <Workflow />
          <AIAdvisor />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
