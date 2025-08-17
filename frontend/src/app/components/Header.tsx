// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';
import ThemeToggle from './ThemeToggle'; // Assuming you have this component

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-contrast/80 backdrop-blur-lg border-b border-blue-a4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/bblogo.png" 
                alt="BoosterB Logo" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-blue-9 font-bold text-lg">BoosterB</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Main Nav Links */}
            <div className="flex items-center space-x-6">
              <Link 
                href="/#nfts" 
                className="text-blue-7 hover:text-blue-9 transition-colors font-medium"
              >
                My NFTs
              </Link>
              <Link 
                href="/#about" 
                className="text-blue-7 hover:text-blue-9 transition-colors font-medium"
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="text-blue-7 hover:text-blue-9 transition-colors font-medium"
              >
                Blog
              </Link>
            </div>
            
            {/* Divider */}
            <div className="w-px h-6 bg-blue-a4"></div>
            
            {/* Social Links - Subtle */}
            <SocialLinks variant="minimal" />
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <SocialLinks variant="minimal" />
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button 
              className="text-blue-7 hover:text-blue-9 transition-colors"
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
};

export default Header;