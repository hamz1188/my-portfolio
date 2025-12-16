import RSS from 'rss';
import { getSortedPostsData } from '../lib/posts';
import { portfolioData } from '../data/portfolio';

export async function GET() {
  const posts = getSortedPostsData();
  const siteUrl = 'https://my-portfolio-pta15p36a-duneswear.vercel.app'; // Update with your actual production URL

  const feed = new RSS({
    title: `${portfolioData.personalInfo.name}'s Blog`,
    description: "Thoughts, tutorials, and insights on software development.",
    site_url: siteUrl,
    feed_url: `${siteUrl}/feed.xml`,
    image: `${siteUrl}/favicon.ico`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${portfolioData.personalInfo.name}`,
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      date: post.date,
      author: portfolioData.personalInfo.name,
      categories: post.tags,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

