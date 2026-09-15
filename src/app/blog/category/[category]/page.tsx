import { BlogList } from "@/components/blog/BlogList";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { blogPosts } from "@/data/blog-posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default function BlogCategoryPage({ params }: { params: { category: string } }) {
  const allCategories = Array.from(new Set(blogPosts.map((p) => p.category)));
  
  // Find the actual category name from the slug
  const activeCategory = allCategories.find(
    (c) => c.toLowerCase().replace(/\s+/g, "-") === params.category
  );

  if (!activeCategory) {
    notFound();
  }

  const filteredPosts = blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="bg-navy-dark py-16 text-center">
        <div className="container-site">
          <h1 className="text-white">{activeCategory}</h1>
          <p className="mt-4 text-body-lg text-gray-medium">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} in this category
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <BlogList posts={filteredPosts} />
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar categories={allCategories} activeCategory={activeCategory} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}