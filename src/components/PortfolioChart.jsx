import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import NeonCard from './NeonCard'

const PortfolioChart = ({ data }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const formatValue = (value) => {
    return `$${value.toLocaleString()}`
  }

  return (
    <NeonCard className="p-6" glowColor="blue">
      <h3 className="text-xl font-bold text-text mb-6">Portfolio Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" />
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            stroke="#666"
            style={{ fontSize: '12px' }}
            tick={{ fill: '#A0A0A0' }}
          />
          <YAxis
            tickFormatter={formatValue}
            stroke="#666"
            style={{ fontSize: '12px' }}
            tick={{ fill: '#A0A0A0' }}
          />
          <Tooltip
            formatter={(value) => formatValue(value)}
            labelFormatter={(label) => formatDate(label)}
            contentStyle={{
              backgroundColor: '#16161A',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              borderRadius: '8px',
              color: '#FFFFFF',
            }}
            labelStyle={{ color: '#FFFFFF' }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#00F0FF"
            strokeWidth={3}
            dot={false}
            style={{ filter: 'drop-shadow(0 0 6px rgba(0, 240, 255, 0.6))' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </NeonCard>
  )
}

export default PortfolioChart

