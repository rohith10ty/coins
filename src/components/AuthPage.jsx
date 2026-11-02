import React, { useState } from 'react';
import { 
  Coins as CoinsIcon, 
  ArrowLeft, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Eye, 
  EyeOff, 
  TrendingUp, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AuthPage({ initialMode = 'signup', onBack, onAuthSuccess }) {
  const [mode, setMode] = useState(initialMode); // 'login' | 'signup'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {}
      
      onAuthSuccess(
        mode === 'login' 
          ? 'Welcome back! Signed in to your Coins Terminal.' 
          : 'Welcome to Coins! Your multi-asset account is active.'
      );
      onBack();
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 flex flex-col relative selection:bg-orange-500 selection:text-white crypto-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Top Header Bar */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-white/[0.06]">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-semibold text-slate-300 hover:text-white transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform text-orange-400" />
          Back to Platform
        </button>

        {/* Brand */}
        <div className="flex items-center">
          <span className="text-xl font-black text-white tracking-tight">
            Coins<span className="text-orange-500">.</span>
          </span>
        </div>

        {/* Security badge */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>256-bit Bank Grade Security</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Form Card (Compact, Fits Screen Perfectly) */}
          <div className="lg:col-span-7 bg-[#0E1320]/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 sm:p-7 shadow-2xl shadow-black/80 relative">
            
            {/* Header & Tabs */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {mode === 'login' ? 'Sign In to Coins' : 'Create Your Account'}
                </h1>
                <p className="text-xs text-slate-400 mt-0.5">
                  {mode === 'login' 
                    ? 'Enter your credentials to access your trading desk' 
                    : 'Institutional execution & 0% commission in 2 minutes'}
                </p>
              </div>

              {/* Pill Switcher */}
              <div className="flex p-1 bg-black/40 rounded-xl border border-white/[0.06] shrink-0">
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    mode === 'login'
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-600/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    mode === 'signup'
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-600/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Quick 1-Click Social Sign-in */}
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              <button
                type="button"
                onClick={() => handleSubmit({ preventDefault: () => {} })}
                className="py-2 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z" />
                  <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.2 2.8-2.5 3.7l3.9 3c2.3-2.1 3.6-5.2 3.6-8.9z" />
                  <path fill="#FBBC05" d="M5.6 14.8c-.3-.8-.4-1.8-.4-2.8s.2-2 .4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z" />
                  <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z" />
                </svg>
                Google
              </button>

              <button
                type="button"
                onClick={() => handleSubmit({ preventDefault: () => {} })}
                className="py-2 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 transition-colors"
              >
                <CoinsIcon className="w-3.5 h-3.5 text-orange-400" />
                Web3 Wallet
              </button>
            </div>

            {/* Separator */}
            <div className="relative my-3.5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/[0.06]" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase">
                <span className="bg-[#0E1320] px-2 text-slate-500 font-semibold tracking-wider">
                  Or with email
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {mode === 'signup' && (
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                    Full Legal Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-black/40 border border-white/[0.1] rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    required
                    placeholder="alex@coins.financial"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-black/40 border border-white/[0.1] rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <label className="font-semibold uppercase tracking-wider">Password</label>
                  {mode === 'login' && (
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-orange-400 hover:text-orange-300 transition-colors">
                      Forgot?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-10 py-2 bg-black/40 border border-white/[0.1] rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember me & Terms */}
              <div className="flex items-center justify-between pt-1 text-xs">
                <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded bg-black/40 border-white/[0.1] text-orange-600 focus:ring-orange-500"
                  />
                  <span>Stay signed in for 30 days</span>
                </label>
              </div>

              {/* Submit CTA with Dark Orange Styling */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-sm shadow-xl shadow-orange-600/25 transition-all flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                ) : (
                  <>
                    <span>{mode === 'login' ? 'Sign In to Terminal' : 'Open Zero-Fee Account'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Toggle Footer text */}
            <div className="mt-4 pt-3 border-t border-white/[0.06] text-center text-xs text-slate-400">
              {mode === 'login' ? (
                <span>
                  Don't have an account?{' '}
                  <button
                    onClick={() => setMode('signup')}
                    className="font-bold text-orange-400 hover:underline"
                  >
                    Create Free Account
                  </button>
                </span>
              ) : (
                <span>
                  Already registered?{' '}
                  <button
                    onClick={() => setMode('login')}
                    className="font-bold text-orange-400 hover:underline"
                  >
                    Sign In
                  </button>
                </span>
              )}
            </div>

          </div>

          {/* Right Column: Platform Intelligence Highlights */}
          <div className="lg:col-span-5 space-y-4 hidden lg:block">
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121827] to-[#0A0E17] border border-white/[0.08] shadow-xl">
              <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                Institutional Edge
              </div>
              <h3 className="text-xl font-black text-white leading-tight">
                One unified portal. Over 5,000+ tradable assets.
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Connect directly to global liquidity pools, spot equities, index derivatives, and deep crypto order books with sub-millisecond execution.
              </p>

              <div className="mt-5 space-y-3 text-xs">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>0.0% Commission:</strong> Zero fees on spot US equities and ETFs.</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>&lt; 12ms Latency:</strong> Smart-Order Routing across global venues.</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>100% Full-Reserve:</strong> Cold custody backed by real-time Merkle proofs.</span>
                </div>
              </div>
            </div>

            {/* Live Ticker Mini-Card */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-slate-400">BTC/USD Spot</span>
                <span className="font-mono text-white font-bold">$68,420.50</span>
              </div>
              <span className="font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                +3.45%
              </span>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
