import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const PortfolioChart = ({ data }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const formatValue = (value) => {
    return `$${value.toLocaleString()}`
  }

  return (
    <div className="bg-card rounded-2xl p-6 card-shadow">
      <h3 className="text-xl font-bold text-text mb-6">Portfolio Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            stroke="#999"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            tickFormatter={formatValue}
            stroke="#999"
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            formatter={(value) => formatValue(value)}
            labelFormatter={(label) => formatDate(label)}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#0A84FF"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PortfolioChart

