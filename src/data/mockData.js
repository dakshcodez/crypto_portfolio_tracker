// Mock portfolio data
export const mockPortfolio = {
  totalValue: 45230.50,
  invested: 38000.00,
  currentValue: 45230.50,
  pnL: 7230.50,
  pnLPercent: 19.03,
  change24h: 2.45,
}

// Mock holdings
export const mockHoldings = [
  {
    id: 1,
    coin: 'Bitcoin',
    symbol: 'BTC',
    amount: 0.5,
    avgPrice: 42000,
    currentPrice: 45230,
    pnL: 1615,
    pnLPercent: 7.69,
  },
  {
    id: 2,
    coin: 'Ethereum',
    symbol: 'ETH',
    amount: 5.2,
    avgPrice: 2800,
    currentPrice: 3120,
    pnL: 1664,
    pnLPercent: 11.43,
  },
  {
    id: 3,
    coin: 'Solana',
    symbol: 'SOL',
    amount: 50,
    avgPrice: 95,
    currentPrice: 102,
    pnL: 350,
    pnLPercent: 7.37,
  },
  {
    id: 4,
    coin: 'Cardano',
    symbol: 'ADA',
    amount: 2000,
    avgPrice: 0.45,
    currentPrice: 0.52,
    pnL: 140,
    pnLPercent: 15.56,
  },
]

// Mock portfolio growth data (last 30 days)
export const mockPortfolioGrowth = [
  { date: '2024-01-01', value: 38000 },
  { date: '2024-01-05', value: 38500 },
  { date: '2024-01-10', value: 39200 },
  { date: '2024-01-15', value: 40100 },
  { date: '2024-01-20', value: 41500 },
  { date: '2024-01-25', value: 42800 },
  { date: '2024-01-30', value: 45230 },
]

// Mock market data (top 20 coins)
export const mockMarketData = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 45230, marketCap: 885000000000, change24h: 2.45, volume: 25000000000 },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: 3120, marketCap: 375000000000, change24h: 3.12, volume: 12000000000 },
  { id: 3, name: 'Tether', symbol: 'USDT', price: 1.00, marketCap: 95000000000, change24h: 0.01, volume: 45000000000 },
  { id: 4, name: 'BNB', symbol: 'BNB', price: 315, marketCap: 47000000000, change24h: -1.23, volume: 1500000000 },
  { id: 5, name: 'Solana', symbol: 'SOL', price: 102, marketCap: 45000000000, change24h: 5.67, volume: 2800000000 },
  { id: 6, name: 'XRP', symbol: 'XRP', price: 0.62, marketCap: 33000000000, change24h: 1.89, volume: 1200000000 },
  { id: 7, name: 'USDC', symbol: 'USDC', price: 1.00, marketCap: 28000000000, change24h: 0.02, volume: 3500000000 },
  { id: 8, name: 'Cardano', symbol: 'ADA', price: 0.52, marketCap: 18000000000, change24h: 4.23, volume: 450000000 },
  { id: 9, name: 'Dogecoin', symbol: 'DOGE', price: 0.085, marketCap: 12000000000, change24h: -2.15, volume: 800000000 },
  { id: 10, name: 'Avalanche', symbol: 'AVAX', price: 38, marketCap: 14000000000, change24h: 3.45, volume: 550000000 },
  { id: 11, name: 'Polygon', symbol: 'MATIC', price: 0.95, marketCap: 9000000000, change24h: 2.12, volume: 320000000 },
  { id: 12, name: 'Chainlink', symbol: 'LINK', price: 15.5, marketCap: 8500000000, change24h: 1.78, volume: 280000000 },
  { id: 13, name: 'Litecoin', symbol: 'LTC', price: 72, marketCap: 5300000000, change24h: -0.45, volume: 350000000 },
  { id: 14, name: 'Polkadot', symbol: 'DOT', price: 7.2, marketCap: 9000000000, change24h: 2.34, volume: 180000000 },
  { id: 15, name: 'Uniswap', symbol: 'UNI', price: 6.8, marketCap: 4100000000, change24h: 3.12, volume: 120000000 },
  { id: 16, name: 'Cosmos', symbol: 'ATOM', price: 10.5, marketCap: 4000000000, change24h: 1.56, volume: 95000000 },
  { id: 17, name: 'Algorand', symbol: 'ALGO', price: 0.18, marketCap: 1400000000, change24h: -1.23, volume: 45000000 },
  { id: 18, name: 'Filecoin', symbol: 'FIL', price: 5.2, marketCap: 2600000000, change24h: 4.56, volume: 85000000 },
  { id: 19, name: 'Stellar', symbol: 'XLM', price: 0.12, marketCap: 3300000000, change24h: 0.89, volume: 65000000 },
  { id: 20, name: 'VeChain', symbol: 'VET', price: 0.035, marketCap: 2500000000, change24h: 2.67, volume: 75000000 },
]

// Mock price ticker data
export const mockTickerData = [
  { symbol: 'BTC', price: 45230, change: 2.45 },
  { symbol: 'ETH', price: 3120, change: 3.12 },
  { symbol: 'SOL', price: 102, change: 5.67 },
  { symbol: 'ADA', price: 0.52, change: 4.23 },
]

// Available coins for transaction form
export const availableCoins = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC' },
  { id: 2, name: 'Ethereum', symbol: 'ETH' },
  { id: 3, name: 'Solana', symbol: 'SOL' },
  { id: 4, name: 'Cardano', symbol: 'ADA' },
  { id: 5, name: 'BNB', symbol: 'BNB' },
  { id: 6, name: 'XRP', symbol: 'XRP' },
  { id: 7, name: 'Polygon', symbol: 'MATIC' },
  { id: 8, name: 'Avalanche', symbol: 'AVAX' },
  { id: 9, name: 'Chainlink', symbol: 'LINK' },
  { id: 10, name: 'Litecoin', symbol: 'LTC' },
]

