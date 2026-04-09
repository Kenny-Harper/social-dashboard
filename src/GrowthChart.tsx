import type { DataPoint } from './types';
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid
} from 'recharts';

// GrowthChart — shows total follower growth over time
function GrowthChart({ data }: { data: DataPoint[] }) {
  return (
    <div className="chart-card">
      <h3>Follower Growth</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e2d4a" />
          <XAxis dataKey="date" stroke="#64748b" tick={{ fontSize: 12 }} />
          <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ background: '#0d1221', border: '1px solid #1e2d4a' }}
            formatter={(value: unknown) => [
              typeof value === 'number' ? value.toLocaleString() : value,
              'Followers'
            ]}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: '#3b82f6', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GrowthChart;