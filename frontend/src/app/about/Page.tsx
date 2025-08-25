// src/app/about/page.tsx
import React from 'react';
import Link from 'next/link';
import AboutSection from '../components/AboutSection';
import ThemeToggle from '../components/ThemeToggle';

export const metadata = {
  title: 'About | BoosterB - ElvisB projects',
  description: 'Learn more about Elvis, a blockchain developer and NFT creator passionate about Web3 technologies.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-1 via-gray-1 to-blue-2">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-blue-9/95 backdrop-blur-xl border-b border-blue-8 shadow-lg shadow-blue-9/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-4 to-blue-6 p-1 shadow-lg">
                  <img 
                    src="/bblogo.png" 
                    alt="LeRoiElvi Logo" 
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-blue-11 to-blue-12 rounded-full border-2 border-blue-9 shadow-sm animate-pulse"></div>
              </div>
              <div>
                <Link href="/" className="flex flex-col">
                  <span className="text-blue-contrast font-bold text-lg">BoosterB</span>
                  <span className="text-blue-4 text-sm leading-none">ElvisB projects</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/#nfts" className="text-blue-3 hover:text-blue-contrast hover:bg-blue-8 px-4 py-2 rounded-lg transition-all duration-200 font-medium">My NFTs</Link>
              <Link href="/about" className="text-blue-contrast bg-blue-8 px-4 py-2 rounded-lg transition-all duration-200 font-medium">About Me</Link>
              <Link href="/blog" className="text-blue-3 hover:text-blue-contrast hover:bg-blue-8 px-4 py-2 rounded-lg transition-all duration-200 font-medium">My Story</Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-6 to-blue-8 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-5 to-blue-7 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-9 via-blue-8 to-blue-11 bg-clip-text text-transparent">About Me</span><br />
              <span className="text-blue-12">Elvis's Journey</span>
            </h1>
            <p className="text-xl text-blue-10 max-w-3xl mx-auto leading-relaxed">
              From marketing project manager to blockchain developer - discover my journey into the world of 
              Web3, NFTs, and digital innovation.
            </p>
          </div>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#about"
              className="px-6 py-3 bg-blue-6 hover:bg-blue-7 text-blue-12 rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-blue-6/20 border border-blue-7"
            >
              My Story
            </a>
            <Link
              href="/blog"
              className="px-6 py-3 bg-blue-9 hover:bg-blue-10 text-blue-contrast rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-blue-9/25"
            >
              Read My Blog
            </Link>
            <Link
              href="/#nfts"
              className="px-6 py-3 bg-gradient-to-r from-blue-7 to-blue-8 hover:from-blue-8 hover:to-blue-9 text-blue-contrast rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-blue-8/25"
            >
              View My NFTs
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <footer className="border-t-4 border-blue-6 py-16 bg-gradient-to-br from-blue-4 via-blue-5 to-blue-6 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-9 via-blue-8 to-blue-10 shadow-2xl shadow-blue-9/40 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-contrast rounded-lg"></div>
              </div>
              <div>
                <span className="text-blue-12 font-bold text-2xl block">BoosterB</span>
                <span className="text-blue-10 text-sm font-medium">Building the future, one project at a time</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/blog" className="text-blue-11 hover:text-blue-12 transition-colors px-4 py-3 rounded-xl hover:bg-blue-7 font-medium">Blog</Link>
              <Link href="/#nfts" className="text-blue-11 hover:text-blue-12 transition-colors px-4 py-3 rounded-xl hover:bg-blue-7 font-medium">NFTs</Link>
              <Link href="/about" className="text-blue-11 hover:text-blue-12 transition-colors px-4 py-3 rounded-xl hover:bg-blue-7 font-medium">About</Link>
            </div>
          </div>
          <div className="pt-8 border-t-2 border-blue-7 text-center">
            <p className="text-blue-11 font-medium">© 2025 BoosterB NFT Marketplace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}