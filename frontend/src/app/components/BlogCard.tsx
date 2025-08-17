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

  // Generate a color gradient based on post title for visual variety
  const generateGradient = (title: string) => {
    const colors = [
      'from-blue-6 to-blue-8',
      'from-blue-7 to-blue-9',
      'from-blue-5 to-blue-7',
      'from-blue-8 to-blue-10',
      'from-blue-4 to-blue-6'
    ];
    const index = title.length % colors.length;
    return colors[index];
  };

  // Generate an icon based on post tags/content
  const generateIcon = (tags: string[]) => {
    if (tags.some(tag => tag.toLowerCase().includes('ai'))) {
      return (
        <svg className="w-8 h-8 text-blue-contrast" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    }
    if (tags.some(tag => tag.toLowerCase().includes('nft') || tag.toLowerCase().includes('blockchain'))) {
      return (
        <svg className="w-8 h-8 text-blue-contrast" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    }
    if (tags.some(tag => tag.toLowerCase().includes('web') || tag.toLowerCase().includes('design'))) {
      return (
        <svg className="w-8 h-8 text-blue-contrast" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    }
    // Default icon
    return (
      <svg className="w-8 h-8 text-blue-contrast" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    );
  };

  if (featured) {
    return (
      <article className="group relative md:col-span-2 lg:col-span-3 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-4 to-blue-6 border-2 border-blue-8 shadow-2xl shadow-blue-9/30 hover:shadow-blue-9/50 transition-all duration-300 hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-8/20 to-blue-10/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10 p-8 md:p-12">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <div className="flex items-center space-x-3 mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-11 to-blue-12 text-blue-contrast text-sm font-bold rounded-full flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Featured</span>
                </span>
                <span className="text-blue-12 text-sm font-medium">
                  {formatDate(post.date)}
                </span>
              </div>
              
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-blue-12 mb-6 hover:text-blue-contrast transition-colors cursor-pointer group-hover:text-blue-contrast line-clamp-2">
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-blue-12 text-lg leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-blue-12">
                  <span className="text-sm font-medium">By {post.author}</span>
                  <span className="text-sm">{post.readTime} min read</span>
                </div>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-blue-12 hover:text-blue-contrast font-bold transition-colors group-hover:text-blue-contrast"
                >
                  <span>Read Article</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Visual element replacing image */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-11 to-blue-12 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  {generateIcon(post.tags)}
                </div>
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-contrast rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-10 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
          
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-12 text-blue-contrast text-sm rounded-full font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="group relative bg-gray-2 border border-gray-6 rounded-xl overflow-hidden hover:bg-gray-3 hover:border-gray-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Visual header with icon */}
      <div className="relative p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-16 h-16 bg-gradient-to-br ${generateGradient(post.title)} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {generateIcon(post.tags)}
          </div>
          
          {post.featured && (
            <span className="px-3 py-1 bg-gradient-to-r from-blue-9 to-blue-10 text-blue-contrast text-xs font-bold rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-3 text-gray-11 text-sm mb-3">
          <span className="font-medium">{formatDate(post.date)}</span>
          <span>•</span>
          <span>{post.readTime} min read</span>
          <span>•</span>
          <span className="font-medium">By {post.author}</span>
        </div>
      </div>
      
      <div className="px-6 pb-6">
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-gray-12 mb-3 hover:text-blue-11 transition-colors cursor-pointer line-clamp-2 group-hover:text-blue-11">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-11 mb-4 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-a2 text-blue-11 text-xs rounded-full font-medium hover:bg-blue-a3 transition-colors"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-gray-10 px-2 py-1">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}
        
        <div className="pt-4 border-t border-gray-6">
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-11 hover:text-blue-12 font-semibold transition-colors inline-flex items-center space-x-1 group/link"
          >
            <span>Read more</span>
            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}