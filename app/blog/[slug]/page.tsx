import { getPostData, getSortedPostsData } from '../../lib/posts';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

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
        {/* Back to Blog Link */}
        <div className="mb-8 animate-fade-in-up">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>

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

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto animate-fade-in-up delay-200">
          <ReactMarkdown
            components={{
              a: (props) => {
                const isExternal = props.href?.startsWith('http');
                return (
                  <a
                    {...props}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                  />
                );
              }
            }}
          >
            {postData.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
