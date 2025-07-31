import NFTDisplay from './components/NFTDisplay';
import ShowcaseNFT from './components/ShowcaseNFT';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600"></div>
              <span className="text-white font-bold text-lg">BoosterB</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#featured" className="text-gray-300 hover:text-white transition-colors font-medium">Featured</a>
              <a href="#nfts" className="text-gray-300 hover:text-white transition-colors font-medium">My NFTs</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors font-medium">About</a>
              <a href="#blog" className="text-gray-300 hover:text-white transition-colors font-medium">Blog</a>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="gradient-text">The next generation</span><br />
              <span className="text-white">of NFT experiences</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Discover and showcase AI-generated NFTs with exclusive blockchain access. 
              Making digital art accessible for everyone.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Explore Collection
            </button>
            <div className="flex items-center space-x-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">LIVE ON AMOY TESTNET</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6">
        {/* Featured NFT Section */}
        <section id="featured" className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">FEATURED COLLECTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Stable, Transferable, <span className="gradient-text">NFT-Generating</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing our latest creation from the elvisminecraftcollection on Polygon Amoy testnet.
            </p>
          </div>
          <div className="glass rounded-2xl p-8">
            <ShowcaseNFT />
          </div>
        </section>

        {/* My NFT Collection Section */}
        <section id="nfts" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Connect Your Wallet</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Connect your MetaMask wallet to view NFTs you own from the elvisminecraftcollection contract.
            </p>
          </div>
          <div className="glass rounded-2xl p-8">
            <NFTDisplay />
          </div>
        </section>

        {/* Features Section - Neutrl inspired */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why <span className="gradient-text">BoosterB</span>?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Market-leading NFT experiences, redefined. Our platform delivers premium digital art discovery by harnessing exclusive blockchain strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-Powered Generation</h3>
              <p className="text-gray-400">Advanced AI algorithms create unique, collectible digital art pieces.</p>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secure Blockchain</h3>
              <p className="text-gray-400">Built on Polygon for fast, secure, and environmentally friendly transactions.</p>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community Driven</h3>
              <p className="text-gray-400">Join a vibrant community of collectors, artists, and NFT enthusiasts.</p>
            </div>
          </div>
        </section>

        {/* Updates Section - Neutrl style */}
        <section id="blog" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Updates</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              What We're Seeing, Building, and Exploring. Ongoing improvements and new features, each release enhances your experience.
            </p>
          </div>
          <div className="space-y-6">
            <article className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">The Future of AI-Generated NFTs</h3>
                  <p className="text-indigo-400 text-sm font-medium">31 Jul 2025</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Exploring how artificial intelligence is revolutionizing the creation and ownership of digital art, making unique collectibles accessible to everyone.
              </p>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Read more →</a>
            </article>
            
            <article className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Polygon Integration Success</h3>
                  <p className="text-indigo-400 text-sm font-medium">28 Jul 2025</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Our seamless integration with Polygon Amoy testnet brings faster transactions and lower fees to the NFT ecosystem.
              </p>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Read more →</a>
            </article>
            
            <article className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Community Spotlight: Early Adopters</h3>
                  <p className="text-indigo-400 text-sm font-medium">25 Jul 2025</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Featuring amazing creators in our community and their incredible AI-generated NFT collections that are pushing boundaries.
              </p>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Read more →</a>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              <span>Explore the updates</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600"></div>
              <span className="text-white font-bold text-lg">BoosterB</span>
            </div>
            <div className="flex items-center space-x-8 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">Community</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>© 2025 BoosterB NFT Marketplace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
