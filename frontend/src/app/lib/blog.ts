import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  featured: boolean;
  image?: string;
  readTime: number;
}

export interface BlogPostWithContent extends BlogPost {
  content: string; // Raw MDX content
}

// Ensure blog directory exists
function ensureBlogDirectory() {
  if (!fs.existsSync(blogDirectory)) {
    fs.mkdirSync(blogDirectory, { recursive: true });
  }
}

// Get all blog post slugs
export function getBlogSlugs(): string[] {
  ensureBlogDirectory();
  const files = fs.readdirSync(blogDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

// Get blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPostWithContent | null> {
  try {
    ensureBlogDirectory();
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Calculate read time (rough estimate: 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || content.substring(0, 160) + '...',
      author: data.author || 'Elvis',
      tags: data.tags || [],
      featured: data.featured || false,
      image: data.image,
      readTime,
      content, // Return raw MDX content
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

// Get all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  ensureBlogDirectory();
  const slugs = getBlogSlugs();
  const posts: BlogPost[] = [];

  for (const slug of slugs) {
    try {
      const fullPath = path.join(blogDirectory, `${slug}.mdx`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Calculate read time
      const wordCount = content.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / 200);

      posts.push({
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || content.substring(0, 160) + '...',
        author: data.author || 'Elvis',
        tags: data.tags || [],
        featured: data.featured || false,
        image: data.image,
        readTime,
      });
    } catch (error) {
      console.error(`Error reading blog post ${slug}:`, error);
    }
  }

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get featured blog posts
export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter(post => post.featured);
}

// Get blog posts by tag
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter(post => 
    post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

// Get recent blog posts
export async function getRecentBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.slice(0, limit);
}

// Get all unique tags
export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllBlogPosts();
  const tags = new Set<string>();
  
  allPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}
