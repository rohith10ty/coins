# 🪙 Coins — Next-Gen Trading & Investment Platform

![Coins Platform Preview](https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=80)

**Coins** is an institutional-grade, responsive Trading and Investment web platform engineered with **React.js**, **Vite**, and **Tailwind CSS**. Designed with a high-fidelity dark fintech aesthetic, it integrates **Lenis smooth scrolling**, Google's **Outfit** typography, zero-scrollbar styling, and real-time interactive trading mechanics.

---

## 🌟 Key Features & Sections

### 1. 🧭 Navigation Bar
- Premium glowing brand identity (**Coins.**)
- One-click smooth scrolling to all platform sections
- Real-time market status indicator (`NYSE & Crypto 24/7 Live`)
- Authentication entry points (Sign In & Open Account)
- Fully responsive mobile drawer navigation

### 2. ⚡ Hero Section
- Dynamic headline & dual call-to-actions (*Start Trading Now*, *Explore Markets*)
- Institutional trust metrics: **$4.8B+** daily volume, **<12ms** latency, **0.0%** commission
- Real-time interactive Spot Terminal card with dynamic sparkline charts and live order-depth visualizer
- Infinite marquee ticker ribbon displaying live multi-asset prices

### 3. 🌐 Global Market Overview
- Live tracking for major global benchmarks: **S&P 500, NASDAQ, Dow Jones, Bitcoin, Ethereum, Nifty 50**
- Real-time price differentials, percentage shifts, market status indicators (*Open*, *Closed*, *24/7 Live*)
- Interactive SVG sparkline curves with gradient area fills

### 4. 📈 Stock & Asset Market
- Multi-asset catalog covering US Stocks, Big Tech, Crypto, and ETFs
- Category filters: *All Assets*, *🔥 Gainers*, *📉 Losers*, *Tech*, *Crypto*, *ETFs*
- Live search filtering by ticker or company name
- **Dual View Modes**: Interactive Grid Cards vs. Institutional Table View
- Instant **Buy** and **Sell** triggers with Watchlist star toggling

### 5. 💼 Portfolio Dashboard
- Total Portfolio Value with live cash balance
- All-time unrealized Profit & Loss metrics with percentage return
- Today's market delta calculations
- **Interactive Performance Chart**: Timeframe switching (`1D`, `1W`, `1M`, `1Y`, `ALL`) with hover tooltip coordinates
- Dynamic Asset Allocation breakdown (Equities, Crypto, ETFs, Cash)
- Live Holdings management table with direct trade actions

### 6. ⭐ Custom Watchlist
- Add or remove securities dynamically
- Quick search drawer to browse and add untracked stocks
- Sparkline trend charts and instant trade routing

### 7. 🎯 Interactive Trading Terminal
- Multi-instrument selector (`NVDA`, `AAPL`, `BTC`, `ETH`, `TSLA`, `SPY`)
- Execution sides: **Buy** vs. **Sell**
- Order types: **Market** and **Limit** orders
- Quick allocation percentages (**25%**, **50%**, **75%**, **100%**)
- Order summary with estimated slippage and $0 brokerage calculations
- Order confirmation dialog with execution feedback and **Canvas Confetti** celebration
- **Live State Integration**: Executed trades immediately update your portfolio cash, total net worth, and active holdings!

### 8. 📰 Market Intelligence & News
- Curated macroeconomic, equities, and cryptocurrency briefs
- Category filter tabs and reading time indicators
- Interactive **"Read Full Brief"** modal dialog

### 9. 🛡️ Why Choose Us
- 6 core institutional pillars: Bank-Grade Cold Custody, Sub-Millisecond Engine, AI-Powered Analytics, Zero Commission, Unified Account, and 24/7 Dedicated Support
- SOC-2 Type II and regulatory compliance disclosures

### 10. 🔒 Authentication & Feedback System
- Tabbed Sign In and Account Creation modal with social and Web3 wallet connectors
- Non-intrusive floating toast notifications for trade confirmations and watchlist updates

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **React 19** | Component-driven UI architecture & state reactivity |
| **Vite** | Ultra-fast build tool and development server |
| **Tailwind CSS v3** | High-performance fintech styling & responsive utilities |
| **Lenis** (`lenis`) | Silky smooth momentum scrolling experience |
| **Outfit Font** | Modern, premium geometric typography |
| **Lucide React** | Clean, unified financial icon system |
| **Canvas Confetti** | Delightful micro-interactions for trade completions |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/coins-trading-platform.git
   cd coins-trading-platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📦 Deployment Instructions

### Option 1: Deploy on Vercel (Recommended)
1. Push your code to a GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/coins-trading-platform.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `coins-trading-platform` repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build` | Output Directory: `dist`.
6. Click **Deploy**!

### Option 2: Deploy on Netlify
1. Log in to [Netlify](https://app.netlify.com).
2. Click **"Add new site"** &rarr; **"Import an existing project"**.
3. Connect your GitHub repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **Deploy Coins**.

---

## 📱 Responsive Breakpoints Tested
- **Mobile**: `320px` &ndash; `480px`
- **Tablet**: `768px` &ndash; `1023px`
- **Laptop**: `1024px` &ndash; `1439px`
- **Desktop**: `1440px+`

---

## 📄 License
This project is licensed under the MIT License.
