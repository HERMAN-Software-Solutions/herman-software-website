"use client";

interface BlogSidebarProps {
  categories: string[];
  activeCategory?: string | null;
  onCategoryChange?: (category: string | null) => void;
}

export function BlogSidebar({ categories, activeCategory, onCategoryChange }: BlogSidebarProps) {
  const handleCategoryClick = (category: string | null, e: React.MouseEvent) => {
    if (onCategoryChange) {
      e.preventDefault();
      onCategoryChange(category);
    }
  };

  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div>
        <h4 className="mb-4 text-body-sm font-semibold uppercase tracking-wider text-foreground">
          Categories
        </h4>
        <ul className="space-y-2">
          <li>
            <a
              href="/blog"
              onClick={(e) => handleCategoryClick(null, e)}
              className={`text-body-sm transition-colors hover:text-teal ${
                !activeCategory ? "font-medium text-teal" : "text-foreground"
              }`}
            >
              All Posts
            </a>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <a
                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={(e) => handleCategoryClick(category, e)}
                className={`text-body-sm transition-colors hover:text-teal ${
                  activeCategory === category ? "font-medium text-teal" : "text-foreground"
                }`}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="rounded-card bg-navy-dark p-6 text-center">
        <h4 className="mb-2 text-white">Need a Software Partner?</h4>
        <p className="mb-4 text-body-sm text-gray-medium">
          Let&apos;s discuss your project — free consultation.
        </p>
        <a
          href="/get-quote"
          className="inline-block rounded-md bg-teal px-4 py-2 text-body-sm font-semibold text-white hover:bg-teal-dark transition-colors"
        >
          Get a Quote
        </a>
      </div>
    </aside>
  );
}