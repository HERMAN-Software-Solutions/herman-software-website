"use client";

import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "rounded-full px-5 py-2 text-body-sm font-medium transition-all duration-200",
            activeCategory === category
              ? "bg-teal text-white shadow-button"
              : "border border-gray-medium/30 bg-surface text-foreground hover:border-teal hover:text-teal"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}