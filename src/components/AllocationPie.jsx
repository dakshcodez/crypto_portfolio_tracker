import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import TradingCard from './TradingCard'

const AllocationPie = ({ holdings }) => {
  const COLORS = ['#FCD535', '#0ECB81', '#F6465D', '#848E9C', '#5E6673', '#2b3139']

  const data = holdings.map((holding) => ({
    name: holding.symbol,
    value: holding.amount * holding.currentPrice,
  }))

  const formatValue = (value) => {
    return `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
  }

  return (
    <TradingCard className="p-4">
      <h3 className="text-sm font-semibold text-text mb-4 uppercase tracking-wider">Asset Allocation</h3>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={formatValue}
            contentStyle={{
              backgroundColor: '#1E2329',
              border: '1px solid #2b3139',
              borderRadius: '4px',
              color: '#EAECEF',
              fontSize: '12px',
            }}
            labelStyle={{ color: '#EAECEF' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </TradingCard>
  )
}

export default AllocationPie
