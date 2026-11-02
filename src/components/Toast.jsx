import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X, Sparkles } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0F1523]/95 border border-orange-500/30 text-white shadow-2xl shadow-black/60 backdrop-blur-xl animate-in slide-in-from-bottom-5 fade-in">
      <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div className="pr-2">
        <div className="text-xs font-bold text-white leading-tight">Notification</div>
        <div className="text-xs text-slate-300 mt-0.5">{message}</div>
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
