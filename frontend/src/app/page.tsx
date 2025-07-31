export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">NFT AI Marketplace</h1>
          <p className="text-xl opacity-90">Discover, Trade, and Create AI-Generated NFTs</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center space-x-8 py-4">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">About</a>
            <a href="#blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Blog</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Us</h2>
            <div className="prose prose-lg text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                Welcome to the future of digital art and collectibles. Our NFT AI Marketplace is a cutting-edge platform 
                where artificial intelligence meets blockchain technology to create, trade, and discover unique digital assets.
              </p>
              <p className="mb-4">
                We believe in democratizing the creation of digital art through AI, making it accessible for everyone 
                to participate in the NFT ecosystem. Whether you're an artist, collector, or enthusiast, our platform 
                provides the tools and community you need.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>AI-powered NFT generation</li>
                <li>Secure blockchain transactions</li>
                <li>Community-driven marketplace</li>
                <li>Easy-to-use interface</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="mb-16">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Latest from Our Blog</h2>
            
            {/* Blog Posts */}
            <div className="space-y-6">
              <article className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  The Future of AI-Generated Art
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">January 28, 2025</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Exploring how artificial intelligence is revolutionizing the creation and ownership of digital art...
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read more →</a>
              </article>
              
              <article className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Getting Started with NFTs
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">January 25, 2025</p>
                <p className="text-gray-700 dark:text-gray-300">
                  A beginner's guide to understanding NFTs, blockchain technology, and how to start your collection...
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read more →</a>
              </article>
              
              <article className="pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Community Spotlight
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">January 22, 2025</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Featuring amazing creators in our community and their incredible AI-generated NFT collections...
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read more →</a>
              </article>
            </div>
            
            <div className="mt-8 text-center">
              <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View All Posts
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 NFT AI Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
