import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Globe2, Activity, Clock, BarChart2 } from 'lucide-react';
import Sparkline from './Sparkline';

export default function MarketOverview({ indices, onSelectIndex }) {
  const [filter, setFilter] = useState('ALL');

  const filteredIndices = indices.filter(idx => {
    if (filter === 'ALL') return true;
    if (filter === 'STOCKS') return ['S&P 500', 'NASDAQ', 'DOW JONES', 'NIFTY 50'].includes(idx.symbol);
    if (filter === 'CRYPTO') return ['BITCOIN', 'ETHEREUM'].includes(idx.symbol);
    return true;
  });

  return (
    <section id="markets" className="py-20 bg-[#080B11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <Activity className="w-4 h-4" />
              Global Macro & Indices
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Market Overview
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Real-time multi-asset market indicators, global benchmark indices, and liquidity conditions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/[0.08] rounded-xl self-start md:self-auto">
            {['ALL', 'STOCKS', 'CRYPTO'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filter === f
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {f === 'ALL' ? 'All Benchmarks' : f === 'STOCKS' ? 'Indices' : 'Crypto'}
              </button>
            ))}
          </div>
        </div>

        {/* Indices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredIndices.map((idx, index) => (
            <div
              key={idx.symbol}
              onClick={() => onSelectIndex(idx.symbol)}
              className="group relative rounded-2xl bg-[#0F1422]/70 hover:bg-[#141B2E]/90 border border-white/[0.06] hover:border-indigo-500/30 p-5 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/40 cursor-pointer flex flex-col justify-between"
            >
              {/* Header inside Card */}
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {idx.symbol}
                    </span>
                    <h3 className="text-base font-semibold text-slate-200 mt-0.5 group-hover:text-cyan-300 transition-colors">
                      {idx.name}
                    </h3>
                  </div>

                  {/* Market Status Pill */}
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                    idx.status === 'Open' || idx.status === '24/7 Live'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      idx.status === 'Open' || idx.status === '24/7 Live' ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'
                    }`} />
                    {idx.status}
                  </span>
                </div>

                {/* Price and Change */}
                <div className="mt-4 flex items-baseline justify-between">
                  <span className="text-2xl font-black text-white tracking-tight font-mono">
                    {idx.price}
                  </span>
                  
                  <div className={`flex items-center gap-1 text-sm font-bold font-mono px-2 py-0.5 rounded-md ${
                    idx.isPositive 
                      ? 'bg-emerald-500/10 text-emerald-400' 
                      : 'bg-rose-500/10 text-rose-400'
                  }`}>
                    {idx.isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                    {idx.change}
                  </div>
                </div>

                <div className="text-xs text-slate-500 font-mono mt-0.5">
                  Day Diff: <span className={idx.isPositive ? 'text-emerald-400' : 'text-rose-400'}>{idx.diff}</span>
                </div>
              </div>

              {/* Sparkline Visual */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                <div className="w-32 sm:w-36 h-9 flex items-center">
                  <Sparkline
                    data={idx.sparkline}
                    width={140}
                    height={36}
                    isPositive={idx.isPositive}
                    strokeWidth={2}
                    showGradient={true}
                    id={`idx-${index}`}
                  />
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-indigo-400 group-hover:text-cyan-300 font-semibold flex items-center gap-1">
                    Analyze <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
