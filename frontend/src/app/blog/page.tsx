import Link from 'next/link';
import BlogList from '../components/BlogList';
import { getAllBlogPosts } from '../lib/blog';

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen gray-gradient-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <img 
                  src="/bblogo.png" 
                  alt="LeRoiElvi Logo" 
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <span className="text-white font-bold text-lg">BoosterB - ElvisB projects</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#nfts" className="text-[var(--neutral-400)] hover:text-white transition-colors font-medium">My NFTs</Link>
              <Link href="/#about" className="text-[var(--neutral-400)] hover:text-white transition-colors font-medium">Let&apos;s Connect</Link>
              <Link href="/blog" className="text-white font-medium">My Story</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="gradient-text">My Blog</span><br />
              <span className="text-white">Stories & Insights</span>
            </h1>
            <p className="text-xl text-[var(--neutral-300)] max-w-2xl mx-auto leading-relaxed">
              Welcome to my blog! Here I share my thoughts, experiences, and learnings from my journey in coding, blockchain, NFTs, and life in general.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6">
        <BlogList 
          posts={posts}
          title="All Blog Posts"
          subtitle="Explore all my articles, tutorials, and thoughts"
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600"></div>
              <span className="text-white font-bold text-lg">BoosterB</span>
            </div>
            <div className="flex items-center space-x-8 text-[var(--neutral-300)] text-sm">
              <Link href="#" className="hover:text-white transition-colors">Documentation</Link>
              <Link href="#" className="hover:text-white transition-colors">Community</Link>
              <Link href="#" className="hover:text-white transition-colors">Support</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-[var(--neutral-300)] text-sm">
            <p>© 2025 BoosterB NFT Marketplace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
