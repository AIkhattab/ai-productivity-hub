
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, BrainCircuit, Loader2 } from 'lucide-react';

export const AIAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const askAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    setLoading(true);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `User wants productivity advice on: ${query}. 
                  Context: This is for a landing page about using AI to build websites and apps. 
                  Provide a concise, expert, and highly actionable advice (max 150 words).`,
        config: {
          systemInstruction: "You are a senior AI solutions architect specializing in development productivity."
        }
      });
      
      setResponse(result.text || "I'm having trouble thinking of advice right now. Please try again.");
    } catch (err) {
      console.error(err);
      setResponse("Error connecting to the brain center. Ensure your API key is configured.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto glass rounded-[2.5rem] p-8 md:p-16 text-center border-emerald-500/20">
        <div className="inline-flex items-center space-x-2 text-emerald-400 mb-6">
          <BrainCircuit className="w-8 h-8" />
          <span className="font-bold tracking-widest uppercase text-sm">Interactive Advisor</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ask for a Custom <span className="gradient-text">AI Strategy</span></h2>
        
        <form onSubmit={askAI} className="relative max-w-2xl mx-auto mb-12">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. How do I automate code documentation?"
            className="w-full bg-emerald-900/40 border border-emerald-700/50 rounded-2xl py-5 px-6 pr-16 focus:outline-none focus:border-emerald-500 transition-all text-lg text-emerald-50"
          />
          <button 
            type="submit"
            disabled={loading}
            className="absolute right-3 top-3 bottom-3 aspect-square bg-emerald-600 rounded-xl flex items-center justify-center text-white hover:bg-emerald-700 transition-colors disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </form>

        {response && (
          <div className="bg-emerald-950/50 rounded-3xl p-8 text-left animate-in fade-in slide-in-from-bottom-4 duration-500 border border-emerald-800/50">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Expert Recommendation:</span>
            </h4>
            <p className="text-emerald-100/80 leading-relaxed text-lg whitespace-pre-line italic">
              "{response}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
