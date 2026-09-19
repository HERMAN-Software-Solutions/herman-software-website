"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Is any child currently active?
  const isActive = items.some((item) => pathname === item.href);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Close when navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div ref={ref} className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className={cn(
          "flex items-center gap-1 rounded-md px-3 py-2 text-body-sm font-medium transition-colors",
          isActive
            ? "text-teal"
            : "text-foreground hover:text-teal dark:text-gray-light dark:hover:text-teal"
        )}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          size={14}
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 top-full z-50 mt-1 min-w-[180px] overflow-hidden rounded-md border border-gray-light bg-surface shadow-lg dark:border-navy-light dark:bg-navy-dark"
          role="menu"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "block px-4 py-2.5 text-body-sm transition-colors",
                pathname === item.href
                  ? "bg-surface-alt text-teal dark:bg-navy-light"
                  : "text-foreground hover:bg-surface-alt hover:text-teal dark:text-gray-light dark:hover:bg-navy-light"
              )}
              role="menuitem"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}