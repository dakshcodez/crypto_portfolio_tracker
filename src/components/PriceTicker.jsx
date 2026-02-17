/**
 * PriceTicker — continuous right-to-left scrolling ticker.
 * Data is hardcoded for now. Later: replace with fetch("/api/prices") and pass as props or state.
 */
const TICKER_DATA = [
  { symbol: 'BTC', price: 45230.0, change: 2.45 },
  { symbol: 'ETH', price: 3120.0, change: 3.12 },
  { symbol: 'SOL', price: 102.0, change: 5.67 },
  { symbol: 'ADA', price: 0.52, change: 4.23 },
  { symbol: 'XRP', price: 0.61, change: -1.12 },
  { symbol: 'BNB', price: 382.44, change: 0.89 },
]

const TickerItem = ({ symbol, price, change }) => (
  <div className="flex items-center gap-3 shrink-0">
    <span className="text-xs font-medium text-text-secondary">{symbol}</span>
    <span className="text-sm font-semibold text-text">
      ${price.toLocaleString(undefined, {
        minimumFractionDigits: price < 1 ? 4 : 2,
        maximumFractionDigits: price < 1 ? 4 : 2,
      })}
    </span>
    <span
      className={`text-xs font-medium ${
        change >= 0 ? 'text-binance-green' : 'text-binance-red'
      }`}
    >
      {change >= 0 ? '+' : ''}
      {change.toFixed(2)}%
    </span>
  </div>
)

const PriceTicker = ({ data = TICKER_DATA }) => {
  return (
    <div
      className="bg-background border-b border-gray-700 overflow-hidden py-2 group"
      style={{ background: '#0B0E11' }}
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <div className="flex items-center gap-8 pr-8">
          {data.map((coin) => (
            <TickerItem
              key={`${coin.symbol}-a`}
              symbol={coin.symbol}
              price={coin.price}
              change={coin.change}
            />
          ))}
        </div>
        <div className="flex items-center gap-8 pr-8">
          {data.map((coin) => (
            <TickerItem
              key={`${coin.symbol}-b`}
              symbol={coin.symbol}
              price={coin.price}
              change={coin.change}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PriceTicker
