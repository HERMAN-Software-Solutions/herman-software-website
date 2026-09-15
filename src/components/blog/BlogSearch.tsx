"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

interface BlogSearchProps {
  onSearch: (query: string) => void;
}

export function BlogSearch({ onSearch }: BlogSearchProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-medium" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search blog posts..."
        className="w-full rounded-lg border border-gray-light bg-surface py-3 pl-10 pr-10 text-body text-foreground placeholder:text-gray-medium focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal dark:bg-navy-dark dark:border-navy-light dark:text-white"
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-medium hover:text-foreground dark:hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}