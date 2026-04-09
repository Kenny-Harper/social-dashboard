import type { EngagementData } from './types';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, Legend, CartesianGrid
} from 'recharts';

// EngagementChart — shows likes, comments and shares over the past week
function EngagementChart({ data }: { data: EngagementData[] }) {
  return (
    <div className="chart-card">
      <h3>Weekly Engagement</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e2d4a" />
          <XAxis dataKey="date" stroke="#64748b" tick={{ fontSize: 12 }} />
          <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ background: '#0d1221', border: '1px solid #1e2d4a' }}
          />
          <Legend />
          <Bar dataKey="likes" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="comments" fill="#a855f7" radius={[4, 4, 0, 0]} />
          <Bar dataKey="shares" fill="#22c55e" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EngagementChart;