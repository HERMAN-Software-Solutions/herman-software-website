import { BlogCard } from "@/components/shared/BlogCard";
import type { BlogPost } from "@/data/blog-posts";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-foreground">No articles found in this category.</p>
        <a href="/blog" className="mt-4 inline-block text-teal hover:underline">
          View all articles
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
          category={post.category}
          href={`/blog/${post.slug}`}
        />
      ))}
    </div>
  );
}