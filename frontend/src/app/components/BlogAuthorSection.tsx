// components/BlogAuthorSection.tsx
import React from 'react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

interface BlogAuthorSectionProps {
  author: string;
  variant?: 'post-footer' | 'author-card';
}

const BlogAuthorSection: React.FC<BlogAuthorSectionProps> = ({ 
  author, 
  variant = 'post-footer' 
}) => {
  if (variant === 'author-card') {
    return (
      <div className="bg-gradient-to-br from-blue-1 to-blue-3 rounded-2xl p-8 border border-blue-6">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-9 to-blue-7 flex items-center justify-center flex-shrink-0">
            <span className="text-blue-contrast font-bold text-2xl">EB</span>
          </div>
          
          {/* Author Info */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-blue-12 mb-2">{author}</h3>
            <p className="text-blue-10 mb-4 leading-relaxed">
              Passionate developer exploring the intersection of blockchain technology and creative expression. 
              Building NFT projects and sharing the journey through code and stories.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-blue-11 text-sm font-medium">Connect:</span>
              <SocialLinks variant="default" />
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex flex-col space-y-3">
            <Link
              href="/blog"
              className="px-6 py-3 bg-blue-9 hover:bg-blue-10 text-blue-contrast rounded-lg font-semibold transition-all text-center hover:scale-105"
            >
              More Posts
            </Link>
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-3 border border-blue-9 text-blue-9 hover:bg-blue-9 hover:text-blue-contrast rounded-lg font-semibold transition-all text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Default post-footer variant
  return (
    <footer className="mt-12 pt-8 border-t border-blue-a4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0">
        
        {/* Author Info */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-9 to-blue-7 flex items-center justify-center">
            <span className="text-blue-contrast font-bold text-lg">EB</span>
          </div>
          <div>
            <p className="text-blue-9 font-semibold">{author}</p>
            <p className="text-blue-7 text-sm">Developer & NFT Creator</p>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          
          {/* Social Links */}
          <div className="flex items-center space-x-2">
            <span className="text-blue-7 text-sm">Follow me:</span>
            <SocialLinks variant="minimal" />
          </div>
          
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="px-6 py-3 bg-blue-9 hover:bg-blue-10 text-blue-contrast rounded-lg font-semibold transition-all hover:scale-105