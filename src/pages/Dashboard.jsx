import { useState } from 'react'
import StatCard from '../components/StatCard'
import PortfolioChart from '../components/PortfolioChart'
import AllocationPie from '../components/AllocationPie'
import CoinTable from '../components/CoinTable'
import {
  mockPortfolio,
  mockHoldings,
  mockPortfolioGrowth,
} from '../data/mockData'

const Dashboard = () => {
  const [holdings, setHoldings] = useState(mockHoldings)

  const handleDelete = (id) => {
    setHoldings((prev) => prev.filter((holding) => holding.id !== id))
  }

  const formatCurrency = (value) => {
    return `$${value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-baseline gap-3 gap-y-1">
        <h1 className="text-sm font-semibold text-text uppercase tracking-wider">Portfolio</h1>
        <p className="text-2xl md:text-3xl font-semibold text-text">
          {formatCurrency(mockPortfolio.totalValue)}
        </p>
        <span className={`text-sm font-medium ${mockPortfolio.change24h >= 0 ? 'text-binance-green' : 'text-binance-red'}`}>
          {mockPortfolio.change24h >= 0 ? '+' : ''}{mockPortfolio.change24h.toFixed(2)}% 24h
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <StatCard title="Total Invested" value={formatCurrency(mockPortfolio.invested)} />
        <StatCard title="Current Value" value={formatCurrency(mockPortfolio.currentValue)} />
        <StatCard
          title="Total P&L"
          value={formatCurrency(mockPortfolio.pnL)}
          subtitle={`${mockPortfolio.pnLPercent >= 0 ? '+' : ''}${mockPortfolio.pnLPercent.toFixed(2)}%`}
          trend={mockPortfolio.pnL >= 0 ? 'up' : 'down'}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PortfolioChart data={mockPortfolioGrowth} />
        <AllocationPie holdings={holdings} />
      </div>

      <CoinTable holdings={holdings} onDelete={handleDelete} />
    </div>
  )
}

export default Dashboard
