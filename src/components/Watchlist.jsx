import React, { useState } from 'react';
import { 
  Star, 
  Trash2, 
  Plus, 
  ArrowUpRight, 
  ArrowDownRight, 
  Search, 
  TrendingUp,
  BookmarkCheck
} from 'lucide-react';
import Sparkline from './Sparkline';

export default function Watchlist({ 
  watchlist, 
  stocks, 
  onToggleWatchlist, 
  onQuickTrade 
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Get full stock objects for items in watchlist
  const watchedStocks = stocks.filter(s => watchlist.includes(s.symbol));

  // Available stocks to add that are NOT currently in watchlist
  const unselectedStocks = stocks.filter(
    s => !watchlist.includes(s.symbol) &&
    (s.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || 
     s.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="watchlist" className="py-20 bg-[#080B11]/95 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <BookmarkCheck className="w-4 h-4" />
              Custom Tracking
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Personalized Watchlist
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Curate and monitor your priority securities with instantaneous price alerts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAdding(!isAdding)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 text-xs font-semibold transition-all"
            >
              <Plus className="w-4 h-4" />
              {isAdding ? 'Close Search' : 'Add Stock'}
            </button>
          </div>
        </div>

        {/* Add Stock Search Drawer */}
        {isAdding && (
          <div className="mb-8 p-5 rounded-2xl bg-[#0F1422] border border-indigo-500/30 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Select an asset to track
              </span>
              <span className="text-xs text-slate-500">{unselectedStocks.length} assets available</span>
            </div>

            <div className="relative mb-3">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search stocks, crypto, ETFs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-black/40 border border-white/[0.1] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pt-1">
              {unselectedStocks.length > 0 ? (
                unselectedStocks.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      onToggleWatchlist(s.symbol);
                      setSearchQuery('');
                    }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-indigo-600 text-slate-300 hover:text-white border border-white/[0.06] text-xs font-medium transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5 text-indigo-400" />
                    <strong>{s.symbol}</strong> - {s.name}
                  </button>
                ))
              ) : (
                <span className="text-xs text-slate-500 py-1">All matching assets are already in your watchlist!</span>
              )}
            </div>
          </div>
        )}

        {/* Watchlist Cards Grid */}
        {watchedStocks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {watchedStocks.map((stock) => {
              const isPositive = stock.change >= 0;

              return (
                <div
                  key={stock.id}
                  className="group relative rounded-2xl bg-[#0F1420]/80 hover:bg-[#141B2D] border border-white/[0.08] hover:border-amber-500/30 p-5 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Symbol & Remove Button */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${stock.badgeColor} flex items-center justify-center font-bold text-xs text-white`}>
                          {stock.symbol.slice(0, 3)}
                        </div>
                        <div>
                          <div className="font-bold text-base text-white tracking-tight">
                            {stock.symbol}
                          </div>
                          <div className="text-xs text-slate-400 truncate max-w-[120px]">
                            {stock.name}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onToggleWatchlist(stock.symbol)}
                        className="p-1.5 rounded-lg bg-white/[0.04] text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                        title="Remove from Watchlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Price and 24h change */}
                    <div className="mt-5 flex items-baseline justify-between">
                      <div className="text-2xl font-black text-white font-mono tracking-tight">
                        ${stock.price >= 1 ? stock.price.toLocaleString(undefined, { minimumFractionDigits: 2 }) : stock.price}
                      </div>

                      <div className={`flex items-center gap-0.5 text-xs font-bold font-mono px-2 py-0.5 rounded ${
                        isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                      }`}>
                        {isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                        {isPositive ? `+${stock.change}%` : `${stock.change}%`}
                      </div>
                    </div>
                  </div>

                  {/* Sparkline & Quick Trade Button */}
                  <div className="mt-5 pt-4 border-t border-white/[0.05]">
                    <div className="h-9 w-full flex items-center justify-center mb-3">
                      <Sparkline
                        data={stock.sparkline}
                        width={220}
                        height={32}
                        isPositive={isPositive}
                        strokeWidth={2}
                        showGradient={true}
                        id={`watch-${stock.id}`}
                      />
                    </div>

                    <button
                      onClick={() => onQuickTrade(stock.symbol)}
                      className="w-full py-2 rounded-xl bg-white/[0.04] hover:bg-indigo-600 text-slate-300 hover:text-white border border-white/[0.08] text-xs font-bold transition-all duration-200"
                    >
                      Instant Trade
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16 bg-[#0E1320]/40 rounded-2xl border border-white/[0.06]">
            <Star className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h4 className="text-base font-bold text-white">Your Watchlist is Empty</h4>
            <p className="text-slate-400 text-xs mt-1 max-w-sm mx-auto">
              Star your favorite equities and crypto assets from the Stock Market table or click below to populate.
            </p>
            <button
              onClick={() => setIsAdding(true)}
              className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors"
            >
              Browse &amp; Add Assets
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
