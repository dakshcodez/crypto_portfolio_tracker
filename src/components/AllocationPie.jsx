import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import NeonCard from './NeonCard'

const AllocationPie = ({ holdings }) => {
  const COLORS = ['#00F0FF', '#9D00FF', '#FF008C', '#00FF85', '#FF3B3B', '#FFD700']

  const data = holdings.map((holding) => ({
    name: holding.symbol,
    value: holding.amount * holding.currentPrice,
  }))

  const formatValue = (value) => {
    return `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
  }

  return (
    <NeonCard className="p-6" glowColor="purple">
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
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]}
                style={{ filter: `drop-shadow(0 0 4px ${COLORS[index % COLORS.length]})` }}
              />
            ))}
          </Pie>
          <Tooltip 
            formatter={formatValue}
            contentStyle={{
              backgroundColor: '#16161A',
              border: '1px solid rgba(157, 0, 255, 0.3)',
              borderRadius: '8px',
              color: '#FFFFFF',
            }}
            labelStyle={{ color: '#FFFFFF' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </NeonCard>
  )
}

export default AllocationPie

