import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Search, 
  Star, 
  LayoutGrid, 
  Table as TableIcon,
  TrendingUp,
  SlidersHorizontal,
  Flame
} from 'lucide-react';
import Sparkline from './Sparkline';

export default function StockMarket({ 
  stocks, 
  watchlist, 
  onToggleWatchlist, 
  onBuy, 
  onSell, 
  onSelectStock 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

  const categories = [
    { label: 'All Assets', value: 'ALL' },
    { label: '🔥 Gainers', value: 'GAINERS' },
    { label: '📉 Losers', value: 'LOSERS' },
    { label: 'Tech Giants', value: 'Tech' },
    { label: 'Crypto', value: 'Crypto' },
    { label: 'ETFs', value: 'ETFs' },
  ];

  const filteredStocks = stocks.filter((stock) => {
    // Search filter
    const matchesSearch = 
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    // Category filter
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'GAINERS') return stock.change > 0;
    if (activeCategory === 'LOSERS') return stock.change < 0;
    return stock.category.includes(activeCategory);
  });

  return (
    <section id="stocks" className="py-20 bg-[#080B11]/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <TrendingUp className="w-4 h-4" />
              Live Equities & Crypto
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Stock & Asset Market
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Real-time prices, volume liquidity, and instant trade execution across 5,000+ assets.
            </p>
          </div>

          {/* Controls: Search and View Mode Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search symbol or name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white/[0.04] border border-white/[0.1] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center p-1 bg-white/[0.04] border border-white/[0.08] rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-indigo-600 text-white shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg transition-all ${
                  viewMode === 'table' 
                    ? 'bg-indigo-600 text-white shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Table View"
              >
                <TableIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.value
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06] hover:bg-white/[0.06]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Empty state if nothing matches */}
        {filteredStocks.length === 0 && (
          <div className="text-center py-16 bg-[#0E1320]/40 rounded-2xl border border-white/[0.06]">
            <p className="text-slate-400 text-sm">No stocks or assets found matching "{searchTerm}".</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('ALL'); }}
              className="mt-3 px-4 py-1.5 rounded-lg bg-indigo-600/40 text-indigo-300 text-xs font-semibold hover:bg-indigo-600/60 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredStocks.map((stock) => {
              const isWatched = watchlist.includes(stock.symbol);
              const isPositive = stock.change >= 0;

              return (
                <div
                  key={stock.id}
                  className="group relative rounded-2xl bg-[#0F1420]/80 hover:bg-[#151D2E] border border-white/[0.06] hover:border-indigo-500/30 p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/40 flex flex-col justify-between"
                >
                  {/* Top Bar inside Card */}
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stock.badgeColor} p-0.5 shadow-md flex items-center justify-center font-bold text-white text-xs`}>
                          {stock.symbol.slice(0, 3)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-base text-white tracking-tight">
                              {stock.symbol}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-400 font-medium">
                              {stock.category}
                            </span>
                          </div>
                          <div className="text-xs text-slate-400 truncate max-w-[130px]">
                            {stock.name}
                          </div>
                        </div>
                      </div>

                      {/* Watchlist Star Toggle */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWatchlist(stock.symbol);
                        }}
                        className={`p-1.5 rounded-lg border transition-all ${
                          isWatched
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                            : 'bg-white/[0.03] border-white/[0.06] text-slate-500 hover:text-slate-300'
                        }`}
                        title={isWatched ? 'Remove from Watchlist' : 'Add to Watchlist'}
                      >
                        <Star className={`w-4 h-4 ${isWatched ? 'fill-amber-400' : ''}`} />
                      </button>
                    </div>

                    {/* Price and 24h change */}
                    <div className="mt-5 flex items-baseline justify-between">
                      <div className="text-2xl font-black text-white font-mono tracking-tight">
                        ${stock.price >= 1 ? stock.price.toLocaleString(undefined, { minimumFractionDigits: 2 }) : stock.price}
                      </div>

                      <div className={`flex items-center gap-0.5 text-xs font-bold font-mono px-2 py-1 rounded-md ${
                        isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                      }`}>
                        {isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                        {isPositive ? `+${stock.change}%` : `${stock.change}%`}
                      </div>
                    </div>

                    {/* Stats summary */}
                    <div className="mt-3 grid grid-cols-2 text-[11px] text-slate-500 font-mono">
                      <div>Vol: <span className="text-slate-400">{stock.volume}</span></div>
                      <div className="text-right">Cap: <span className="text-slate-400">{stock.marketCap}</span></div>
                    </div>
                  </div>

                  {/* Sparkline & Action Buttons */}
                  <div className="mt-5 pt-4 border-t border-white/[0.05]">
                    <div className="h-10 w-full flex items-center justify-center mb-4">
                      <Sparkline
                        data={stock.sparkline}
                        width={240}
                        height={38}
                        isPositive={isPositive}
                        strokeWidth={2}
                        showGradient={true}
                        id={`stock-grid-${stock.id}`}
                      />
                    </div>

                    {/* Buy and Sell Interactive Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onBuy(stock)}
                        className="py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 border border-emerald-500/30 text-xs font-bold transition-all duration-200"
                      >
                        Buy
                      </button>
                      <button
                        onClick={() => onSell(stock)}
                        className="py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500 text-rose-400 hover:text-white border border-rose-500/30 text-xs font-bold transition-all duration-200"
                      >
                        Sell
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Table View */}
        {viewMode === 'table' && (
          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0E1320]/60 backdrop-blur-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] text-[11px] font-semibold uppercase text-slate-400 tracking-wider bg-white/[0.02]">
                  <th className="py-4 px-5">Asset / Symbol</th>
                  <th className="py-4 px-5">Market Price</th>
                  <th className="py-4 px-5">24h Change</th>
                  <th className="py-4 px-5 hidden md:table-cell">24h Range</th>
                  <th className="py-4 px-5 hidden lg:table-cell">24h Volume</th>
                  <th className="py-4 px-5 hidden sm:table-cell">Trend</th>
                  <th className="py-4 px-5 text-right">Quick Trade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] text-sm">
                {filteredStocks.map((stock) => {
                  const isWatched = watchlist.includes(stock.symbol);
                  const isPositive = stock.change >= 0;

                  return (
                    <tr 
                      key={stock.id}
                      className="hover:bg-white/[0.03] transition-colors group"
                    >
                      {/* Asset & Name */}
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => onToggleWatchlist(stock.symbol)}
                            className={`transition-colors ${
                              isWatched ? 'text-amber-400' : 'text-slate-600 hover:text-slate-400'
                            }`}
                          >
                            <Star className={`w-4 h-4 ${isWatched ? 'fill-amber-400' : ''}`} />
                          </button>
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stock.badgeColor} flex items-center justify-center font-bold text-[10px] text-white`}>
                            {stock.symbol.slice(0, 3)}
                          </div>
                          <div>
                            <span className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {stock.symbol}
                            </span>
                            <span className="block text-xs text-slate-400 truncate max-w-[120px]">
                              {stock.name}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Market Price */}
                      <td className="py-4 px-5 font-mono font-bold text-white">
                        ${stock.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>

                      {/* 24h Change */}
                      <td className="py-4 px-5 font-mono">
                        <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-xs font-bold ${
                          isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                        }`}>
                          {isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                          {isPositive ? `+${stock.change}%` : `${stock.change}%`}
                        </span>
                      </td>

                      {/* 24h High/Low */}
                      <td className="py-4 px-5 font-mono text-xs text-slate-400 hidden md:table-cell">
                        ${stock.low24h} - ${stock.high24h}
                      </td>

                      {/* Volume */}
                      <td className="py-4 px-5 font-mono text-xs text-slate-400 hidden lg:table-cell">
                        {stock.volume}
                      </td>

                      {/* Sparkline */}
                      <td className="py-4 px-5 hidden sm:table-cell">
                        <div className="w-24 h-7">
                          <Sparkline
                            data={stock.sparkline}
                            width={100}
                            height={28}
                            isPositive={isPositive}
                            strokeWidth={1.5}
                            showGradient={false}
                            id={`stock-table-${stock.id}`}
                          />
                        </div>
                      </td>

                      {/* Trade Actions */}
                      <td className="py-4 px-5 text-right">
                        <div className="inline-flex items-center gap-2">
                          <button
                            onClick={() => onBuy(stock)}
                            className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 font-bold text-xs transition-colors"
                          >
                            Buy
                          </button>
                          <button
                            onClick={() => onSell(stock)}
                            className="px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500 text-rose-400 hover:text-white font-bold text-xs transition-colors"
                          >
                            Sell
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
}
