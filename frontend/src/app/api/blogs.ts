import { NextApiRequest, NextApiResponse } from 'next';
import { getAllBlogPosts, BlogPost } from '../../lib/blog';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPost[] | { message: string }>
) {
  try {
    const posts = await getAllBlogPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load blog posts.' });
  }
}

