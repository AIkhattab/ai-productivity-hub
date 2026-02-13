
import React from 'react';
import { MessageSquare, Code, CheckCircle, Globe } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Ideate & Prompt",
    desc: "Describe your application's purpose and key features to a high-reasoning model like Gemini Pro."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Iterate with Feedback",
    desc: "Use an AI-native IDE to generate components. Refine the logic by asking for specific improvements."
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Automate Quality",
    desc: "Let AI generate unit tests and perform security audits on your generated code automatically."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "One-Click Deploy",
    desc: "Configure CI/CD pipelines using AI-suggested yaml scripts for seamless production launches."
  }
];

export const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Modern Workflow</h2>
          <p className="text-emerald-400/60">From concept to production in four smart steps.</p>
        </div>
        
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-800 to-transparent -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-900 border-4 border-emerald-950 rounded-full flex items-center justify-center text-emerald-400 mb-6 shadow-xl">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-emerald-400/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
