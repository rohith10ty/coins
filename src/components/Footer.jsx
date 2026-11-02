import React from 'react';
import { 
  Coins as CoinsIcon, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUpRight,
  ShieldCheck,
  Globe
} from 'lucide-react';

export default function Footer({ onOpenAuth }) {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05070B] border-t border-white/[0.08] text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-500 p-[1.5px] shadow-lg shadow-orange-600/25">
                <div className="w-full h-full bg-[#080B11] rounded-[10px] flex items-center justify-center">
                  <CoinsIcon className="w-5 h-5 text-orange-400" />
                </div>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Coins<span className="text-orange-500">.</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              The premier institutional and retail trading portal. Trade equities, spot crypto, ETFs, and market derivatives with 0% commission, lightning liquidity, and bank-grade custody.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/40 transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/40 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/40 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.75a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
                </svg>
              </a>
              <a 
                href="mailto:support@coins.financial" 
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/40 transition-colors"
                aria-label="Email Support"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#markets" onClick={(e) => handleScrollTo(e, '#markets')} className="hover:text-cyan-300 transition-colors">
                  Market Indices
                </a>
              </li>
              <li>
                <a href="#stocks" onClick={(e) => handleScrollTo(e, '#stocks')} className="hover:text-cyan-300 transition-colors">
                  Equities &amp; Crypto
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleScrollTo(e, '#portfolio')} className="hover:text-cyan-300 transition-colors">
                  Portfolio Tracker
                </a>
              </li>
              <li>
                <a href="#watchlist" onClick={(e) => handleScrollTo(e, '#watchlist')} className="hover:text-cyan-300 transition-colors">
                  Custom Watchlist
                </a>
              </li>
              <li>
                <a href="#trading" onClick={(e) => handleScrollTo(e, '#trading')} className="hover:text-cyan-300 transition-colors">
                  Trading Terminal
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Intelligence
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#news" onClick={(e) => handleScrollTo(e, '#news')} className="hover:text-cyan-300 transition-colors">
                  Market News
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleScrollTo(e, '#why-us')} className="hover:text-cyan-300 transition-colors">
                  Security Architecture
                </a>
              </li>
              <li>
                <span className="cursor-pointer hover:text-cyan-300 transition-colors" onClick={() => onOpenAuth('signup')}>
                  API Docs &amp; Webhooks
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-cyan-300 transition-colors" onClick={() => onOpenAuth('signup')}>
                  Fee Schedule (0%)
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-cyan-300 transition-colors" onClick={() => onOpenAuth('signup')}>
                  Institutional Liquidity
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact &amp; Headquarters
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>One World Financial Center, 42nd Fl, New York, NY 10281</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>support@coins.financial</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+1 (800) 264-6789</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Status: All Systems Operational
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory & Risk Disclaimer */}
        <div className="pt-8 border-t border-white/[0.06] space-y-3 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Risk Disclaimer:</strong> Trading stocks, options, ETFs, and digital cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The valuation of financial instruments may fluctuate, and as a result, clients may lose more than their original investment. Coins Financial Group LLC does not provide tax, legal, or investment advice. Past performance is no guarantee of future results.
          </p>
          <p>
            Securities products and services offered through Coins Capital Markets LLC, member FINRA / SIPC. Digital assets custody powered by Coins Institutional Trust, regulated under NYDFS guidelines.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Coins Financial Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
