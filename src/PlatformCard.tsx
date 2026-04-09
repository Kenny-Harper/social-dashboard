import type { Platform } from './types';

// PlatformCard — displays stats for a single social media platform
function PlatformCard({ platform }: { platform: Platform }) {
  // show + or - sign before growth percentage
  const growthSign = platform.growth > 0 ? '+' : '';

  return (
    <div className="platform-card" style={{ borderTopColor: platform.color }}>
      <div className="platform-header">
        <span className="platform-icon">{platform.icon}</span>
        <span className="platform-name">{platform.name}</span>
      </div>

      {/* follower count */}
      <p className="platform-followers">
        {platform.followers.toLocaleString()}
        <span className="platform-label"> followers</span>
      </p>

      {/* growth and engagement stats */}
      <div className="platform-stats">
        <div className="stat">
          <p className="stat-value" style={{ color: platform.growth > 0 ? '#22c55e' : '#ef4444' }}>
            {growthSign}{platform.growth}%
          </p>
          <p className="stat-label">Growth</p>
        </div>
        <div className="stat">
          <p className="stat-value" style={{ color: platform.color }}>
            {platform.engagement}%
          </p>
          <p className="stat-label">Engagement</p>
        </div>
      </div>
    </div>
  );
}

export default PlatformCard;