import ShowcaseNFT from './components/ShowcaseNFT';
import BlogList from './components/BlogList';
import { getRecentBlogPosts } from './lib/blog';

export default async function Home() {
  const recentPosts = await getRecentBlogPosts(3);
  return (
    <div className="min-h-screen bg-blue-a1">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-blue-a4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/bblogo.png" 
                alt="LeRoiElvi Logo" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-blue-9 font-bold text-lg">BoosterB - ElvisB projects </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#nfts" className="text-blue-7 hover:text-blue-9 transition-colors font-medium">My NFTs</a>
              <a href="#about" className="text-blue-7 hover:text-blue-9 transition-colors font-medium">Let&apos;s Connect</a>
              <a href="#blog" className="text-blue-7 hover:text-blue-9 transition-colors font-medium">My Story</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="gradient-text">Hello there, I&apos;m Elvis!</span><br />
              <span className="text-blue-9">Welcome to my website</span>
            </h1>
            <p className="text-xl text-blue-7 max-w-2xl mx-auto leading-relaxed">
              Here you can learn more about me and my work. Feel free to contact me !
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="glass rounded-2xl p-8 md:p-12 bg-blue-a1">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-9 mb-8">Welcome to My Digital Journey</h2>
              <div className="text-lg text-blue-7 leading-relaxed space-y-6">
                <p>
                  Hi, I&apos;m Elvis, I&apos;m a marketing project manager for listed company leveraging blockchain technology in the video game industry, CBI. 
                  Here on my website you can find my personal projects, my NFT collection, and my coding journey so far! 
                </p>
                <p>
                  I heard about vibe coding earlier this year, and I was always interested in coding, so I decided to give it a try.
                  in June 2025 I started my coding journey. I&apos;m currently learning React, Next.js, and Tailwind CSS. 
                  I&apos;m also learning about Blockchain and smart contracts, and I&apos;m currently working on several projects leveraging AI and blockchain technology.. 
                </p>
                <p>
                  I&apos;d love to hear from you, so feel free to contact me!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Neutrl inspired */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-9 mb-4">My <span className="gradient-text">Projects</span></h2>
            <p className="text-xl text-blue-7 max-w-2xl mx-auto">
              Discover what I&apos;ve been building in the pasts month. By leveraging AI and powerfull tools, it has never been easier to bring an idea to life. 
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-xl p-6 text-center bg-blue-a2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-9 to-blue-7 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-contrast" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-9 mb-2">Vibe Code Journey</h3>
              <p className="text-blue-7">here you can find my entire coding journey,keep track of my improvements and advancent.</p>
            </div>
            <div className="glass rounded-xl p-6 text-center bg-blue-a2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-9 to-blue-7 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-contrast" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-9 mb-2">My NFT collections</h3>
              <p className="text-blue-7">In this section you can discover my NFTs and other blockchain stuff I&apos;ve worked on.</p>
            </div>
            <div className="glass rounded-xl p-6 text-center bg-blue-a2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-9 to-blue-7 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-contrast" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-9 mb-2">Community Driven</h3>
              <p className="text-blue-7">Join a vibrant community of collectors, artists, and NFT enthusiasts.</p>
            </div>
          </div>
        </section>

        {/* My NFT Collection Section */}
        <section id="nfts" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-9 mb-4">My <span className="gradient-text">NFTs</span></h2>
            <p className="text-xl text-blue-7 max-w-2xl mx-auto">
              Here the first Nft I&apos;ve minted, inspired by one of my fav games ever Minecraft. I named it the elvisminecraftcollection... yes a litte lack if inspiration here... I have deployed it on the Polygon Amoy testnet.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 bg-blue-a1">
            <ShowcaseNFT />
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog">
          <BlogList 
            posts={recentPosts}
            limit={3}
            title="Latest from My Blog"
            subtitle="Discover my thoughts, experiences, and learnings from my coding journey"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-a4 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-9 to-blue-7"></div>
              <span className="text-blue-9 font-bold text-lg">BoosterB</span>
            </div>
            <div className="flex items-center space-x-8 text-blue-7 text-sm">
              <a href="#" className="hover:text-blue-9 transition-colors">Documentation</a>
              <a href="#" className="hover:text-blue-9 transition-colors">Community</a>
              <a href="#" className="hover:text-blue-9 transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-a4 text-center text-blue-7 text-sm">
            <p>© 2025 BoosterB NFT Marketplace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
