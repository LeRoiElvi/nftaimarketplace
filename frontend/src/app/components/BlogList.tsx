'use client';

import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { BlogPost } from '../lib/blog';

interface BlogListProps {
  posts: BlogPost[];
  showFeatured?: boolean;
  limit?: number;
  title?: string;
  subtitle?: string;
}

export default function BlogList({ 
  posts, 
  showFeatured = false, 
  limit,
  title = "Latest Blog Posts",
  subtitle = "Discover insights, stories, and updates from my journey"
}: BlogListProps) {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    let filtered = posts;
    
    if (showFeatured) {
      filtered = posts.filter(post => post.featured);
    }
    
    if (selectedTag) {
      filtered = filtered.filter(post => 
        post.tags.map(tag => tag.toLowerCase()).includes(selectedTag.toLowerCase())
      );
    }
    
    if (limit) {
      filtered = filtered.slice(0, limit);
    }
    
    setFilteredPosts(filtered);

    // Extract all unique tags
    const tags = new Set<string>();
    posts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    setAllTags(Array.from(tags).sort());
  }, [posts, showFeatured, limit, selectedTag]);

  const handleTagFilter = (tag: string) => {
    setSelectedTag(selectedTag === tag ? '' : tag);
  };

  return (
    <section className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-xl text-[var(--neutral-300)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Tag Filter */}
      {allTags.length > 0 && !limit && (
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTag('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedTag === ''
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white/10 text-[var(--neutral-300)] hover:bg-white/20'
              }`}
            >
              All Posts
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white/10 text-[var(--neutral-300)] hover:bg-white/20'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              post={post}
              featured={showFeatured && index === 0}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="glass rounded-xl p-8">
            <svg className="w-16 h-16 text-[var(--neutral-500)] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">No posts found</h3>
            <p className="text-[var(--neutral-400)]">
              {selectedTag 
                ? `No posts found with the tag "${selectedTag}". Try selecting a different tag or view all posts.`
                : "No blog posts available yet. Check back soon for new content!"
              }
            </p>
          </div>
        </div>
      )}

      {/* Load More / View All */}
      {limit && posts.length > limit && (
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            <span>View All Posts</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      )}
    </section>
  );
}
