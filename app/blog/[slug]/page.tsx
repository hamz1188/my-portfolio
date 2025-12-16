import { getPostData, getSortedPostsData } from '../../lib/posts';
import ReactMarkdown from 'react-markdown';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  // Await params to fix the error
  const { slug } = await params;
  const postData = getPostData(slug);

  return (
    <article className="py-24 bg-[var(--color-background)] min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-12 text-center animate-fade-in-up">
          <div className="flex gap-2 justify-center mb-6">
            {postData.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-secondary)] text-[var(--color-foreground)]">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--color-foreground)] leading-tight">
            {postData.title}
          </h1>
          <time className="text-[var(--color-muted-foreground)]">
            {new Date(postData.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </time>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
          <ReactMarkdown>
            {postData.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}

