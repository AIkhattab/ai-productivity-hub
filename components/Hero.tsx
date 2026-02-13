
import React from 'react';
import { Terminal, Code2, Sparkles, Rocket } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>The Future of Development is Here</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Build Faster with <br />
            <span className="gradient-text">AI Synergy.</span>
          </h1>
          <p className="text-emerald-400/70 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Stop coding from scratch. Leverage the power of LLMs to generate UI, 
            debug complex logic, and deploy production-ready applications in record time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-emerald-900/20 flex items-center justify-center space-x-2">
              <Rocket className="w-5 h-5" />
              <span>Start Building</span>
            </button>
            <button className="glass hover:bg-white/5 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center space-x-2">
              <Code2 className="w-5 h-5 text-emerald-400" />
              <span>View Docs</span>
            </button>
          </div>
          
          <div className="mt-12 flex items-center space-x-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/${i + 60}/100/100`}
                  className="w-10 h-10 rounded-full border-2 border-emerald-950"
                  alt="Avatar"
                />
              ))}
            </div>
            <div className="text-sm text-emerald-500/60">
              <span className="text-emerald-200 font-bold">1,000+</span> developers shipped this week
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-teal-600/20 rounded-3xl blur-2xl group-hover:opacity-100 transition-opacity"></div>
          <div className="glass rounded-3xl p-1 relative overflow-hidden">
            <div className="bg-emerald-900/40 rounded-[22px] p-6 font-mono text-sm border border-emerald-800/50">
              <div className="flex items-center space-x-2 mb-4 border-b border-emerald-800/50 pb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-emerald-500/50 ml-4">index.tsx</span>
              </div>
              <div className="space-y-1">
                <p className="text-emerald-400">import <span className="text-teal-400">{"{ ai }"}</span> from <span className="text-emerald-300">'@google/genai'</span>;</p>
                <p className="text-emerald-600/60">// Initialize powerful productivity</p>
                <p className="text-emerald-400">const <span className="text-white">hub</span> = <span className="text-teal-400">new</span> <span className="text-yellow-400">AIProject</span>();</p>
                <p>&nbsp;</p>
                <p className="text-white">hub.<span className="text-emerald-400">generate</span>({ "{" }</p>
                <p className="pl-4 text-white">feature: <span className="text-emerald-300">'Modern Landing Page'</span>,</p>
                <p className="pl-4 text-white">style: <span className="text-emerald-300">'Emerald Minimalist'</span>,</p>
                <p className="pl-4 text-white">speed: <span className="text-emerald-300">'Unmatched'</span></p>
                <p className="text-white">{"}"});</p>
                <p>&nbsp;</p>
                <div className="flex items-center space-x-2 text-emerald-400 animate-pulse">
                  <Terminal className="w-4 h-4" />
                  <span>Optimizing workspace...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
