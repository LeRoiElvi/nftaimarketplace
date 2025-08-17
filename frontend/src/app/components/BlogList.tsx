'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
  title = "Latest from My Blog",
  subtitle = "Discover my thoughts, experiences, and learnings from my coding journey"
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
      {/* Section Header - Only show if title/subtitle provided */}
      {(title || subtitle) && (
        <div className="text-center mb-16">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold text-gray-12 mb-6">
              {title.includes('Latest') ? (
                <>
                  Latest from My <span className="bg-gradient-to-r from-blue-9 via-blue-8 to-blue-11 bg-clip-text text-transparent">Blog</span>
                </>
              ) : (
                title
              )}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-gray-11 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Tag Filter - Only show if not limited and has tags */}
      {allTags.length > 0 && !limit && (
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-12 mb-4 text-center">Filter by Topic</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedTag('')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                selectedTag === ''
                  ? 'bg-blue-9 text-blue-contrast shadow-lg'
                  : 'bg-gray-3 text-gray-11 hover:bg-gray-4 hover:text-gray-12'
              }`}
            >
              All Posts
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagFilter(tag)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-blue-9 text-blue-contrast shadow-lg'
                    : 'bg-gray-3 text-gray-11 hover:bg-gray-4 hover:text-gray-12'
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
        <div className="text-center py-16">
          <div className="relative">
            {/* Blue glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-6 via-blue-7 to-blue-8 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-gray-2 rounded-2xl p-12 border border-gray-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-9 via-blue-8 to-blue-10 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-blue-9/40">
                <svg className="w-10 h-10 text-blue-contrast" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-12 mb-4">No posts found</h3>
              <p className="text-gray-11 text-lg leading-relaxed max-w-md mx-auto">
                {selectedTag 
                  ? `No posts found with the tag "${selectedTag}". Try selecting a different tag or view all posts.`
                  : "No blog posts available yet. Check back soon for new content!"
                }
              </p>
              {selectedTag && (
                <button
                  onClick={() => setSelectedTag('')}
                  className="mt-6 px-6 py-3 bg-blue-9 hover:bg-blue-10 text-blue-contrast font-medium rounded-lg transition-colors"
                >
                  View All Posts
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Load More / View All */}
      {limit && posts.length > limit && (
        <div className="text-center mt-16">
          <Link
            href="/blog"
            className="group inline-flex items-center space-x-3 bg-blue-9 hover:bg-blue-10 text-blue-contrast px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-blue-9/30 hover:shadow-blue-9/50 hover:scale-105"
          >
            <span>View All Posts</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}