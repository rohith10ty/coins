import React, { useState } from 'react';
import { 
  X, 
  Coins as CoinsIcon, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  CheckCircle,
  Eye,
  EyeOff,
  Maximize2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AuthModal({ 
  isOpen, 
  onClose, 
  initialMode = 'login', 
  onAuthSuccess, 
  onOpenFullPage 
}) {
  const [mode, setMode] = useState(initialMode); // 'login' | 'signup'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {}
      
      onAuthSuccess(mode === 'login' ? 'Signed in successfully!' : 'Account created successfully! Welcome to Coins.');
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-sm rounded-2xl bg-[#0F1422] border border-white/[0.1] p-5 sm:p-6 shadow-2xl animate-in zoom-in-95 max-h-[92vh] overflow-y-auto">
        
        {/* Top Control Buttons */}
        <div className="absolute top-3.5 right-3.5 flex items-center gap-1">
          {onOpenFullPage && (
            <button
              onClick={() => { onClose(); onOpenFullPage(mode); }}
              className="p-1.5 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white transition-colors"
              title="Open full page"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Header: Compact */}
        <div className="text-center mb-4 pt-1">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-500 p-[1.5px] shadow-lg shadow-orange-600/25 mx-auto mb-2">
            <div className="w-full h-full bg-[#080B11] rounded-[9px] flex items-center justify-center">
              <CoinsIcon className="w-4 h-4 text-orange-400" />
            </div>
          </div>
          <h3 className="text-lg font-black text-white tracking-tight">
            {mode === 'login' ? 'Sign In to Coins' : 'Create Coins Account'}
          </h3>
          <p className="text-[11px] text-slate-400 mt-0.5">
            {mode === 'login' 
              ? 'Access institutional multi-asset trading' 
              : 'Join 2.4M+ traders with 0% commission'}
          </p>
        </div>

        {/* Tab switcher: Compact */}
        <div className="grid grid-cols-2 gap-1 p-0.5 rounded-xl bg-black/40 border border-white/[0.06] mb-4">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
              mode === 'login'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
              mode === 'signup'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Compact Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          
          {mode === 'signup' && (
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                Full Legal Name
              </label>
              <div className="relative">
                <User className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  required
                  placeholder="Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-black/40 border border-white/[0.1] rounded-xl text-white text-xs focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-[11px] font-semibold text-slate-400 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-black/40 border border-white/[0.1] rounded-xl text-white text-xs focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
              <label className="font-semibold">Password</label>
              {mode === 'login' && (
                <a href="#" onClick={(e) => e.preventDefault()} className="text-orange-400 hover:underline">
                  Forgot?
                </a>
              )}
            </div>
            <div className="relative">
              <Lock className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-8 pr-9 py-1.5 bg-black/40 border border-white/[0.1] rounded-xl text-white text-xs focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-xs shadow-lg shadow-orange-600/25 transition-all flex items-center justify-center gap-1.5 mt-1"
          >
            {loading ? (
              <span className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-white border-t-transparent"></span>
            ) : (
              <>
                <span>{mode === 'login' ? 'Sign In to Terminal' : 'Open Zero-Fee Account'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>

        </form>

        {/* Divider: Compact */}
        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/[0.08]" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase">
            <span className="bg-[#0F1422] px-2 text-slate-500">Or continue with</span>
          </div>
        </div>

        {/* Social Logins: Compact */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => handleSubmit({ preventDefault: () => {} })}
            className="py-1.5 px-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[11px] font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
          >
            <svg className="w-3 h-3" viewBox="0 0 24 24">
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
            className="py-1.5 px-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[11px] font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
          >
            <CoinsIcon className="w-3 h-3 text-orange-400" />
            Web3 Wallet
          </button>
        </div>

      </div>
    </div>
  );
}
