import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  CircleDollarSign, 
  Layers, 
  Headphones,
  CheckCircle,
  Award,
  Lock,
  Cpu
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/mockData';

export default function WhyChooseUs({ onOpenAuth }) {
  const iconMap = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    Zap: <Zap className="w-6 h-6 text-cyan-400" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-indigo-400" />,
    CircleDollarSign: <CircleDollarSign className="w-6 h-6 text-amber-400" />,
    Layers: <Layers className="w-6 h-6 text-purple-400" />,
    Headphones: <Headphones className="w-6 h-6 text-rose-400" />
  };

  return (
    <section id="why-us" className="py-24 bg-[#080B11] relative overflow-hidden">
      {/* Subtle radial ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4" />
            Institutional Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Engineered for Modern Traders &amp; Investors
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Built from first principles to provide retail and institutional market participants with state-of-the-art matching engines, institutional security, and zero commission execution.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-[#0F1422]/70 hover:bg-[#141B2D]/90 border border-white/[0.06] hover:border-indigo-500/40 p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/40 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-indigo-500/40 transition-all duration-300">
                  {iconMap[item.icon] || <ShieldCheck className="w-6 h-6 text-indigo-400" />}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-slate-300 transition-colors">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Independently audited &amp; verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-cyan-900/40 border border-indigo-500/20 p-8 sm:p-12 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Ready to trade on next-generation rails?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
              Open your Coins unified account in under 3 minutes. Zero paperwork, zero minimum deposits.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Create Free Account
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
