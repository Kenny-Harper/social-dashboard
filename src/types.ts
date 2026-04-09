export interface DataPoint {
    date: string;
    value: number;
}

export interface EngagementData {
    date: string;
    likes: number;
    comments: number;
    shares: number;
}

export interface Platform {
    id: string;
    name: string;
    icon: string;
    followers: number;
    growth: number;
    engagement: number;
    color: string;
}

export interface TopPost {
    id: number;
    platform: string;
    content: string;
    likes: number;
    comments: number; 
    shares: number;
    date: string;
    reach: number;
}

export interface DashboardData {
    platforms: Platform[];
    engagement: EngagementData[];
    followerGrowth: DataPoint[];
    topPosts: TopPost[];
}

