import React from 'react';
import { Bitcoin, ArrowDownRight, Award, TrendingUp, Zap, Sparkles, QrCode } from 'lucide-react';

export const PredictionCard: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-[#020617] text-white relative overflow-hidden font-sans">
            {/* Radial gradient background effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16 gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
                            {/* Simple P Logo */}
                            <span className="text-emerald-950 font-bold text-2xl">P</span>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold leading-tight">Predict Bay</h2>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-xs text-green-500 uppercase tracking-wider font-semibold">Live Predictions</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-800">
                        <span className="text-slate-400 text-sm font-mono truncate max-w-[150px] md:max-w-xs">
                            @0xa0949abe3a0b6039a053...
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                            0
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center mb-16 text-center">

                    {/* Winning Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 font-medium tracking-wide uppercase text-sm mb-8 shadow-[0_0_15px_-3px_rgba(234,179,8,0.3)]">
                        <Award className="w-4 h-4" />
                        Winning Prediction
                        <Award className="w-4 h-4" />
                    </div>

                    {/* Amount */}
                    <div className="relative mb-8">
                        <Sparkles className="absolute -top-8 -left-12 w-8 h-8 text-emerald-400 animate-pulse" />
                        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-emerald-500 drop-shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                            + $103.32
                        </h1>
                        <Sparkles className="absolute -bottom-4 -right-12 w-6 h-6 text-emerald-400 animate-pulse delay-75" />
                    </div>

                    {/* Stats Badges */}
                    <div className="flex gap-4 mb-12">
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                            <TrendingUp className="w-4 h-4" />
                            +28% ROI
                        </div>
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold">
                            <Zap className="w-4 h-4" />
                            1.28x Multiplier
                        </div>
                    </div>

                    {/* Prediction Card details */}
                    <div className="w-full max-w-2xl bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-800 p-6 md:p-8 shadow-2xl relative overflow-hidden group hover:border-slate-700 transition-colors">
                        {/* Glow effect inside card */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-50"></div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                                    <Bitcoin className="w-7 h-7" />
                                </div>
                                <div className="text-left">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-xl font-bold text-white">BTC</h3>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400 uppercase">Perpetual</span>
                                    </div>
                                    <p className="text-slate-400 text-sm mt-0.5 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                        $BTC above $68861.74
                                        <span className="text-slate-500 ml-1">on Feb 13, 15:50 UTC?</span>
                                    </p>
                                </div>
                            </div>

                            <div className="px-5 py-2 rounded-xl bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 flex items-center gap-2 text-red-400 font-bold uppercase tracking-wider text-sm shadow-[0_0_10px_-3px_rgba(248,113,113,0.2)]">
                                <ArrowDownRight className="w-4 h-4" />
                                Below
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-800 bg-slate-950/30 rounded-2xl p-4 border border-slate-800/50">
                            <div className="text-center px-4 py-2">
                                <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Entry Amount</div>
                                <div className="text-xl font-bold text-white">$369.00</div>
                            </div>
                            <div className="text-center px-4 py-2">
                                <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Payout</div>
                                <div className="text-xl font-bold text-emerald-400">$472.32</div>
                            </div>
                            <div className="text-center px-4 py-2">
                                <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Predicted On</div>
                                <div className="text-xl font-bold text-white">Feb 13, 2026</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Stats */}
                <div className="flex justify-center gap-8 md:gap-16 mb-20 text-sm md:text-base">
                    <div className="flex items-center gap-2 text-slate-300">
                        <TrendingUp className="w-4 h-4 text-yellow-400" />
                        <span>Platform Win Rate: <span className="font-bold text-white">74%</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <span>Avg Multiplier: <span className="font-bold text-white">1.72x</span></span>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-slate-800 pt-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Ready to make your prediction?</h3>
                        <p className="text-slate-400 mb-6">Join thousands of traders predicting market movements.</p>
                        <button className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20">
                            Join PredictBay Today
                        </button>
                        <div className="mt-4 text-slate-500 text-xs flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                            Free to start • Instant payouts
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2">
                        <div className="text-slate-400 text-sm mb-1">Scan to predict</div>
                        <div className="bg-white p-2 rounded-xl">
                            {/* Placeholder for QR Code */}
                            <QrCode className="w-20 h-20 text-slate-900" />
                        </div>
                        <div className="text-white font-bold text-sm tracking-wide">predictbay.io</div>
                    </div>
                </div>

            </div>
        </section>
    );
};
