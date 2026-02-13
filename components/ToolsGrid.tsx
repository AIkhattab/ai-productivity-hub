
import React from 'react';
import { Tool } from '../types';

const tools: Tool[] = [
  {
    name: "Gemini 3",
    category: "LLM / Multi-modal",
    description: "High-reasoning model for complex architecture planning.",
    logo: "G"
  },
  {
    name: "Cursor",
    category: "IDE",
    description: "The AI-first code editor that knows your whole codebase.",
    logo: "C"
  },
  {
    name: "v0.dev",
    category: "UI Design",
    description: "Generates Shadcn/Tailwind UI components in seconds.",
    logo: "V"
  },
  {
    name: "Copilot",
    category: "Auto-complete",
    description: "The classic assistant for boilerplate and documentation.",
    logo: "CP"
  }
];

export const ToolsGrid: React.FC = () => {
  return (
    <section id="tools" className="py-24 px-6 bg-emerald-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">The Stack of 2025</h2>
            <p className="text-emerald-400/60">Integrate the most powerful tools into your daily workflow.</p>
          </div>
          <button className="text-emerald-400 font-semibold hover:text-emerald-300 flex items-center space-x-2">
            <span>View All Integrations</span>
            <span className="text-xl">→</span>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center font-bold text-xl text-white shrink-0 border border-emerald-800/30">
                {tool.logo}
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded">
                  {tool.category}
                </span>
                <h4 className="text-lg font-bold mt-2">{tool.name}</h4>
                <p className="text-emerald-400/60 text-sm mt-1">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
