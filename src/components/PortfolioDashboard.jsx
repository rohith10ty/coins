import React, { useState } from 'react';
import { 
  Briefcase, 
  ArrowUpRight, 
  ArrowDownRight, 
  PieChart, 
  TrendingUp, 
  Plus, 
  Wallet,
  Clock,
  Layers,
  ArrowRightLeft
} from 'lucide-react';
import { PORTFOLIO_HISTORY } from '../data/mockData';

export default function PortfolioDashboard({ 
  portfolio, 
  holdings, 
  onQuickTrade 
}) {
  const [activeTimeframe, setActiveTimeframe] = useState('1M');
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const historyData = PORTFOLIO_HISTORY[activeTimeframe] || PORTFOLIO_HISTORY['1M'];
  const minVal = Math.min(...historyData.map(d => d.value));
  const maxVal = Math.max(...historyData.map(d => d.value));
  const range = maxVal - minVal || 1;

  // Asset allocation percentages
  const allocations = [
    { type: 'Equities & Tech', percent: 48, color: 'bg-indigo-500', amount: '$64,517.44' },
    { type: 'Digital Assets (Crypto)', percent: 32, color: 'bg-cyan-400', amount: '$43,011.63' },
    { type: 'ETFs & Index Funds', percent: 15, color: 'bg-emerald-500', amount: '$20,161.70' },
    { type: 'USD Cash Reserves', percent: 5, color: 'bg-amber-400', amount: '$6,720.57' }
  ];

  // SVG Chart path calculation
  const width = 600;
  const height = 220;
  const paddingX = 20;
  const paddingY = 25;

  const points = historyData.map((d, i) => {
    const x = paddingX + (i / (historyData.length - 1)) * (width - paddingX * 2);
    const y = height - paddingY - ((d.value - minVal) / range) * (height - paddingY * 2);
    return { ...d, x, y };
  });

  let pathD = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpx = prev.x + (curr.x - prev.x) / 2;
    pathD += ` C ${cpx} ${prev.y}, ${cpx} ${curr.y}, ${curr.x} ${curr.y}`;
  }
  const fillD = `${pathD} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;

  return (
    <section id="portfolio" className="py-20 bg-[#080B11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <Briefcase className="w-4 h-4" />
              Unified Asset Management
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Portfolio Dashboard
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Consolidated net worth, asset performance, and live position risk analysis.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">Account ID: <strong className="text-slate-200 font-mono">COINS-9948-US</strong></span>
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
        </div>

        {/* Top 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          {/* Card 1: Total Portfolio Value */}
          <div className="rounded-2xl bg-gradient-to-br from-[#121827] to-[#0D121D] border border-white/[0.08] p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <span>Total Portfolio Value</span>
              <Wallet className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="mt-3 text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
              ${portfolio.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
            <div className="mt-2 text-xs text-slate-400">
              Cash Available: <span className="font-mono text-slate-200 font-medium">${portfolio.cash.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
          </div>

          {/* Card 2: Total Profit / Loss */}
          <div className="rounded-2xl bg-[#0F1422]/90 border border-white/[0.08] p-6 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <span>Total Unrealized P&amp;L</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono tracking-tight">
                +${portfolio.totalProfit.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
              <span className="text-sm font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                +{portfolio.profitPercent}%
              </span>
            </div>
            <div className="mt-2 text-xs text-slate-400">
              Since inception: All-time returns
            </div>
          </div>

          {/* Card 3: Today's Change */}
          <div className="rounded-2xl bg-[#0F1422]/90 border border-white/[0.08] p-6 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <span>Today's Market Change</span>
              <Clock className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono tracking-tight">
                +${portfolio.todayChange.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
              <span className="text-sm font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                +{portfolio.todayPercent}%
              </span>
            </div>
            <div className="mt-2 text-xs text-slate-400">
              Updated in real-time from active positions
            </div>
          </div>

        </div>

        {/* Middle Section: Chart + Asset Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Performance Chart */}
          <div className="lg:col-span-8 rounded-2xl bg-[#0E1320]/80 border border-white/[0.08] p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
              <div>
                <h3 className="text-base font-bold text-white">Portfolio Performance Curve</h3>
                <p className="text-xs text-slate-400">
                  {hoveredPoint ? (
                    <span className="text-cyan-300 font-mono font-semibold">
                      {hoveredPoint.time}: ${hoveredPoint.value.toLocaleString()}
                    </span>
                  ) : (
                    'Dynamic net asset value progression'
                  )}
                </p>
              </div>

              {/* Timeframe Switcher */}
              <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/[0.06]">
                {['1D', '1W', '1M', '1Y', 'ALL'].map((tf) => (
                  <button
                    key={tf}
                    onClick={() => { setActiveTimeframe(tf); setHoveredPoint(null); }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeTimeframe === tf
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* SVG Chart Visualization */}
            <div className="mt-6 relative h-64 w-full flex items-center justify-center">
              <svg 
                viewBox={`0 0 ${width} ${height}`} 
                className="w-full h-full overflow-visible"
              >
                <defs>
                  <linearGradient id="portfolioGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal reference lines */}
                <line x1={paddingX} y1={paddingY} x2={width - paddingX} y2={paddingY} stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1={paddingX} y1={height / 2} x2={width - paddingX} y2={height / 2} stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1={paddingX} y1={height - paddingY} x2={width - paddingX} y2={height - paddingY} stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

                {/* Gradient Fill */}
                <path d={fillD} fill="url(#portfolioGrad)" />

                {/* Main Stroke */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Interactive Points */}
                {points.map((pt, i) => (
                  <g 
                    key={i} 
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredPoint(pt)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="4"
                      fill="#080B11"
                      stroke="#00F0FF"
                      strokeWidth="2"
                      className="transition-transform hover:scale-150"
                    />
                    <text
                      x={pt.x}
                      y={height - 5}
                      fontSize="10"
                      textAnchor="middle"
                      fill="#64748B"
                      fontFamily="Outfit, sans-serif"
                    >
                      {pt.time}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="mt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Low: ${minVal.toLocaleString()}</span>
              <span>High: ${maxVal.toLocaleString()}</span>
            </div>
          </div>

          {/* Allocation Breakdown */}
          <div className="lg:col-span-4 rounded-2xl bg-[#0E1320]/80 border border-white/[0.08] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-cyan-400" />
                  Asset Allocation
                </h3>
                <span className="text-xs text-emerald-400 font-medium">Optimal Balance</span>
              </div>

              {/* Progress bar visual */}
              <div className="mt-6 h-3 rounded-full bg-slate-800 overflow-hidden flex">
                {allocations.map((a, i) => (
                  <div
                    key={i}
                    style={{ width: `${a.percent}%` }}
                    className={`${a.color} transition-all duration-500`}
                    title={`${a.type}: ${a.percent}%`}
                  />
                ))}
              </div>

              {/* Allocation Legend */}
              <div className="mt-6 space-y-3.5">
                {allocations.map((a, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-3 h-3 rounded-full ${a.color}`} />
                      <span className="text-slate-300 font-medium">{a.type}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-white font-bold">{a.amount}</span>
                      <span className="text-slate-500 ml-1.5 font-mono">({a.percent}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <a
                href="#trading"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#trading')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-center text-xs font-semibold text-slate-200 block transition-colors"
              >
                Rebalance Portfolio
              </a>
            </div>
          </div>

        </div>

        {/* Current Active Holdings Table */}
        <div className="rounded-2xl bg-[#0E1320]/80 border border-white/[0.08] p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-bold text-white">Current Holdings</h3>
              <p className="text-xs text-slate-400">All live open positions in your Coins multi-asset vault</p>
            </div>
            <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              {holdings.length} Assets Active
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.06] text-[11px] font-semibold uppercase text-slate-400 tracking-wider">
                  <th className="py-3 px-4">Asset</th>
                  <th className="py-3 px-4">Holdings / Shares</th>
                  <th className="py-3 px-4">Avg Buy Price</th>
                  <th className="py-3 px-4">Current Price</th>
                  <th className="py-3 px-4">Market Value</th>
                  <th className="py-3 px-4">Unrealized P&amp;L</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] text-xs font-mono">
                {holdings.map((h, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-sans font-bold text-white">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-white/[0.06] text-[11px] font-bold text-cyan-300">
                          {h.symbol}
                        </span>
                        <span className="text-slate-300 text-xs truncate max-w-[140px]">{h.name}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-200">
                      {h.shares} <span className="text-[10px] text-slate-500 uppercase">{h.type}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">
                      ${h.avgBuyPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-3.5 px-4 text-white font-bold">
                      ${h.currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-3.5 px-4 text-white font-bold">
                      ${h.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 font-bold ${
                        h.profit >= 0 ? 'text-emerald-400' : 'text-rose-400'
                      }`}>
                        {h.profit >= 0 ? '+' : ''}${h.profit.toFixed(2)} ({h.profitPercent}%)
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => onQuickTrade(h.symbol)}
                        className="px-2.5 py-1 rounded bg-indigo-600/30 hover:bg-indigo-600 text-indigo-300 hover:text-white text-[11px] font-sans font-semibold transition-colors"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
