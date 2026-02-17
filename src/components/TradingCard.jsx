const TradingCard = ({ children, className = '' }) => {
  return (
    <div className={`bg-card border border-gray-700 rounded-md ${className}`}>
      {children}
    </div>
  )
}

export default TradingCard
