import Link from 'next/link';
import BlogList from '../components/BlogList';
import ThemeToggle from '../components/ThemeToggle';
import { getAllBlogPosts } from '../lib/blog';
import Footer from '../components/Footer';

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen">
      {/* Navigation - Consistent with home page */}
      <nav className="fixed top-0 w-full z-50 bg-gray-1/95 backdrop-blur-xl border-b border-gray-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-4 to-blue-6 p-1 shadow-lg">
                  <Link href="/">
                    <img 
                      src="/bblogo.png" 
                      alt="LeRoiElvi Logo" 
                      className="w-full h-full rounded-lg object-cover cursor-pointer"
                    />
                  </Link>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-blue-11 to-blue-12 rounded-full border-2 border-blue-9 shadow-sm animate-pulse"></div>
              </div>
              <div>
                <Link href="/" className="cursor-pointer">
                  <span className="text-gray-12 font-bold text-lg">BoosterB</span>
                  <span className="text-gray-11 text-sm block leading-none">ElvisB projects</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/#nfts" className="text-gray-11 hover:text-gray-12 hover:bg-blue-8/20 px-4 py-2 rounded-lg transition-all duration-200 font-medium">My NFTs</Link>
              <Link href="/#about" className="text-gray-11 hover:text-gray-12 hover:bg-blue-8/20 px-4 py-2 rounded-lg transition-all duration-200 font-medium">Let&apos;s Connect</Link>
              <Link href="/blog" className="text-blue-11 hover:text-blue-12 hover:bg-blue-8/20 px-4 py-2 rounded-lg transition-all duration-200 font-medium">My Story</Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Consistent with home page style */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Enhanced background with blue elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-3 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-4 rounded-full blur-3xl opacity-15"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-none">
              <span className="text-gray-12 block">My</span>
              <span className="text-blue-11 block">Blog</span>
              <span className="text-gray-11 block text-3xl md:text-4xl lg:text-5xl mt-6 font-medium">
                Stories & 
                <span className="bg-gradient-to-r from-blue-9 to-blue-11 bg-clip-text text-transparent"> Insights</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-11 max-w-3xl mx-auto leading-relaxed mb-8">
              Welcome to my blog! Here I share my thoughts, experiences, and learnings from my journey in <span className="text-blue-11 font-semibold">coding, blockchain, NFTs</span>, and life in general.
            </p>
          </div>
          

      {/* Blog Content */}
      <main className="max-w-7xl mx-auto px-6">
        <BlogList 
          posts={posts}
          title=""
          subtitle=""
        />
      </main>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link href="/#about">
              <button className="group px-6 py-3 bg-blue-9 hover:bg-blue-10 text-blue-contrast font-medium text-base rounded-lg transition-colors border border-blue-9 hover:border-blue-10">
                <span className="flex items-center gap-3">
                  Get in Touch
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Consistent with home page */}
      <footer className="border-t border-gray-6 py-12 bg-gray-2 mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-9 via-blue-8 to-blue-10 shadow-2xl shadow-blue-9/40 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-contrast rounded-lg"></div>
              </div>
              <div>
                <span className="text-gray-12 font-bold text-2xl block">BoosterB</span>
                <span className="text-gray-11 text-sm font-medium">Building the future, one project at a time</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/#about" className="text-gray-11 hover:text-gray-12 transition-colors px-4 py-3 rounded-xl hover:bg-gray-3 font-medium">Documentation</Link>
              <Link href="/#about" className="text-gray-11 hover:text-gray-12 transition-colors px-4 py-3 rounded-xl hover:bg-gray-3 font-medium">Community</Link>
              <Link href="/#about" className="text-gray-11 hover:text-gray-12 transition-colors px-4 py-3 rounded-xl hover:bg-gray-3 font-medium">Support</Link>
            </div>
          </div>
          <div className="pt-8 border-t-2 border-blue-7 text-center">
            <p className="text-gray-11 font-medium">© 2025 BoosterB NFT Marketplace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}