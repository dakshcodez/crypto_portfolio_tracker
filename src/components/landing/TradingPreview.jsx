const TradingPreview = () => {
  const mockMarketData = [
    { symbol: 'BTC', price: 45230, change: 2.45 },
    { symbol: 'ETH', price: 3120, change: 3.12 },
    { symbol: 'SOL', price: 102, change: 5.67 },
    { symbol: 'BNB', price: 382, change: 0.89 },
  ]

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-gray-700 pb-3">
        <h3 className="text-sm font-semibold text-text uppercase tracking-wider">Market</h3>
        <span className="text-xs text-text-secondary">Live</span>
      </div>
      
      {/* Trading Pair Header */}
      <div className="pb-3 border-b border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-lg font-semibold text-text">BTC/USDT</p>
            <p className="text-xs text-text-secondary">Bitcoin / Tether</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-text">$45,230.00</p>
            <p className="text-xs text-binance-green">+2.45%</p>
          </div>
        </div>
        {/* Mini Chart Placeholder */}
        <div className="h-16 bg-background-secondary rounded-md border border-gray-700 flex items-center justify-center mt-3">
          <div className="flex items-end gap-1 h-10">
            {[40, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 100].map((height, i) => (
              <div
                key={i}
                className="w-1.5 bg-binance-green rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Top Markets List */}
      <div>
        <p className="text-xs uppercase tracking-wider text-text-secondary mb-2 font-medium">Top Markets</p>
        <div className="space-y-2">
          {mockMarketData.map((coin) => (
            <div key={coin.symbol} className="flex justify-between items-center text-xs py-1.5 border-b border-gray-700/30 last:border-0">
              <div className="flex items-center gap-2">
                <span className="font-medium text-text">{coin.symbol}</span>
                <span className="text-text-secondary">/USDT</span>
              </div>
              <div className="text-right">
                <p className="text-text font-medium">{formatPrice(coin.price)}</p>
                <p className={coin.change >= 0 ? 'text-binance-green' : 'text-binance-red'}>
                  {coin.change >= 0 ? '+' : ''}{coin.change.toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TradingPreview
