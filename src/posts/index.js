// Import markdown files as raw strings
import xrPost from './getting-started-with-xr.md?raw';

// Blog posts with metadata
// To add a new post:
// 1. Create a new .md file in this folder
// 2. Import it above with ?raw suffix
// 3. Add an entry to the posts array below

export const posts = [
  {
    slug: 'getting-started-with-xr',
    title: 'Getting Started with XR Development',
    date: '2025-01-15',
    excerpt: 'XR development has become one of the most exciting fields in software engineering. Here\'s how to get started.',
    content: xrPost,
  },
];

// Helper to get a single post by slug
export const getPostBySlug = (slug) => posts.find(post => post.slug === slug);
