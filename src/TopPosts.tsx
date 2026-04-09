import type { TopPost } from './types';

// TopPosts — displays the best performing posts across all platforms
function TopPosts({ posts }: { posts: TopPost[] }) {
  return (
    <div className="chart-card">
      <h3>Top Performing Posts</h3>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <div className="post-header">
              <span className="post-platform">{post.platform}</span>
              <span className="post-date">{post.date}</span>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-stats">
              <span>❤️ {post.likes.toLocaleString()}</span>
              <span>💬 {post.comments.toLocaleString()}</span>
              <span>🔁 {post.shares.toLocaleString()}</span>
              <span>👁️ {post.reach.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopPosts;