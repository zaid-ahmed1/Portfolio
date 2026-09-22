// Import markdown files as raw strings
import xrPost from './embracing-the-ephemeral.md?raw';

// Blog posts with metadata
// To add a new post:
// 1. Create a new .md file in this folder
// 2. Import it above with ?raw suffix
// 3. Add an entry to the posts array below

export const posts = [
  {
    slug: 'embracing-the-ephemeral',
    title: 'Embracing the Ephemeral: How to Get the Most out of a Hackathon',
    date: '2026-09-17',
    excerpt: 'My thoughts on how to make the most of a hackathon weekend.',
    content: xrPost,
  },
];

// Helper to get a single post by slug
export const getPostBySlug = (slug) => posts.find(post => post.slug === slug);
