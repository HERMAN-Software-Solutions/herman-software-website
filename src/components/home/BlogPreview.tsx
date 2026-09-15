import { SectionHeading } from "@/components/shared/SectionHeading";
import { BlogCard } from "@/components/shared/BlogCard";
import { Button } from "@/components/shared/Button";
import { blogPosts } from "@/data/blog-posts";

export function BlogPreview() {
  // Show only the first 3 posts
  const preview = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-surface">
      <div className="container-site">
        <SectionHeading
          title="Insights & Articles"
          subtitle="Technical thinking, practical advice — sharing what we learn from every project."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((post) => (
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
        <div className="mt-10 text-center">
          <Button href="/blog" variant="secondary">
            Visit Our Blog
          </Button>
        </div>
      </div>
    </section>
  );
}