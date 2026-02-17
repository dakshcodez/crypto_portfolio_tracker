import TradingCard from './TradingCard'

const CoinTable = ({ holdings, onDelete }) => {
  const formatPrice = (price) => {
    return `$${price.toLocaleString(undefined, {
      minimumFractionDigits: price < 1 ? 4 : 2,
      maximumFractionDigits: price < 1 ? 4 : 2,
    })}`
  }

  const formatAmount = (amount) => {
    return amount.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 8,
    })
  }

  return (
    <TradingCard className="p-4">
      <h3 className="text-sm font-semibold text-text mb-3 uppercase tracking-wider">Holdings</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-2.5 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">Coin</th>
              <th className="text-right py-2.5 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">Amount</th>
              <th className="text-right py-2.5 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">Avg Price</th>
              <th className="text-right py-2.5 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">Current Price</th>
              <th className="text-right py-2.5 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">PnL</th>
              <th className="text-right py-2.5 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding) => (
              <tr
                key={holding.id}
                className="border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors"
              >
                <td className="py-2.5 px-3">
                  <div>
                    <p className="font-medium text-text">{holding.coin}</p>
                    <p className="text-xs text-text-secondary">{holding.symbol}</p>
                  </div>
                </td>
                <td className="text-right py-2.5 px-3 font-medium text-text">
                  {formatAmount(holding.amount)}
                </td>
                <td className="text-right py-2.5 px-3 text-text-secondary">
                  {formatPrice(holding.avgPrice)}
                </td>
                <td className="text-right py-2.5 px-3 font-medium text-text">
                  {formatPrice(holding.currentPrice)}
                </td>
                <td className="text-right py-2.5 px-3">
                  <div>
                    <p className={`font-medium ${holding.pnL >= 0 ? 'text-binance-green' : 'text-binance-red'}`}>
                      {holding.pnL >= 0 ? '+' : ''}{formatPrice(holding.pnL)}
                    </p>
                    <p className={`text-xs ${holding.pnLPercent >= 0 ? 'text-binance-green' : 'text-binance-red'}`}>
                      {holding.pnLPercent >= 0 ? '+' : ''}{holding.pnLPercent.toFixed(2)}%
                    </p>
                  </div>
                </td>
                <td className="text-right py-2.5 px-3">
                  <button
                    onClick={() => onDelete(holding.id)}
                    className="text-xs text-binance-red hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TradingCard>
  )
}

export default CoinTable
