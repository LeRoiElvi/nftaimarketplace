import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost, getBlogSlugs } from '../../lib/blog';
import ThemeToggle from '../../components/ThemeToggle';

// Custom MDX components
type WithChildren = { children: React.ReactNode };
type AnchorProps = { children: React.ReactNode; href?: string };

const mdxComponents = {
  h1: ({ children }: WithChildren) => (
    <h1 className="text-4xl font-bold text-blue-9 mb-6 mt-8 first:mt-0">{children}</h1>
  ),
  h2: ({ children }: WithChildren) => (
    <h2 className="text-3xl font-bold text-blue-9 mb-4 mt-8">{children}</h2>
  ),
  h3: ({ children }: WithChildren) => (
    <h3 className="text-2xl font-bold text-blue-8 mb-3 mt-6">{children}</h3>
  ),
  p: ({ children }: WithChildren) => (
    <p className="text-blue-7 mb-4 leading-relaxed">{children}</p>
  ),
  a: ({ children, href }: AnchorProps) => (
    <a 
      href={href} 
      className="text-blue-9 hover:text-blue-10 transition-colors underline"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  ul: ({ children }: WithChildren) => (
    <ul className="list-disc list-inside text-blue-7 mb-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }: WithChildren) => (
    <ol className="list-decimal list-inside text-blue-7 mb-4 space-y-2">{children}</ol>
  ),
  li: ({ children }: WithChildren) => (
    <li className="ml-4">{children}</li>
  ),
  blockquote: ({ children }: WithChildren) => (
    <blockquote className="border-l-4 border-blue-9 pl-4 py-2 my-4 bg-blue-a1 rounded-r-lg">
      <div className="text-blue-7 italic">{children}</div>
    </blockquote>
  ),
  code: ({ children }: WithChildren) => (
    <code className="px-2 py-1 bg-blue-a2 rounded text-blue-9 text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }: WithChildren) => (
    <pre className="bg-gray-12 rounded-lg p-4 overflow-x-auto mb-4 border border-gray-1/10">
      <code className="text-gray-1 font-mono text-sm">{children}</code>
    </pre>
  ),
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Elvis's Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

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
    <div className="min-h-screen bg-gray-12">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-blue-a4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <img 
                  src="/bblogo.png" 
                  alt="LeRoiElvi Logo" 
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <span className="text-blue-9 font-bold text-lg">BoosterB - ElvisB projects</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#nfts" className="text-blue-7 hover:text-blue-9 transition-colors font-medium">My NFTs</Link>
              <Link href="/#about" className="text-blue-7 hover:text-blue-9 transition-colors font-medium">Let&apos;s Connect</Link>
              <Link href="/blog" className="text-blue-7 hover:text-blue-9 transition-colors font-medium">My Story</Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Post Content */}
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center space-x-2 text-blue-9 hover:text-blue-10 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Blog</span>
            </Link>
          </div>

          {/* Hero Image */}
          {post.image && (
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}

          {/* Post Header */}
          <header className="mb-8">
            {post.featured && (
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-9 to-blue-7 text-blue-contrast text-sm font-semibold rounded-full mb-4">
                Featured Post
              </span>
            )}
            
            <h1 className="text-4xl md:text-6xl font-bold text-blue-9 mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center space-x-6 text-blue-7 mb-6">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>By {post.author}</span>
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
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-a2 text-blue-9 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Post Content */}
          <div className="glass rounded-2xl p-8 md:p-12 bg-blue-a1">
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>
          </div>

          {/* Post Footer */}
          <footer className="mt-12 pt-8 border-t border-blue-a4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-9 to-blue-7 flex items-center justify-center">
                  <span className="text-blue-contrast font-bold text-lg">E</span>
                </div>
                <div>
                  <p className="text-blue-9 font-semibold">{post.author}</p>
                  <p className="text-blue-7 text-sm">Writer & Developer</p>
                </div>
              </div>
              
              <Link
                href="/blog"
                className="px-6 py-3 bg-blue-9 hover:bg-blue-10 text-blue-contrast rounded-lg font-semibold transition-all"
              >
                Read More Posts
              </Link>
            </div>
          </footer>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-blue-a4 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-9 to-blue-7"></div>
              <span className="text-blue-9 font-bold text-lg">BoosterB</span>
            </div>
            <div className="flex items-center space-x-8 text-blue-7 text-sm">
              <Link href="#" className="hover:text-blue-9 transition-colors">Documentation</Link>
              <Link href="#" className="hover:text-blue-9 transition-colors">Community</Link>
              <Link href="#" className="hover:text-blue-9 transition-colors">Support</Link>
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
