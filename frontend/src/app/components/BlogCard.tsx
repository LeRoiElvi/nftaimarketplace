'use client';

import Link from 'next/link';
import { BlogPost } from '../lib/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <article 
      className={`glass rounded-xl p-6 hover:bg-gray-a3 transition-all duration-300 group ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {post.image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            {post.featured && (
              <span className="px-2 py-1 bg-gradient-to-r from-blue-9 to-blue-7 text-blue-contrast text-xs font-semibold rounded-full">
                Featured
              </span>
            )}
            <span className="text-blue-7 text-sm font-medium">
              {formatDate(post.date)}
            </span>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-xl font-bold text-blue-9 mb-2 hover:text-blue-10 transition-colors cursor-pointer">
              {post.title}
            </h3>
          </Link>
        </div>
      </div>

      <p className="text-blue-7 mb-4 leading-relaxed">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-blue-6">
            By {post.author}
          </span>
          <span className="text-sm text-blue-6">
            {post.readTime} min read
          </span>
        </div>
        
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-a2 text-blue-9 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 2 && (
              <span className="text-xs text-blue-6">
                +{post.tags.length - 2} more
              </span>
            )}
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-blue-a4">
        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-9 hover:text-blue-10 font-medium transition-colors inline-flex items-center space-x-1"
        >
          <span>Read more</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
