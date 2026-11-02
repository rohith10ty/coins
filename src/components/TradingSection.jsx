import React, { useState, useEffect } from 'react';
import { 
  ArrowRightLeft, 
  CheckCircle2, 
  AlertCircle, 
  DollarSign, 
  ShieldCheck, 
  Zap, 
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TradingSection({ 
  stocks, 
  selectedSymbol, 
  initialOrderSide = 'BUY', 
  portfolioCash, 
  holdings, 
  onExecuteOrder 
}) {
  const [currentSymbol, setCurrentSymbol] = useState(selectedSymbol || 'NVDA');
  const [orderSide, setOrderSide] = useState(initialOrderSide); // 'BUY' | 'SELL'
  const [orderType, setOrderType] = useState('Market'); // 'Market' | 'Limit'
  const [quantity, setQuantity] = useState('1');
  const [limitPrice, setLimitPrice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);

  // Sync with prop changes if passed from outside
  useEffect(() => {
    if (selectedSymbol) {
      setCurrentSymbol(selectedSymbol);
    }
  }, [selectedSymbol]);

  useEffect(() => {
    if (initialOrderSide) {
      setOrderSide(initialOrderSide);
    }
  }, [initialOrderSide]);

  // Current selected stock data
  const currentStock = stocks.find(s => s.symbol === currentSymbol) || stocks[0];

  // Set default limit price when stock changes
  useEffect(() => {
    if (currentStock) {
      setLimitPrice(currentStock.price.toString());
    }
  }, [currentStock]);

  const activePrice = orderType === 'Market' ? currentStock.price : (parseFloat(limitPrice) || currentStock.price);
  const numQuantity = parseFloat(quantity) || 0;
  const estimatedTotal = numQuantity * activePrice;

  // Find user's existing holding for this stock
  const currentHolding = holdings.find(h => h.symbol === currentSymbol);
  const userShares = currentHolding ? currentHolding.shares : 0;

  // Handle Quick Percentage Presets
  const handlePreset = (pct) => {
    if (orderSide === 'BUY') {
      const maxAffordable = (portfolioCash * (pct / 100)) / activePrice;
      // Round to 4 decimal places for crypto, 2 for stocks
      const rounded = currentStock.category === 'Crypto' 
        ? Math.floor(maxAffordable * 1000) / 1000 
        : Math.floor(maxAffordable * 100) / 100;
      setQuantity(rounded > 0 ? rounded.toString() : '1');
    } else {
      // Selling based on owned shares
      const toSell = userShares * (pct / 100);
      const rounded = currentStock.category === 'Crypto'
        ? Math.floor(toSell * 1000) / 1000
        : Math.floor(toSell * 100) / 100;
      setQuantity(rounded > 0 ? rounded.toString() : '0');
    }
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();

    if (numQuantity <= 0) {
      alert('Please enter a valid quantity greater than zero.');
      return;
    }

    if (orderSide === 'BUY' && estimatedTotal > portfolioCash) {
      alert(`Insufficient funds. You have $${portfolioCash.toLocaleString()} available.`);
      return;
    }

    if (orderSide === 'SELL' && numQuantity > userShares) {
      alert(`Insufficient shares. You only own ${userShares} shares of ${currentSymbol}.`);
      return;
    }

    // Open Confirmation Dialog
    setConfirmationModal({
      symbol: currentSymbol,
      name: currentStock.name,
      side: orderSide,
      type: orderType,
      quantity: numQuantity,
      price: activePrice,
      total: estimatedTotal,
      fee: 0.00
    });
  };

  const confirmAndExecute = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }

      onExecuteOrder({
        symbol: currentSymbol,
        name: currentStock.name,
        side: orderSide,
        shares: numQuantity,
        price: activePrice,
        total: estimatedTotal,
        type: currentStock.category
      });

      setIsSubmitting(false);
      setConfirmationModal(null);
    }, 700);
  };

  return (
    <section id="trading" className="py-20 bg-[#080B11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              Order Execution Desk
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Instant Trading Terminal
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Zero commission direct market access. Execute spot orders with sub-millisecond precision.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300">
            <span>Buying Power:</span>
            <strong className="text-emerald-400">${portfolioCash.toLocaleString(undefined, { minimumFractionDigits: 2 })}</strong>
          </div>
        </div>

        {/* Main Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Order Controls Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0F1422]/90 border border-white/[0.08] p-6 shadow-2xl relative">
            
            {/* Asset Selector Dropdown / Pill Row */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Select Instrument
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {stocks.slice(0, 6).map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setCurrentSymbol(s.symbol)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold font-mono transition-all border ${
                      currentSymbol === s.symbol
                        ? 'bg-orange-600 text-white border-orange-500 shadow-md shadow-orange-600/30'
                        : 'bg-white/[0.03] text-slate-400 border-white/[0.06] hover:bg-white/[0.07] hover:text-white'
                    }`}
                  >
                    {s.symbol}
                  </button>
                ))}
              </div>
            </div>

            {/* Buy / Sell Tabs */}
            <div className="grid grid-cols-2 gap-3 mb-6 p-1 rounded-xl bg-black/40 border border-white/[0.06]">
              <button
                type="button"
                onClick={() => setOrderSide('BUY')}
                className={`py-2.5 rounded-lg text-sm font-bold transition-all ${
                  orderSide === 'BUY'
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Buy {currentSymbol}
              </button>
              <button
                type="button"
                onClick={() => setOrderSide('SELL')}
                className={`py-2.5 rounded-lg text-sm font-bold transition-all ${
                  orderSide === 'SELL'
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Sell {currentSymbol}
              </button>
            </div>

            {/* Order Type Buttons */}
            <div className="flex items-center gap-2 mb-6">
              {['Market', 'Limit', 'Stop-Loss'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setOrderType(type === 'Stop-Loss' ? 'Limit' : type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    orderType === (type === 'Stop-Loss' ? 'Limit' : type)
                      ? 'bg-white/[0.1] text-white border border-white/[0.2]'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-5">
              
              {/* Limit Price Field if Limit selected */}
              {orderType === 'Limit' && (
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                    <span>Limit Price</span>
                    <span className="font-mono text-slate-500">Market: ${currentStock.price}</span>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                    <input
                      type="number"
                      step="any"
                      value={limitPrice}
                      onChange={(e) => setLimitPrice(e.target.value)}
                      className="w-full pl-8 pr-4 py-2.5 bg-black/40 border border-white/[0.1] rounded-xl text-white font-mono text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              )}

              {/* Quantity Field */}
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                  <span>Order Quantity (Units / Shares)</span>
                  <span className="text-slate-400">
                    Owned: <strong className="text-white font-mono">{userShares}</strong>
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    step="any"
                    min="0"
                    placeholder="0.00"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-4 py-2.5 bg-black/40 border border-white/[0.1] rounded-xl text-white font-mono text-sm focus:outline-none focus:border-orange-500"
                    required
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 font-mono">
                    {currentSymbol}
                  </span>
                </div>
              </div>

              {/* Percentage Presets */}
              <div className="grid grid-cols-4 gap-2">
                {[25, 50, 75, 100].map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => handlePreset(pct)}
                    className="py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    {pct}%
                  </button>
                ))}
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all shadow-xl ${
                  orderSide === 'BUY'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 shadow-emerald-500/20'
                    : 'bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 text-white shadow-rose-500/20'
                }`}
              >
                Review &amp; Place {orderSide} Order
              </button>

            </form>
          </div>

          {/* Right Side: Order Summary & Execution Diagnostics */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Asset Snapshot */}
            <div className="rounded-2xl bg-[#0F1422]/70 border border-white/[0.08] p-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${currentStock.badgeColor} flex items-center justify-center font-bold text-white text-xs`}>
                    {currentStock.symbol.slice(0, 3)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base leading-none">{currentStock.name}</h4>
                    <span className="text-xs text-slate-400 font-mono">{currentStock.symbol} • {currentStock.category}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-lg font-black text-white font-mono">
                    ${currentStock.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </div>
                  <span className={`text-xs font-mono font-bold ${currentStock.change >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {currentStock.change >= 0 ? '+' : ''}{currentStock.change}%
                  </span>
                </div>
              </div>

              {/* Diagnostics Grid */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-slate-500 block">24h High</span>
                  <span className="text-slate-200 font-mono font-semibold">${currentStock.high24h}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-slate-500 block">24h Low</span>
                  <span className="text-slate-200 font-mono font-semibold">${currentStock.low24h}</span>
                </div>
              </div>
            </div>

            {/* Order Summary Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#111726] to-[#0D121D] border border-white/[0.08] p-6 shadow-xl">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-3 border-b border-white/[0.06] flex items-center justify-between">
                <span>Order Summary</span>
                <span className="text-[11px] font-normal text-cyan-400 font-mono">ESTIMATED</span>
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Execution Type:</span>
                  <span className="text-white font-medium">{orderType} Order</span>
                </div>

                <div className="flex justify-between text-slate-400">
                  <span>Target Unit Price:</span>
                  <span className="font-mono text-white">${activePrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>

                <div className="flex justify-between text-slate-400">
                  <span>Quantity:</span>
                  <span className="font-mono text-white">{numQuantity} {currentSymbol}</span>
                </div>

                <div className="flex justify-between text-slate-400">
                  <span>Brokerage / Commission:</span>
                  <span className="text-emerald-400 font-semibold font-mono">$0.00 (Free)</span>
                </div>

                <div className="flex justify-between text-slate-400">
                  <span>Estimated Slippage:</span>
                  <span className="font-mono text-slate-300">&lt; 0.01%</span>
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex justify-between items-baseline">
                  <span className="text-sm font-bold text-white">Estimated Total:</span>
                  <span className="text-xl font-black text-cyan-300 font-mono">
                    ${estimatedTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              <div className="mt-5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center gap-2.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Protected by Coins Smart Smart-Order Routing (SOR) &amp; negative balance prevention.</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {confirmationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-md rounded-2xl bg-[#0F1422] border border-white/[0.1] p-6 shadow-2xl animate-in zoom-in-95">
            <div className="text-center pb-4 border-b border-white/[0.08]">
              <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 ${
                confirmationModal.side === 'BUY' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
              }`}>
                <ArrowRightLeft className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Confirm {confirmationModal.side} Order
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Please verify the order execution details below before confirmation.
              </p>
            </div>

            <div className="py-4 space-y-2.5 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Asset:</span>
                <span className="font-bold text-white">{confirmationModal.name} ({confirmationModal.symbol})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Action:</span>
                <span className={`font-bold ${confirmationModal.side === 'BUY' ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {confirmationModal.side}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Quantity:</span>
                <span className="font-mono text-white font-bold">{confirmationModal.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Price per unit:</span>
                <span className="font-mono text-white">${confirmationModal.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/[0.06]">
                <span className="font-bold text-white">Total Amount:</span>
                <span className="font-mono text-cyan-300 font-bold text-sm">
                  ${confirmationModal.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setConfirmationModal(null)}
                disabled={isSubmitting}
                className="py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-300 text-xs font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmAndExecute}
                disabled={isSubmitting}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  confirmationModal.side === 'BUY'
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                    : 'bg-rose-500 hover:bg-rose-400 text-white'
                }`}
              >
                {isSubmitting ? (
                  <span className="animate-spin rounded-full h-4 w-4 border-2 border-slate-900 border-t-transparent"></span>
                ) : (
                  'Execute Order'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
