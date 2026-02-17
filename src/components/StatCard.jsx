const StatCard = ({ title, value, subtitle, trend }) => {
  return (
    <div className="trading-card p-4 hover:bg-gray-800/30 transition-colors">
      <p className="text-xs uppercase tracking-wider text-text-secondary mb-1">{title}</p>
      <p className="text-xl font-semibold text-text">{value}</p>
      {subtitle && (
        <p className={`text-xs font-medium mt-1 ${
          trend === 'up' ? 'text-binance-green' : trend === 'down' ? 'text-binance-red' : 'text-text-secondary'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default StatCard
