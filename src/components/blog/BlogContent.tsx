"use client";

import { Badge } from "@/components/shared/Badge";
import type { BlogPost } from "@/data/blog-posts";

interface BlogContentProps {
  post: BlogPost;
}

export function BlogContent({ post }: BlogContentProps) {
  const handleShare = (platform: "linkedin" | "twitter" | "whatsapp") => {
    const url = window.location.href;
    const title = document.title;

    const links: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
    };

    window.open(links[platform], "_blank", "noopener,noreferrer");
  };

  return (
    <article>
      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <Badge>{post.category}</Badge>
          <span className="text-body-sm text-gray-medium">{post.date}</span>
        </div>
        <h1 className="mb-4">{post.title}</h1>
        <p className="text-body-sm text-foreground">By {post.author}</p>
      </div>

      {/* Article Body */}
      <div className="prose prose-lg max-w-none">
        <p className="text-body-lg text-foreground leading-relaxed">{post.excerpt}</p>
        <p className="mt-6 text-body text-foreground">
          This is the full article body. In the Sanity CMS, this section will be replaced
          with rich content supporting headings, code blocks, images, and formatted text.
        </p>
        <p className="mt-4 text-body text-foreground">
          When connected to Sanity Studio, the article content will be dynamically rendered
          here with full formatting support. For now, articles can be edited in{" "}
          <code className="rounded bg-surface-alt px-1.5 py-0.5 text-sm text-heading">
            src/data/blog-posts.ts
          </code>
          .
        </p>
      </div>

      {/* Share Buttons */}
      <div className="mt-10 border-t border-gray-light pt-6">
        <p className="mb-3 text-body-sm font-medium text-foreground">Share this article</p>
        <div className="flex gap-3">
          {/* LinkedIn */}
          <button
            onClick={() => handleShare("linkedin")}
            className="rounded-md border border-gray-light p-2 text-foreground hover:bg-surface-alt transition-colors"
            aria-label="Share on LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </button>

          {/* Twitter/X */}
          <button
            onClick={() => handleShare("twitter")}
            className="rounded-md border border-gray-light p-2 text-foreground hover:bg-surface-alt transition-colors"
            aria-label="Share on Twitter"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </button>

          {/* WhatsApp */}
          <button
            onClick={() => handleShare("whatsapp")}
            className="rounded-md border border-gray-light p-2 text-foreground hover:bg-surface-alt transition-colors"
            aria-label="Share on WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}