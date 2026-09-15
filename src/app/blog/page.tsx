"use client";

import { useState, useEffect } from "react";
import { BlogList } from "@/components/blog/BlogList";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { getBlogPosts } from "@/sanity/queries";
import { CardSkeleton } from "@/components/shared/Skeleton";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getBlogPosts().then((posts) => {
      setBlogPosts(posts);
      setFilteredPosts(posts);
      setLoading(false);
    });
  }, []);

  const categories: string[] = Array.from(new Set(blogPosts.map((p: any) => p.category as string).filter(Boolean)));

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterPosts(query, selectedCategory);
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    filterPosts(searchQuery, category);
  };

  const filterPosts = (query: string, category: string | null) => {
    let filtered = blogPosts;
    
    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (post: any) =>
          post.title.toLowerCase().includes(q) ||
          post.excerpt?.toLowerCase().includes(q) ||
          post.category?.toLowerCase().includes(q)
      );
    }
    
    if (category) {
      filtered = filtered.filter((post: any) => post.category === category);
    }
    
    setFilteredPosts(filtered);
  };

  return (
    <>
      <section className="bg-navy-dark py-20 text-center">
        <div className="container-site">
          <h1 className="text-white">Technical Insights & Practical Guides</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-medium">
            We share what we learn about software engineering, digital transformation, and technology decision-making.
          </p>
        </div>
      </section>
      <section className="section-padding bg-surface">
        <div className="container-site">
          {/* Search Bar */}
          <div className="mb-8">
            <BlogSearch onSearch={handleSearch} />
          </div>
          
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {loading ? (
                <div className="grid gap-6 sm:grid-cols-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <CardSkeleton key={i} />
                  ))}
                </div>
              ) : (
                <BlogList posts={filteredPosts} />
              )}
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar 
                categories={categories} 
                activeCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}