import React, { useState, useEffect } from 'react';
import { 
  Coins as CoinsIcon, 
  TrendingUp, 
  Menu, 
  X, 
  User, 
  ArrowRight, 
  Search,
  Bell,
  ShieldCheck
} from 'lucide-react';

export default function Navbar({ onOpenAuth, activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Markets', href: '#markets' },
    { name: 'Stocks', href: '#stocks' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Watchlist', href: '#watchlist' },
    { name: 'Trading', href: '#trading' },
    { name: 'News', href: '#news' },
    { name: 'Why Us', href: '#why-us' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080B11]/85 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center group cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-amber-200 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
                Coins<span className="text-orange-500">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 -mt-1 font-semibold">
                Exchange &amp; Terminal
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Live Status indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              NYSE &amp; Crypto Live
            </div>

            <button
              onClick={() => onOpenAuth('login')}
              className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </button>

            <button
              onClick={() => onOpenAuth('signup')}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white text-sm font-semibold shadow-lg shadow-orange-600/25 hover:shadow-orange-500/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Open Account
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-3 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-semibold shadow-md shadow-orange-600/30"
            >
              Join
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0A0E17]/95 backdrop-blur-xl border-b border-white/[0.1] shadow-2xl px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <span className="text-xs text-slate-400 font-medium">Market Feeds</span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Markets 24/7 Live
              </span>
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="py-2.5 text-base font-medium text-slate-200 hover:text-orange-400 border-b border-white/[0.04] transition-colors"
              >
                {item.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenAuth('login'); }}
                className="w-full py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-sm font-semibold text-slate-200 hover:bg-white/[0.1]"
              >
                Sign In
              </button>
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenAuth('signup'); }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-sm font-semibold text-white shadow-lg shadow-orange-600/25"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
