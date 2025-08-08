import ShowcaseNFT from './components/ShowcaseNFT';
import BlogList from './components/BlogList';
import ThemeToggle from './components/ThemeToggle';
import { getRecentBlogPosts } from './lib/blog';

export default async function Home() {
  const recentPosts = await getRecentBlogPosts(3);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-1 via-gray-1 to-blue-2">
      {/* Navigation - Much more blue personality */}
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
                <span className="text-blue-contrast font-bold text-lg">BoosterB</span>
                <span className="text-blue-4 text-sm block leading-none">ElvisB projects</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#nfts" className="text-blue-3 hover:text-blue-contrast hover:bg-blue-8 px-4 py-2 rounded-lg transition-all duration-200 font-medium">My NFTs</a>
              <a href="#about" className="text-blue-3 hover:text-blue-contrast hover:bg-blue-8 px-4 py-2 rounded-lg transition-all duration-200 font-medium">Let&apos;s Connect</a>
              <a href="#blog" className="text-blue-3 hover:text-blue-contrast hover:bg-blue-8 px-4 py-2 rounded-lg transition-all duration-200 font-medium">My Story</a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Bold blue elements */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Enhanced background with more blue */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-6 to-blue-8 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-5 to-blue-7 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-4 to-blue-6 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-12">
            {/* Enhanced status badge with more blue */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-9 to-blue-8 border-2 border-blue-7 mb-8 shadow-xl shadow-blue-9/30">
              <div className="w-3 h-3 bg-blue-4 rounded-full animate-pulse shadow-lg"></div>
              <span className="text-blue-contrast text-sm font-semibold">Available for projects</span>
              <div className="w-2 h-2 bg-blue-5 rounded-full"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-none">
              <span className="bg-gradient-to-r from-blue-11 via-blue-9 to-blue-10 bg-clip-text text-transparent block animate-pulse-slow">
                Hello there,
              </span>
              <span className="bg-gradient-to-r from-blue-9 via-blue-11 to-blue-8 bg-clip-text text-transparent block">
                I&apos;m Elvis!
              </span>
              <span className="text-gray-11 block text-3xl md:text-4xl lg:text-5xl mt-6 font-medium">
                Welcome to my 
                <span className="bg-gradient-to-r from-blue-9 to-blue-11 bg-clip-text text-transparent"> digital space</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-10 max-w-3xl mx-auto leading-relaxed mb-8">
              Marketing professional turned blockchain enthusiast, sharing my coding journey and NFT creations.
            </p>
          </div>
          
          {/* Enhanced CTA Buttons with blue focus */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group px-10 py-5 bg-gradient-to-r from-blue-9 via-blue-8 to-blue-10 hover:from-blue-10 hover:via-blue-9 hover:to-blue-11 text-blue-contrast font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl shadow-blue-9/40 hover:shadow-blue-9/60 hover:scale-105 border-2 border-blue-7 hover:border-blue-6">
              <span className="flex items-center gap-3">
                Explore My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="group px-10 py-5 bg-gradient-to-r from-blue-4 to-blue-5 hover:from-blue-5 hover:to-blue-6 text-blue-11 hover:text-blue-12 font-bold text-lg rounded-2xl transition-all duration-300 border-2 border-blue-6 hover:border-blue-7 shadow-lg hover:shadow-xl hover:scale-105">
              <span className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </span>
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6">
        {/* Introduction Section - Blue accent borders */}
        <section className="mb-20">
          <div className="relative">
            {/* Blue glow border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-6 via-blue-7 to-blue-8 rounded-3xl blur opacity-75"></div>
            <div className="relative bg-gray-contrast rounded-2xl p-1">
              <div className="bg-gradient-to-br from-gray-contrast to-blue-1 rounded-xl p-8 md:p-12">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-9 via-blue-8 to-blue-10 flex items-center justify-center shadow-2xl shadow-blue-9/40">
                        <svg className="w-10 h-10 text-blue-contrast" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      {/* Floating blue dots */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-6 rounded-full animate-bounce"></div>
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-8 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    <span className="text-gray-12">Welcome to My</span>
                    <span className="bg-gradient-to-r from-blue-9 to-blue-11 bg-clip-text text-transparent"> Digital Journey</span>
                  </h2>
                  <div className="text-lg text-gray-10 leading-relaxed space-y-6">
                    <p>
                      Hi, I&apos;m <span className="text-blue-9 font-semibold">Elvis</span>, a marketing project manager for a listed company leveraging blockchain technology in the video game industry, <span className="text-blue-9 font-semibold">CBI</span>. 
                      Here on my website you can find my personal projects, my NFT collection, and my coding journey so far! 
                    </p>
                    <p>
                      I heard about <span className="text-blue-9 font-semibold">vibe coding</span> earlier this year, and I was always interested in coding, so I decided to give it a try.
                      In June 2025 I started my coding journey. I&apos;m currently learning <span className="text-blue-9 font-semibold">React, Next.js, and Tailwind CSS</span>. 
                      I&apos;m also learning about Blockchain and smart contracts, working on several projects leveraging AI and blockchain technology. 
                    </p>
                    <div className="bg-gradient-to-r from-blue-4 to-blue-5 p-4 rounded-xl border-2 border-blue-6">
                      <p className="text-blue-12 font-semibold">
                        I&apos;d love to hear from you, so feel free to contact me!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Blue-focused cards */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-12 mb-6">
              My <span className="bg-gradient-to-r from-blue-9 via-blue-8 to-blue-11 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-10 max-w-2xl mx-auto leading-relaxed">
              Discover what I&apos;ve been building in the past months. By leveraging <span className="text-blue-9 font-semibold">AI and powerful tools</span>, it has never been easier to bring an idea to life. 
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Enhanced with blue accents */}
            <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-contrast to-blue-1 border-2 border-blue-5 hover:border-blue-7 shadow-lg hover:shadow-2xl hover:shadow-blue-9/20 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-6/10 to-blue-8/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-9 via-blue-8 to-blue-10 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-blue-9/40 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-blue-contrast" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-12 mb-4">
                  <span className="text-blue-9">Vibe Code</span> Journey
                </h3>
                <p className="text-gray-10 leading-relaxed">Here you can find my entire coding journey, keep track of my improvements and advancement.</p>
                <div className="mt-6 inline-flex items-center text-blue-9 font-semibold group-hover:text-blue-11 transition-colors">
                  Learn More 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Card 2 - Featured with stronger blue */}
            <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-4 to-blue-6 border-2 border-blue-8 shadow-2xl shadow-blue-9/30 hover:shadow-blue-9/50 transition-all duration-300 hover:-translate-y-2 scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-8/20 to-blue-10/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-11 via-blue-10 to-blue-12 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-blue-contrast" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-12 mb-4">
                  My <span className="text-blue-contrast">NFT Collections</span>
                </h3>
                <p className="text-blue-11 leading-relaxed font-medium">In this section you can discover my NFTs and other blockchain projects I&apos;ve worked on.</p>
                <div className="mt-6 inline-flex items-center text-blue-12 font-bold group-hover:text-blue-contrast transition-colors">
                  Explore NFTs 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-contrast to-blue-1 border-2 border-blue-5 hover:border-blue-7 shadow-lg hover:shadow-2xl hover:shadow-blue-9/20 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-6/10 to-blue-8/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-9 via-blue-8 to-blue-10 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-blue-9/40 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-blue-contrast" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-12 mb-4">
                  <span className="text-blue-9">Community</span> Driven
                </h3>
                <p className="text-gray-10 leading-relaxed">Join a vibrant community of collectors, artists, and NFT enthusiasts.</p>
                <div className="mt-6 inline-flex items-center text-blue-9 font-semibold group-hover:text-blue-11 transition-colors">
                  Join Community 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My NFT Collection Section - Bold blue showcase */}
        <section id="nfts" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-12 mb-6">
              My <span className="bg-gradient-to-r from-blue-9 via-blue-8 to-blue-11 bg-clip-text text-transparent">NFTs</span>
            </h2>
            <p className="text-xl text-gray-10 max-w-2xl mx-auto leading-relaxed">
              Here&apos;s the first NFT I&apos;ve minted, inspired by one of my favorite games ever, <span className="text-blue-9 font-semibold">Minecraft</span>. I named it the <span className="text-blue-9 font-semibold">elvisminecraftcollection</span> and deployed it on the <span className="text-blue-9 font-semibold">Polygon Amoy testnet</span>.
            </p>
          </div>
          
          {/* Enhanced NFT showcase container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-8 via-blue-9 to-blue-10 rounded-3xl blur opacity-60"></div>
            <div className="relative bg-gradient-to-br from-gray-contrast via-blue-1 to-blue-2 rounded-2xl p-2 border-2 border-blue-6">
              <div className="bg-gray-contrast rounded-xl p-8 border border-blue-4">
                <ShowcaseNFT />
              </div>
            </div>
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

      {/* Footer - Blue personality */}
      <footer className="border-t-4 border-blue-6 py-16 bg-gradient-to-br from-blue-4 via-blue-5 to-blue-6 mt-24">
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
              <a href="#" className="text-blue-11 hover:text-blue-12 transition-colors px-4 py-3 rounded-xl hover:bg-blue-7 font-medium">Documentation</a>
              <a href="#" className="text-blue-11 hover:text-blue-12 transition-colors px-4 py-3 rounded-xl hover:bg-blue-7 font-medium">Community</a>
              <a href="#" className="text-blue-11 hover:text-blue-12 transition-colors px-4 py-3 rounded-xl hover:bg-blue-7 font-medium">Support</a>
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