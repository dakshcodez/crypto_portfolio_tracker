import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const AllocationPie = ({ holdings }) => {
  const COLORS = ['#0A84FF', '#34C759', '#FF3B30', '#FF9500', '#5856D6', '#AF52DE']

  const data = holdings.map((holding) => ({
    name: holding.symbol,
    value: holding.amount * holding.currentPrice,
  }))

  const formatValue = (value) => {
    return `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
  }

  return (
    <div className="bg-card rounded-2xl p-6 card-shadow">
      <h3 className="text-xl font-bold text-text mb-6">Asset Allocation</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={formatValue} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AllocationPie

