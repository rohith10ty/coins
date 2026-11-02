import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  Play, 
  Sparkles,
  BarChart3,
  DollarSign
} from 'lucide-react';
import Sparkline from './Sparkline';

export default function Hero({ onOpenTrading, onOpenAuth, onSelectStock }) {
  const [activeTab, setActiveTab] = useState('BTC');

  const heroCoins = {
    BTC: {
      symbol: 'BTC/USD',
      name: 'Bitcoin',
      price: '$68,420.50',
      change: '+3.45%',
      isPositive: true,
      high: '$68,900.00',
      low: '$65,980.00',
      sparkline: [66000, 66400, 66150, 67200, 67050, 67900, 68420.50]
    },
    NVDA: {
      symbol: 'NVDA',
      name: 'NVIDIA Corp.',
      price: '$141.54',
      change: '+4.85%',
      isPositive: true,
      high: '$142.20',
      low: '$135.10',
      sparkline: [134, 136, 135.5, 138, 137.8, 140.2, 141.54]
    },
    ETH: {
      symbol: 'ETH/USD',
      name: 'Ethereum',
      price: '$2,640.10',
      change: '+2.15%',
      isPositive: true,
      high: '$2,680.00',
      low: '$2,560.00',
      sparkline: [2570, 2590, 2580, 2620, 2610, 2635, 2640.10]
    }
  };

  const currentCoin = heroCoins[activeTab];

  const tickerItems = [
    { s: 'BTC', p: '$68,420.50', c: '+3.45%', up: true },
    { s: 'NVDA', p: '$141.54', c: '+4.85%', up: true },
    { s: 'ETH', p: '$2,640.10', c: '+2.15%', up: true },
    { s: 'AAPL', p: '$232.15', c: '+1.42%', up: true },
    { s: 'TSLA', p: '$218.40', c: '-2.35%', up: false },
    { s: 'SOL', p: '$178.60', c: '+6.82%', up: true },
    { s: 'SPY', p: '$582.40', c: '+0.82%', up: true },
    { s: 'PLTR', p: '$43.85', c: '+7.21%', up: true },
    { s: 'MSFT', p: '$428.15', c: '+0.95%', up: true },
  ];

  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden crypto-grid-pattern">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
              Invest with Confidence.{' '}
              <span className="block mt-1 bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-300 bg-clip-text text-transparent">
                Trade with Ultra Precision.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed">
              Experience the pinnacle of fintech on <strong className="text-slate-200">Coins</strong>. Access US equities, global crypto, ETFs, and index derivatives with sub-millisecond execution, institutional liquidity, and intelligent portfolio tools.
            </p>

            {/* Call To Actions */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#trading"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#trading')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white font-bold text-sm shadow-xl shadow-orange-600/25 hover:shadow-orange-500/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Trading Now
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#markets"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#markets')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                Explore Markets
              </a>
            </div>

            {/* Key Trust Metrics */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-6 sm:gap-8 w-full max-w-md">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">$4.8B+</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">24h Global Volume</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">&lt;12ms</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Engine Latency</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 tracking-tight">0.0%</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Zero Commission</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Trading Card Visual (Shifted slightly left) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-center items-center relative lg:-translate-x-6 xl:-translate-x-10">
            
            {/* Outer Decorative Glow Border */}
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-orange-600/40 via-amber-500/20 to-transparent shadow-2xl shadow-orange-950/40 w-full max-w-[420px]">
              
              <div className="relative rounded-2xl bg-[#0D121D]/90 backdrop-blur-xl border border-white/[0.06] p-4 sm:p-5 overflow-hidden">
                
                {/* Header: Asset Switcher tabs */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.07]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">Live Spot Terminal</span>
                  </div>

                  <div className="flex bg-white/[0.04] p-0.5 rounded-lg border border-white/[0.06]">
                    {Object.keys(heroCoins).map((key) => (
                      <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                          activeTab === key 
                            ? 'bg-orange-600 text-white shadow-sm' 
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {key}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Price & Status */}
                <div className="mt-3.5 flex items-start justify-between">
                  <div>
                    <div className="text-[11px] font-medium text-slate-400">{currentCoin.name} ({currentCoin.symbol})</div>
                    <div className="text-2xl sm:text-3xl font-black text-white mt-0.5 tracking-tight">
                      {currentCoin.price}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-bold text-xs">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    {currentCoin.change}
                  </div>
                </div>

                {/* Interactive Chart Area (Sleek & Compact) */}
                <div className="mt-3.5 pt-3 border-t border-white/[0.04]">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                    <span>Performance Trend</span>
                    <span className="text-slate-500">24H High: <strong className="text-slate-300 font-mono">{currentCoin.high}</strong></span>
                  </div>

                  <div className="h-20 w-full flex items-center justify-center">
                    <Sparkline
                      data={currentCoin.sparkline}
                      width={340}
                      height={65}
                      isPositive={currentCoin.isPositive}
                      strokeWidth={2}
                      showGradient={true}
                    />
                  </div>
                </div>

                {/* Mock Order Book Visual snippet */}
                <div className="mt-3 pt-2.5 border-t border-white/[0.06]">
                  <div className="text-[10px] font-medium text-slate-400 mb-1.5 flex justify-between">
                    <span>Order Depth (Real-Time)</span>
                    <span className="text-cyan-400 font-mono">Spread: $0.01</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-emerald-400 font-mono font-medium">Bids 68,419.80</span>
                      <div className="w-20 sm:w-24 h-1.5 bg-emerald-500/20 rounded-full overflow-hidden">
                        <div className="w-[82%] h-full bg-emerald-500 rounded-full"></div>
                      </div>
                      <span className="text-slate-400 font-mono text-[10px]">1.42 BTC</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-rose-400 font-mono font-medium">Asks 68,421.20</span>
                      <div className="w-20 sm:w-24 h-1.5 bg-rose-500/20 rounded-full overflow-hidden">
                        <div className="w-[64%] h-full bg-rose-500 rounded-full"></div>
                      </div>
                      <span className="text-slate-400 font-mono text-[10px]">0.98 BTC</span>
                    </div>
                  </div>
                </div>

                {/* Quick Action in Card */}
                <div className="mt-3.5 grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => onOpenTrading(activeTab, 'BUY')}
                    className="py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1"
                  >
                    Quick Buy
                  </button>
                  <button
                    onClick={() => onOpenTrading(activeTab, 'SELL')}
                    className="py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 font-bold text-xs transition-colors flex items-center justify-center gap-1"
                  >
                    Quick Sell
                  </button>
                </div>

              </div>
            </div>

            {/* Floating Trust Badge (Tucked neatly) */}
            <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-3 -left-3 bg-[#0E1524]/95 backdrop-blur-md border border-white/[0.1] px-3 py-1.5 rounded-xl shadow-xl animate-float">
              <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-white leading-tight">SOC-2 Type II Certified</div>
                <div className="text-[10px] text-slate-400">100% Reserve Custody</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Infinite Scrolling Real-Time Market Ticker Ribbon */}
      <div className="mt-14 w-full border-y border-white/[0.08] bg-[#070A0F]/80 backdrop-blur-md py-3 overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap animate-ticker">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <div 
              key={index} 
              className="inline-flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => onSelectStock && onSelectStock(item.s)}
            >
              <span className="text-xs font-bold text-slate-200 tracking-wider">{item.s}</span>
              <span className="text-xs font-mono text-slate-400">{item.p}</span>
              <span className={`text-[11px] font-bold flex items-center ${
                item.up ? 'text-emerald-400' : 'text-rose-400'
              }`}>
                {item.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {item.c}
              </span>
              <span className="text-slate-700 ml-4">•</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
