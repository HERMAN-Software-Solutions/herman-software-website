"use client";

import { useState, useEffect } from "react";
import { getProducts } from "@/sanity/queries";

export function ProductShowcase() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <section className="section-padding bg-surface-alt dark:bg-navy-dark">
      <div className="container-site">
        <div className="text-center mb-10">
          <h2 className="mb-3">Try Our Products</h2>
          <p className="mx-auto max-w-2xl text-body-lg text-foreground dark:text-foreground">
            Explore the tools we've built to help millions of users.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.link || "#"}
              target={product.link ? "_blank" : undefined}
              rel={product.link ? "noopener noreferrer" : undefined}
              className="card-base group p-6 transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                    <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                    <polyline points="12,18 20,26 28,18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-h4 group-hover:text-teal transition-colors">{product.name}</h3>
                  {product.badge && (
                    <span className="text-xs font-medium text-teal bg-teal/10 px-2 py-0.5 rounded-full">{product.badge}</span>
                  )}
                </div>
              </div>
              <p className="text-body-sm text-foreground dark:text-foreground mb-4">
                {product.description}
              </p>
              {product.platforms && product.platforms.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.platforms.map((tag: string) => (
                    <span key={tag} className="text-xs text-gray-medium bg-surface-alt dark:bg-navy-dark px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {product.linkText && (
                <span className="text-body-sm font-medium text-teal group-hover:underline">
                  {product.linkText} →
                </span>
              )}
            </a>
          ))}

          {/* Future Product Placeholder */}
          <div className="card-base p-6 border-dashed border-2 border-gray-light dark:border-navy-light flex flex-col items-center justify-center text-center min-h-[280px]">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy/5 text-heading dark:text-white mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <h3 className="text-h4 mb-2">Coming Soon</h3>
            <p className="text-body-sm text-foreground dark:text-foreground">
              We're building more tools. Have an idea? Let us know.
            </p>
            <a href="/contact" className="mt-4 text-body-sm font-medium text-teal hover:underline">
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}