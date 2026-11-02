export const MARKET_INDICES = [
  {
    symbol: "S&P 500",
    name: "Standard & Poor's 500",
    price: "5,864.67",
    change: "+0.84%",
    isPositive: true,
    value: 5864.67,
    diff: "+48.90",
    status: "Open",
    sparkline: [5810, 5825, 5818, 5840, 5835, 5852, 5864.67]
  },
  {
    symbol: "NASDAQ",
    name: "Nasdaq Composite",
    price: "18,518.61",
    change: "+1.12%",
    isPositive: true,
    value: 18518.61,
    diff: "+205.30",
    status: "Open",
    sparkline: [18300, 18360, 18340, 18450, 18420, 18490, 18518.61]
  },
  {
    symbol: "DOW JONES",
    name: "Dow Jones Industrial",
    price: "42,114.40",
    change: "-0.28%",
    isPositive: false,
    value: 42114.40,
    diff: "-118.20",
    status: "Open",
    sparkline: [42250, 42200, 42180, 42210, 42150, 42130, 42114.40]
  },
  {
    symbol: "BITCOIN",
    name: "BTC / USD",
    price: "68,420.50",
    change: "+3.45%",
    isPositive: true,
    value: 68420.50,
    diff: "+2,284.00",
    status: "24/7 Live",
    sparkline: [66100, 66400, 66200, 67200, 67050, 67900, 68420.50]
  },
  {
    symbol: "ETHEREUM",
    name: "ETH / USD",
    price: "2,640.10",
    change: "+2.15%",
    isPositive: true,
    value: 2640.10,
    diff: "+55.60",
    status: "24/7 Live",
    sparkline: [2580, 2595, 2585, 2615, 2605, 2630, 2640.10]
  },
  {
    symbol: "NIFTY 50",
    name: "NSE India Benchmark",
    price: "24,304.35",
    change: "+0.42%",
    isPositive: true,
    value: 24304.35,
    diff: "+101.25",
    status: "Closed",
    sparkline: [24200, 24240, 24220, 24280, 24260, 24295, 24304.35]
  }
];

export const INITIAL_STOCKS = [
  {
    id: "NVDA",
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    category: "Tech",
    price: 141.54,
    change: 4.85,
    volume: "58.4M",
    marketCap: "$3.48T",
    high24h: 142.20,
    low24h: 135.10,
    icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=60",
    badgeColor: "from-emerald-500 to-green-600",
    sparkline: [134, 136, 135.5, 138, 137.8, 140.2, 141.54]
  },
  {
    id: "AAPL",
    symbol: "AAPL",
    name: "Apple Inc.",
    category: "Tech",
    price: 232.15,
    change: 1.42,
    volume: "42.1M",
    marketCap: "$3.52T",
    high24h: 233.00,
    low24h: 229.80,
    icon: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=80&auto=format&fit=crop&q=60",
    badgeColor: "from-slate-600 to-slate-800",
    sparkline: [228, 229.5, 229, 230.8, 231.2, 231.8, 232.15]
  },
  {
    id: "BTC",
    symbol: "BTC",
    name: "Bitcoin",
    category: "Crypto",
    price: 68420.50,
    change: 3.45,
    volume: "$34.2B",
    marketCap: "$1.35T",
    high24h: 68900.00,
    low24h: 65980.00,
    icon: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=80&auto=format&fit=crop&q=60",
    badgeColor: "from-amber-500 to-yellow-600",
    sparkline: [66000, 66500, 66200, 67400, 67100, 67900, 68420.50]
  },
  {
    id: "ETH",
    symbol: "ETH",
    name: "Ethereum",
    category: "Crypto",
    price: 2640.10,
    change: 2.15,
    volume: "$16.8B",
    marketCap: "$317.8B",
    high24h: 2680.00,
    low24h: 2560.00,
    icon: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=80&auto=format&fit=crop&q=60",
    badgeColor: "from-blue-500 to-indigo-600",
    sparkline: [2570, 2590, 2580, 2620, 2610, 2635, 2640.10]
  },
  {
    id: "TSLA",
    symbol: "TSLA",
    name: "Tesla Inc.",
    category: "Auto/Tech",
    price: 218.40,
    change: -2.35,
    volume: "65.3M",
    marketCap: "$698.2B",
    high24h: 225.50,
    low24h: 216.20,
    icon: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=80&auto=format&fit=crop&q=60",
    badgeColor: "from-red-600 to-rose-700",
    sparkline: [224, 222, 223, 220, 219, 217, 218.40]
  },
  {
    id: "MSFT",
    symbol: "MSFT",
    name: "Microsoft Corp.",
    category: "Tech",
    price: 428.15,
    change: 0.95,
    volume: "21.6M",
    marketCap: "$3.18T",
    high24h: 430.40,
    low24h: 424.50,
    icon: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?w=80&auto=format&fit=crop&q=60",
    badgeColor: "from-sky-500 to-blue-600",
    sparkline: [424, 425, 424.8, 426.5, 427, 427.8, 428.15]
  },
  {
    id: "SOL",
    symbol: "SOL",
    name: "Solana",
    category: "Crypto",
    price: 178.60,
    change: 6.82,
    volume: "$4.1B",
    marketCap: "$84.2B",
    high24h: 181.20,
    low24h: 165.40,
    icon: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=80&auto=format&fit=crop&q=60",
    badgeColor: "from-purple-500 to-fuchsia-600",
    sparkline: [166, 168, 171, 169.5, 174, 177, 178.60]
  },
  {
    id: "AMZN",
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    category: "Consumer Tech",
    price: 186.40,
    change: 1.78,
    volume: "35.2M",
    marketCap: "$1.95T",
    high24h: 187.90,
    low24h: 183.20,
    icon: "https://images.unsplash.com/photo-1523474255658-4af6167c4928?w=80&auto=format&fit=crop&q=60",
    badgeColor: "from-amber-600 to-orange-600",
    sparkline: [182, 183.5, 183, 185.1, 184.8, 186, 186.40]
  },
  {
    id: "SPY",
    symbol: "SPY",
    name: "SPDR S&P 500 ETF",
    category: "ETFs",
    price: 582.40,
    change: 0.82,
    volume: "52.8M",
    marketCap: "$590.1B",
    high24h: 583.50,
    low24h: 578.90,
    icon: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=80&auto=format&fit=crop&q=60",
    badgeColor: "from-teal-500 to-emerald-700",
    sparkline: [577, 578.5, 578, 580.2, 581, 581.8, 582.40]
  },
  {
    id: "PLTR",
    symbol: "PLTR",
    name: "Palantir Technologies",
    category: "Tech",
    price: 43.85,
    change: 7.21,
    volume: "78.3M",
    marketCap: "$98.4B",
    high24h: 44.50,
    low24h: 40.80,
    icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&auto=format&fit=crop&q=60",
    badgeColor: "from-violet-600 to-purple-800",
    sparkline: [40.5, 41.2, 41.0, 42.4, 42.8, 43.5, 43.85]
  },
  {
    id: "COIN",
    symbol: "COIN",
    name: "Coinbase Global",
    category: "Crypto/Fintech",
    price: 215.30,
    change: -1.65,
    volume: "12.4M",
    marketCap: "$53.1B",
    high24h: 221.00,
    low24h: 212.80,
    icon: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=80&auto=format&fit=crop&q=60",
    badgeColor: "from-blue-600 to-cyan-700",
    sparkline: [220, 219, 217, 218, 216, 214.5, 215.30]
  },
  {
    id: "AMD",
    symbol: "AMD",
    name: "Advanced Micro Devices",
    category: "Tech",
    price: 156.20,
    change: 2.90,
    volume: "38.9M",
    marketCap: "$253.2B",
    high24h: 157.80,
    low24h: 151.30,
    icon: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=80&auto=format&fit=crop&q=60",
    badgeColor: "from-rose-500 to-red-700",
    sparkline: [151, 153, 152.5, 154.2, 154, 155.8, 156.20]
  }
];

export const INITIAL_HOLDINGS = [
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    shares: 45,
    avgBuyPrice: 138.25,
    currentPrice: 141.54,
    value: 6369.30,
    profit: 148.05,
    profitPercent: 2.38,
    type: "Stock"
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    shares: 80,
    avgBuyPrice: 220.10,
    currentPrice: 232.15,
    value: 18572.00,
    profit: 964.00,
    profitPercent: 5.47,
    type: "Stock"
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    shares: 0.85,
    avgBuyPrice: 61200.00,
    currentPrice: 68420.50,
    value: 58157.42,
    profit: 6137.42,
    profitPercent: 11.80,
    type: "Crypto"
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    shares: 6.2,
    avgBuyPrice: 2410.00,
    currentPrice: 2640.10,
    value: 16368.62,
    profit: 1426.62,
    profitPercent: 9.55,
    type: "Crypto"
  },
  {
    symbol: "SPY",
    name: "SPDR S&P 500 ETF",
    shares: 60,
    avgBuyPrice: 560.00,
    currentPrice: 582.40,
    value: 34944.00,
    profit: 1344.00,
    profitPercent: 4.00,
    type: "ETF"
  }
];

export const PORTFOLIO_HISTORY = {
  "1D": [
    { time: "09:30", value: 132400 },
    { time: "11:00", value: 133100 },
    { time: "12:30", value: 132800 },
    { time: "14:00", value: 133950 },
    { time: "15:00", value: 134100 },
    { time: "16:00", value: 134411.34 }
  ],
  "1W": [
    { time: "Mon", value: 129200 },
    { time: "Tue", value: 130800 },
    { time: "Wed", value: 130100 },
    { time: "Thu", value: 132400 },
    { time: "Fri", value: 134411.34 }
  ],
  "1M": [
    { time: "Week 1", value: 121500 },
    { time: "Week 2", value: 124200 },
    { time: "Week 3", value: 128900 },
    { time: "Week 4", value: 134411.34 }
  ],
  "1Y": [
    { time: "Q1", value: 98000 },
    { time: "Q2", value: 112000 },
    { time: "Q3", value: 122500 },
    { time: "Q4", value: 134411.34 }
  ],
  "ALL": [
    { time: "2023", value: 65000 },
    { time: "2024", value: 92000 },
    { time: "2025", value: 118000 },
    { time: "2026", value: 134411.34 }
  ]
};

export const MARKET_NEWS = [
  {
    id: 1,
    title: "Federal Reserve Signals Rate Path as Institutional Tech Flows Surge",
    category: "Macro Economy",
    time: "20 mins ago",
    date: "Nov 02, 2026",
    readTime: "4 min read",
    author: "Elena Rostova",
    source: "Financial Times",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&auto=format&fit=crop&q=80",
    snippet: "Treasury yields stabilize following comments from global central bankers, prompting heavy institutional accumulation in high-performing AI semiconductors and treasury bills.",
    fullContent: "Global equity markets registered sustained momentum this morning as liquidity indicators highlighted a shift toward growth equities and decentralized assets. Analysts note strong capital expenditures across hyper-scalers driving chip demand into record territory. Market strategists suggest investors maintain balanced diversification across blue-chip tech, sovereign yield instruments, and digital gold proxies as macroeconomic data unfolds."
  },
  {
    id: 2,
    title: "Bitcoin Crosses Key Resistance as Spot ETF Weekly Inflows Hit $2.4 Billion",
    category: "Cryptocurrency",
    time: "1 hour ago",
    date: "Nov 02, 2026",
    readTime: "3 min read",
    author: "Marcus Chen",
    source: "Bloomberg Terminal",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=600&auto=format&fit=crop&q=80",
    snippet: "Institutional allocations reached new quarterly highs as sovereign wealth funds and sovereign balance sheets increase strategic digital asset holdings.",
    fullContent: "The premier digital asset demonstrated exceptional resilience over the weekend trading sessions, clearing multi-month supply bands. On-chain metrics reveal exchange reserves continuing their multi-year downward trajectory while long-term holder supply locked in cold custody surpasses 72% of total circulating supply."
  },
  {
    id: 3,
    title: "Next-Gen AI Chip Architecture Unleashes Record Datacenter Margin Projections",
    category: "Equities",
    time: "3 hours ago",
    date: "Nov 02, 2026",
    readTime: "5 min read",
    author: "Sarah Jenkins",
    source: "Reuters Markets",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
    snippet: "Hardware innovators unveil next-generation optical interconnects, promising 4x throughput efficiency and reducing enterprise compute overheads.",
    fullContent: "Semiconductor giants reported stellar supply chain clearance times, surpassing Wall Street consensus estimates. With cloud computing enterprises accelerating capital expenditures toward autonomous agent infrastructure, the hardware sector remains the primary bellwether of global equity momentum."
  },
  {
    id: 4,
    title: "Global Clean Energy & EV Transition Spurs Record Lithium & Battery Demand",
    category: "Commodities",
    time: "5 hours ago",
    date: "Nov 02, 2026",
    readTime: "3 min read",
    author: "David Vance",
    source: "Wall Street Journal",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80",
    snippet: "Automotive manufacturers sign multi-decade direct refining agreements as energy storage grid deployments expand across North America and Europe.",
    fullContent: "Infrastructure investment mandates continue to propel utility-scale battery installations. Energy commodities recorded a sharp influx of speculative and commercial hedge funds positioning for sustained secular consumption trends over the next fiscal cycle."
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "ShieldCheck",
    title: "Bank-Grade Cold Security",
    desc: "Multi-party computation (MPC) wallets, SOC-2 Type II certified infrastructure, and 100% full-reserve backing with real-time on-chain proofs."
  },
  {
    icon: "Zap",
    title: "Sub-Millisecond Engine",
    desc: "Execute orders with institutional-grade routing and ultra-low latency (<12ms) with zero slippage on high-frequency market depth."
  },
  {
    icon: "TrendingUp",
    title: "AI-Powered Analytics",
    desc: "Proprietary algorithmic sentiment gauges, smart portfolio rebalancing, and predictive volatility alerts directly on your terminal."
  },
  {
    icon: "CircleDollarSign",
    title: "Zero Commission Trading",
    desc: "Invest in 5,000+ US stocks, fractional shares, cryptocurrencies, and index ETFs with 0% trading commission and transparent pricing."
  },
  {
    icon: "Layers",
    title: "Multi-Asset Unified Account",
    desc: "Manage equities, spot crypto, index funds, and fiat balances from one sleek dashboard with instant currency conversions."
  },
  {
    icon: "Headphones",
    title: "24/7 Dedicated Support",
    desc: "Direct access to certified trading specialists and VIP priority desks via live chat, phone, and encrypted channels."
  }
];
