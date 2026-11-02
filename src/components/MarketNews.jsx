import React, { useState } from 'react';
import { 
  Newspaper, 
  Clock, 
  ArrowRight, 
  X, 
  Share2, 
  Bookmark, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { MARKET_NEWS } from '../data/mockData';

export default function MarketNews() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'Macro Economy', 'Cryptocurrency', 'Equities', 'Commodities'];

  const filteredNews = MARKET_NEWS.filter(article => {
    if (activeCategory === 'ALL') return true;
    return article.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section id="news" className="py-20 bg-[#080B11]/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <Newspaper className="w-4 h-4" />
              Editorial & Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Market Intelligence & News
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Curated analysis, macroeconomic breakdowns, and breaking market narratives.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === c
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                    : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {c === 'ALL' ? 'All Coverage' : c}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNews.map((news) => (
            <article
              key={news.id}
              className="group rounded-2xl bg-[#0F1422]/80 hover:bg-[#141B2E] border border-white/[0.06] hover:border-orange-500/30 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedArticle(news)}
            >
              <div>
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1422] via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-cyan-300 border border-white/[0.1]">
                    {news.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                    <span className="font-medium text-slate-400">{news.source}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {news.time}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
                    {news.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {news.snippet}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-5 pb-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-semibold text-orange-400 group-hover:text-amber-300 transition-colors">
                <span>Read Full Brief</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Read More Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F1422] border border-white/[0.1] shadow-2xl animate-in zoom-in-95">
            
            {/* Modal Image Header */}
            <div className="relative h-60 w-full">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1422] via-[#0F1422]/50 to-transparent" />
              
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-slate-300 hover:text-white border border-white/[0.1] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-orange-600/80 backdrop-blur-md text-xs font-semibold text-white">
                  {selectedArticle.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-2 leading-tight">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">{selectedArticle.author}</span>
                  <span>•</span>
                  <span>{selectedArticle.source}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                </div>
                <span>{selectedArticle.readTime}</span>
              </div>

              <div className="py-5 space-y-4 text-sm text-slate-300 leading-relaxed">
                <p className="text-base text-slate-100 font-medium">
                  {selectedArticle.snippet}
                </p>
                <p>
                  {selectedArticle.fullContent}
                </p>
                <p>
                  Coins Institutional Analytics desk continues to monitor liquidity parameters and order flow metrics across global Tier-1 matching engines. Traders are encouraged to utilize our risk calculator and automated stop-loss mechanisms when navigating periods of heightened market volatility.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs text-slate-500">Source: Verified Financial Wire</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold transition-colors shadow-lg shadow-orange-600/20"
                >
                  Close Article
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
