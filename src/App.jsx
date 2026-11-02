import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketOverview from './components/MarketOverview';
import StockMarket from './components/StockMarket';
import PortfolioDashboard from './components/PortfolioDashboard';
import Watchlist from './components/Watchlist';
import TradingSection from './components/TradingSection';
import MarketNews from './components/MarketNews';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import AuthPage from './components/AuthPage';
import Toast from './components/Toast';

import { 
  MARKET_INDICES, 
  INITIAL_STOCKS, 
  INITIAL_HOLDINGS 
} from './data/mockData';

export default function App() {
  // Page view state: 'landing' | 'auth'
  const [currentView, setCurrentView] = useState('landing');
  const [authMode, setAuthMode] = useState('signup'); // 'login' | 'signup'

  // Lenis smooth scroll initialization (only on landing)
  useEffect(() => {
    if (currentView !== 'landing') return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [currentView]);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  // Application State
  const [stocks, setStocks] = useState(INITIAL_STOCKS);
  const [indices] = useState(MARKET_INDICES);
  const [watchlist, setWatchlist] = useState(['NVDA', 'BTC', 'AAPL', 'SOL']);
  const [holdings, setHoldings] = useState(INITIAL_HOLDINGS);
  const [portfolio, setPortfolio] = useState({
    totalValue: 134411.34,
    cash: 32500.00,
    totalProfit: 24190.25,
    profitPercent: 21.94,
    todayChange: 1842.10,
    todayPercent: 1.39
  });

  // Trading pre-fill state
  const [selectedTradeSymbol, setSelectedTradeSymbol] = useState('NVDA');
  const [initialOrderSide, setInitialOrderSide] = useState('BUY');

  // Auth modal fallback state
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' });

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState(null);

  // Open Auth Page
  const handleOpenAuth = (mode = 'signup') => {
    setAuthMode(mode);
    setCurrentView('auth');
  };

  // Toggle watchlist handler
  const handleToggleWatchlist = (symbol) => {
    if (watchlist.includes(symbol)) {
      setWatchlist(prev => prev.filter(s => s !== symbol));
      setToastMessage(`Removed ${symbol} from your Watchlist`);
    } else {
      setWatchlist(prev => [...prev, symbol]);
      setToastMessage(`Added ${symbol} to your Watchlist`);
    }
  };

  // Quick trade navigation handler
  const handleQuickTrade = (symbol, side = 'BUY') => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
    }
    setSelectedTradeSymbol(symbol);
    setInitialOrderSide(side);
    setTimeout(() => {
      const tradingSection = document.querySelector('#trading');
      if (tradingSection) {
        tradingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Execute Order handler (Real state updates!)
  const handleExecuteOrder = (order) => {
    const { symbol, name, side, shares, price, total, type } = order;

    let updatedCash = portfolio.cash;
    let updatedHoldings = [...holdings];

    if (side === 'BUY') {
      updatedCash -= total;
      const existingIndex = updatedHoldings.findIndex(h => h.symbol === symbol);

      if (existingIndex > -1) {
        const existing = updatedHoldings[existingIndex];
        const newTotalShares = existing.shares + shares;
        const newAvgBuy = ((existing.shares * existing.avgBuyPrice) + (shares * price)) / newTotalShares;
        const newValue = newTotalShares * price;
        const newProfit = newValue - (newTotalShares * newAvgBuy);

        updatedHoldings[existingIndex] = {
          ...existing,
          shares: Math.round(newTotalShares * 1000) / 1000,
          avgBuyPrice: Math.round(newAvgBuy * 100) / 100,
          currentPrice: price,
          value: Math.round(newValue * 100) / 100,
          profit: Math.round(newProfit * 100) / 100,
          profitPercent: Math.round(((newProfit / (newTotalShares * newAvgBuy)) * 100) * 100) / 100
        };
      } else {
        updatedHoldings.push({
          symbol,
          name,
          shares,
          avgBuyPrice: price,
          currentPrice: price,
          value: Math.round(total * 100) / 100,
          profit: 0.00,
          profitPercent: 0.00,
          type: type || 'Stock'
        });
      }
    } else {
      // SELL
      updatedCash += total;
      const existingIndex = updatedHoldings.findIndex(h => h.symbol === symbol);

      if (existingIndex > -1) {
        const existing = updatedHoldings[existingIndex];
        const remainingShares = Math.max(0, existing.shares - shares);

        if (remainingShares === 0) {
          updatedHoldings = updatedHoldings.filter(h => h.symbol !== symbol);
        } else {
          const newValue = remainingShares * price;
          const newProfit = newValue - (remainingShares * existing.avgBuyPrice);

          updatedHoldings[existingIndex] = {
            ...existing,
            shares: Math.round(remainingShares * 1000) / 1000,
            currentPrice: price,
            value: Math.round(newValue * 100) / 100,
            profit: Math.round(newProfit * 100) / 100,
            profitPercent: Math.round(((newProfit / (remainingShares * existing.avgBuyPrice)) * 100) * 100) / 100
          };
        }
      }
    }

    // Recalculate total holdings value
    const holdingsTotal = updatedHoldings.reduce((sum, h) => sum + h.value, 0);
    const newTotalPortfolio = holdingsTotal + updatedCash;
    const initialDepositBase = 110221.09;
    const newTotalProfit = newTotalPortfolio - initialDepositBase;
    const newProfitPercent = Math.round(((newTotalProfit / initialDepositBase) * 100) * 100) / 100;

    setHoldings(updatedHoldings);
    setPortfolio(prev => ({
      ...prev,
      cash: Math.round(updatedCash * 100) / 100,
      totalValue: Math.round(newTotalPortfolio * 100) / 100,
      totalProfit: Math.round(newTotalProfit * 100) / 100,
      profitPercent: newProfitPercent
    }));

    setToastMessage(`Executed ${side} order for ${shares} ${symbol} at $${price.toLocaleString()}!`);
  };

  // If user is on the dedicated Auth Page
  if (currentView === 'auth') {
    return (
      <div className="min-h-screen bg-[#080B11] text-slate-100 selection:bg-orange-500 selection:text-white">
        <Toast 
          message={toastMessage} 
          onClose={() => setToastMessage(null)} 
        />
        <AuthPage
          initialMode={authMode}
          onBack={() => setCurrentView('landing')}
          onAuthSuccess={(msg) => setToastMessage(msg)}
        />
      </div>
    );
  }

  // Main Platform Landing View
  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 flex flex-col relative selection:bg-orange-500 selection:text-white">
      {/* Toast Feedback */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />

      {/* Navigation Bar */}
      <Navbar
        onOpenAuth={handleOpenAuth}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenTrading={(sym, side) => handleQuickTrade(sym, side)}
          onOpenAuth={handleOpenAuth}
          onSelectStock={(sym) => handleQuickTrade(sym, 'BUY')}
        />

        {/* Market Overview */}
        <MarketOverview
          indices={indices}
          onSelectIndex={(sym) => {
            const mapped = sym === 'BITCOIN' ? 'BTC' : sym === 'ETHEREUM' ? 'ETH' : 'SPY';
            handleQuickTrade(mapped, 'BUY');
          }}
        />

        {/* Stock Market Section */}
        <StockMarket
          stocks={stocks}
          watchlist={watchlist}
          onToggleWatchlist={handleToggleWatchlist}
          onBuy={(stock) => handleQuickTrade(stock.symbol, 'BUY')}
          onSell={(stock) => handleQuickTrade(stock.symbol, 'SELL')}
          onSelectStock={(stock) => handleQuickTrade(stock.symbol, 'BUY')}
        />

        {/* Portfolio Dashboard */}
        <PortfolioDashboard
          portfolio={portfolio}
          holdings={holdings}
          onQuickTrade={(sym) => handleQuickTrade(sym, 'SELL')}
        />

        {/* Watchlist */}
        <Watchlist
          watchlist={watchlist}
          stocks={stocks}
          onToggleWatchlist={handleToggleWatchlist}
          onQuickTrade={(sym) => handleQuickTrade(sym, 'BUY')}
        />

        {/* Trading Section / Interface */}
        <TradingSection
          stocks={stocks}
          selectedSymbol={selectedTradeSymbol}
          initialOrderSide={initialOrderSide}
          portfolioCash={portfolio.cash}
          holdings={holdings}
          onExecuteOrder={handleExecuteOrder}
        />

        {/* Market News */}
        <MarketNews />

        {/* Why Choose Us */}
        <WhyChooseUs
          onOpenAuth={handleOpenAuth}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenAuth={handleOpenAuth}
      />

      {/* Authentication Modal (compact fallback) */}
      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        onClose={() => setAuthModal({ isOpen: false, mode: 'login' })}
        onAuthSuccess={(msg) => setToastMessage(msg)}
        onOpenFullPage={(mode) => handleOpenAuth(mode)}
      />
    </div>
  );
}
