'use client';

import Link from 'next/link';
import SocialLinks from './SocialLinks';
import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';

interface NavigationBarProps {
  variant?: 'homepage' | 'default';
}

export default function NavigationBar({ variant = 'default' }: NavigationBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 w-full z-50 bg-gray-2 border-b border-blue-a4 py-4 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-xl bg-gray-2/90' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl p-1 shadow-lg bg-gradient-to-br from-blue-9 via-blue-8 to-blue-10">
                  <img 
                    src="/bblogo.png" 
                    alt="LeRoiElvi Logo" 
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              </div>
              <div>
                <span className="text-blue-9 font-bold text-lg">BoosterB</span>
                <span className="text-gray-11 text-sm block leading-none">ElvisB projects</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Navigation Links - EXACT Footer colors */}
            <div className="flex items-center space-x-1">
              <Link 
                href="/#nfts" 
                className="px-4 py-2 rounded-lg font-medium transition-colors text-gray-11 hover:text-blue-9"
              >
                My NFTs
              </Link>
              <Link 
                href="/#about" 
                className="px-4 py-2 rounded-lg font-medium transition-colors text-gray-11 hover:text-blue-9"
              >
                About Me
              </Link>
              <Link 
                href="/blog" 
                className="px-4 py-2 rounded-lg font-medium transition-colors text-gray-11 hover:text-blue-9"
              >
                Blog
              </Link>
            </div>

            {/* Divider */}
            <div className="w-px h-6 mx-3 bg-gray-6" />

            {/* Social Links */}
            <div className="flex items-center">
              <SocialLinks variant="minimal" />
            </div>

            {/* Divider */}
            <div className="w-px h-6 mx-3 bg-gray-6" />

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-lg transition-colors text-gray-11 hover:text-blue-9"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}