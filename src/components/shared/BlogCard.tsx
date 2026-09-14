import Link from "next/link";

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  href: string;
}

function getReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function BlogCard({ title, date, excerpt, category, href }: BlogCardProps) {
  const readingTime = getReadingTime(excerpt);
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={href}
      className="card-base group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1"
    >
      {/* Thumbnail Placeholder */}
      <div className="flex h-40 items-center justify-center bg-gradient-to-br from-navy/5 to-teal/5">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C2BA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-wider text-teal">{category}</span>
          <span className="text-xs text-gray-medium">{formattedDate}</span>
        </div>
        <h3 className="text-h4 leading-snug transition-colors group-hover:text-teal">{title}</h3>
        <p className="text-body-sm text-foreground line-clamp-2">{excerpt}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-body-sm font-medium text-teal group-hover:underline">
            Read article →
          </span>
          <span className="text-xs text-gray-medium">{readingTime}</span>
        </div>
      </div>
    </Link>
  );
}