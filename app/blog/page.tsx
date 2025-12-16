import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <section className="py-24 bg-[var(--color-background)] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Blog
          </h1>
          <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on software development.
          </p>
          <div className="w-24 h-1.5 bg-[var(--color-primary)] mx-auto rounded-full opacity-80 mt-6"></div>
        </div>

        <div className="grid gap-8">
          {allPosts.map((post) => (
            <article 
              key={post.slug}
              className="bg-[var(--color-secondary)]/30 rounded-3xl p-8 border border-[var(--color-muted)] hover:border-[var(--color-primary)]/30 transition-all hover:-translate-y-1 group"
            >
              <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-4">
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-background)] border border-[var(--color-muted)] text-[var(--color-foreground)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <time className="text-sm text-[var(--color-muted-foreground)] font-medium">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
              </div>

              <Link href={`/blog/${post.slug}`} className="block group-hover:opacity-80 transition-opacity">
                <h2 className="text-2xl font-bold mb-3 text-[var(--color-foreground)]">
                  {post.title}
                </h2>
                <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center text-[var(--color-primary)] font-medium">
                  Read Article 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

