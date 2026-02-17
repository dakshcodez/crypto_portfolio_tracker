import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import TradingCard from './TradingCard'

const PortfolioChart = ({ data }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const formatValue = (value) => {
    return `$${value.toLocaleString()}`
  }

  return (
    <TradingCard className="p-4">
      <h3 className="text-sm font-semibold text-text mb-4 uppercase tracking-wider">Portfolio Growth</h3>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2b3139" />
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            stroke="#5E6673"
            style={{ fontSize: '11px' }}
            tick={{ fill: '#848E9C' }}
          />
          <YAxis
            tickFormatter={formatValue}
            stroke="#5E6673"
            style={{ fontSize: '11px' }}
            tick={{ fill: '#848E9C' }}
          />
          <Tooltip
            formatter={(value) => formatValue(value)}
            labelFormatter={(label) => formatDate(label)}
            contentStyle={{
              backgroundColor: '#1E2329',
              border: '1px solid #2b3139',
              borderRadius: '4px',
              color: '#EAECEF',
              fontSize: '12px',
            }}
            labelStyle={{ color: '#EAECEF' }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FCD535"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </TradingCard>
  )
}

export default PortfolioChart
