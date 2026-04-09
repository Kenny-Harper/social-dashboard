// mockData.ts — simulated social media analytics data
// in a real app this would come from platform APIs
import type { DashboardData } from './types';

export const dashboardData: DashboardData = {
  platforms: [
    {
      id: 'twitter',
      name: 'Twitter / X',
      icon: '🐦',
      followers: 12400,
      growth: 4.2,
      engagement: 3.8,
      color: '#1d9bf0',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: '📸',
      followers: 28900,
      growth: 7.1,
      engagement: 5.2,
      color: '#e1306c',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: '▶️',
      followers: 8750,
      growth: 12.4,
      engagement: 8.9,
      color: '#ff0000',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: '💼',
      followers: 5200,
      growth: 2.8,
      engagement: 4.1,
      color: '#0077b5',
    },
  ],

  engagement: [
    { date: 'Mon', likes: 420, comments: 85, shares: 32 },
    { date: 'Tue', likes: 380, comments: 72, shares: 28 },
    { date: 'Wed', likes: 510, comments: 110, shares: 45 },
    { date: 'Thu', likes: 460, comments: 95, shares: 38 },
    { date: 'Fri', likes: 620, comments: 140, shares: 62 },
    { date: 'Sat', likes: 580, comments: 125, shares: 55 },
    { date: 'Sun', likes: 490, comments: 98, shares: 41 },
  ],

  followerGrowth: [
    { date: 'Week 1', value: 52800 },
    { date: 'Week 2', value: 53400 },
    { date: 'Week 3', value: 54100 },
    { date: 'Week 4', value: 55250 },
  ],

  topPosts: [
    {
      id: 1,
      platform: '📸 Instagram',
      content: 'Behind the scenes of our latest product launch...',
      likes: 1842,
      comments: 234,
      shares: 89,
      reach: 24500,
      date: 'Apr 5',
    },
    {
      id: 2,
      platform: '▶️ YouTube',
      content: 'How we built our AI pipeline from scratch',
      likes: 1205,
      comments: 187,
      shares: 342,
      reach: 18900,
      date: 'Apr 3',
    },
    {
      id: 3,
      platform: '🐦 Twitter / X',
      content: 'Excited to announce our new feature dropping next week...',
      likes: 876,
      comments: 143,
      shares: 521,
      reach: 31200,
      date: 'Apr 1',
    },
  ],
};