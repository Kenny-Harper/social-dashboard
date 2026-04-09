# 📊 Social Analytics Dashboard

A social media analytics dashboard built with React, TypeScript and Vite. Displays mock performance data across multiple platforms in a clean dark UI.

## Live Demo
🔗 Coming soon

## Features
- Platform cards for Twitter/X, Instagram, YouTube and LinkedIn
- Follower counts with growth and engagement rates
- Weekly engagement bar chart showing likes, comments and shares
- Follower growth line chart over 4 weeks
- Top performing posts with reach and engagement stats
- Total followers and average engagement summary in header
- Clean dark themed UI

## Tech Stack
- React
- TypeScript
- Vite
- Recharts (data visualisation)
- CSS (custom dark theme)

## TypeScript Concepts Used
- Interfaces for all data shapes (Platform, TopPost, EngagementData etc)
- Type annotations on component props
- import type for type-only imports
- Union types and unknown type safety for Recharts callbacks

## React Concepts Used
- Functional components with typed props
- Array methods (.map, .reduce, .toLocaleString)
- Props passing data from App down to child components
- Conditional styling based on data values

## Architecture
- App.tsx — root component, imports data and passes to child components
- PlatformCard.tsx — displays a single platform's stats
- EngagementChart.tsx — weekly bar chart using Recharts
- GrowthChart.tsx — follower growth line chart using Recharts
- TopPosts.tsx — top performing posts list
- mockData.ts — simulated social media data
- types.ts — all TypeScript interfaces in one place
