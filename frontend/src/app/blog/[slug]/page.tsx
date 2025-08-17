import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost, getBlogSlugs } from '../../lib/blog';
import ThemeToggle from '../../components/ThemeToggle';

// Custom MDX components with proper Radix UI colors
type WithChildren = { children: React.ReactNode };
type AnchorProps = { children: React.ReactNode; href?: string };

const mdxComponents = {
  h1: ({ children }: WithChildren) => (
    <h1 className="text-4xl font-bold text-gray-12 mb-6 mt-8 first:mt-0">{children}</h1>
  ),
  h2: ({ children }: WithChildren) => (
    <h2 className="text-3xl font-bold text-gray-12 mb-4 mt-8 border-b border-gray-6 pb-2">{children}</h2>
  ),
  h3: ({ children }: WithChildren) => (
    <h3 className="text-2xl font-bold text-gray-12 mb-3 mt-6">{children}</h3>
  ),
  h4: ({ children }: WithChildren) => (
    <h4 className="text-xl font-bold text-gray-12 mb-3 mt-4">{children}</h4>
  ),
  p: ({ children }: WithChildren) => (
    <p className="text-gray-11 mb-4 leading-relaxed text-lg">{children}</p>
  ),
  a: ({ children, href }: AnchorProps) => (
    <a 
      href={href} 
      className="text-blue-11 hover:text-blue-12 transition-colors underline font-medium"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  ul: ({ children }: WithChildren) => (
    <ul className="text-gray-11 mb-4 list-disc list-inside space-y-2 text-lg">{children}</ul>
  ),
  ol: ({ children }: WithChildren) => (
    <ol className="text-gray-11 mb-4 list-decimal list-inside space-y-2 text-lg">{children}</ol>
  ),
  li: ({ children }: WithChildren) => (
    <li className="text-gray-11">{children}</li>
  ),
  blockquote: ({ children }: WithChildren) => (
    <blockquote className="border-l-4 border-blue-9 bg-blue-a1 pl-6 py-4 my-6 italic text-gray-11 text-lg rounded-r-lg">
      {children}
    </blockquote>
  ),
  code: ({ children }: WithChildren) => (
    <code className="bg-gray-3 text-blue-11 px-2 py-1 rounded text-sm font-mono">{children}</code>
  ),
  pre: ({ children }: WithChildren) => (
    <pre className="bg-gray-2 border border-gray-6 text-gray-11 p-4 rounded-lg overflow-x-auto my-6 text-sm">
      {children}
    </pre>
  ),
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <div className="my-8">
      <img src={src} alt={alt} className="w-full rounded-lg shadow-lg border border-gray-6" />
      {alt && <p className="text-gray-10 text-sm text-center mt-2 italic">{alt}</p>}
    </div>
  ),
  hr: () => (
    <hr className="border-gray-6 my-8" />
  ),
  strong: ({ children }: WithChildren) => (
    <strong className="text-gray-12 font-bold">{children}</strong>
  ),
  em: ({ children }: WithChildren) => (
    <em className="text-blue-11 italic">{children}</em>
  ),
};

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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

      {/* Article Header */}
      <header className="pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-3 rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-gray-11 mb-8">
            <Link href="/" className="hover:text-gray-12 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-gray-12 transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-blue-11">{post.title}</span>
          </div>

          {/* Featured badge */}
          {post.featured && (
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-9 to-blue-10 text-blue-contrast text-sm font-bold rounded-full mb-6">
              ⭐ Featured Post
            </span>
          )}
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-12 mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Meta information */}
          <div className="flex flex-wrap items-center justify-center space-x-6 text-gray-11 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-9 to-blue-10 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-contrast" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="font-medium">By {post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-blue-a2 text-blue-11 text-sm rounded-full font-medium hover:bg-blue-a3 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-6 pb-16">
        {/* Article body container */}
        <div className="relative">
          {/* Blue glow border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-6 via-blue-7 to-blue-8 rounded-3xl blur opacity-20"></div>
          <div className="relative bg-gray-1 rounded-2xl p-1">
            <article className="bg-gray-1 rounded-xl p-8 md:p-12 prose prose-lg max-w-none">
              <MDXRemote source={post.content} components={mdxComponents} />
            </article>
          </div>
        </div>

        {/* Article footer */}
        <footer className="mt-16 pt-8 border-t border-gray-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Back to blog */}
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-blue-11 hover:text-blue-12 font-semibold transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Blog</span>
            </Link>

            {/* Share buttons */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-11 text-sm font-medium">Share this post:</span>
              <div className="flex space-x-2">
                <button className="w-10 h-10 bg-gray-3 hover:bg-blue-9 text-gray-11 hover:text-blue-contrast rounded-lg transition-colors flex items-center justify-center">
                  <span className="sr-only">Share on Twitter</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-gray-3 hover:bg-blue-9 text-gray-11 hover:text-blue-contrast rounded-lg transition-colors flex items-center justify-center">
                  <span className="sr-only">Share on LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </footer>
      </main>

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