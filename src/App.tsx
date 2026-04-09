import type { DashboardData } from './types';
import { dashboardData } from './mockData';
import PlatformCard from './PlatformCard';
import EngagementChart from './EngagementChart';
import GrowthChart from './GrowthChart';
import TopPosts from './TopPosts';

function App() {
  const data: DashboardData = dashboardData;

  // calculate total followers across all platforms
  const totalFollowers = data.platforms.reduce((sum, p) => sum + p.followers, 0);

  // calculate average engagement rate
  const avgEngagement = (
    data.platforms.reduce((sum, p) => sum + p.engagement, 0) / data.platforms.length
  ).toFixed(1);

  return (
    <div className="app">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>📊 Social Analytics</h1>
          <p className="subtitle">Your social media performance at a glance</p>
        </div>
        <div className="header-right">
          <div className="summary-stat">
            <p className="summary-value">{totalFollowers.toLocaleString()}</p>
            <p className="summary-label">Total Followers</p>
          </div>
          <div className="summary-stat">
            <p className="summary-value">{avgEngagement}%</p>
            <p className="summary-label">Avg Engagement</p>
          </div>
        </div>
      </header>

      {/* platform cards */}
      <div className="platforms-grid">
        {data.platforms.map((platform) => (
          <PlatformCard key={platform.id} platform={platform} />
        ))}
      </div>

      {/* charts row */}
      <div className="charts-row">
        <EngagementChart data={data.engagement} />
        <GrowthChart data={data.followerGrowth} />
      </div>

      {/* top posts */}
      <TopPosts posts={data.topPosts} />
    </div>
  );
}

export default App;