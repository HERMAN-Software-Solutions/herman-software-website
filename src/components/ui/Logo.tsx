import { siteConfig } from "@/data/site-config";

interface LogoProps {
  variant?: "full" | "monogram";
  className?: string;
}

export function Logo({ variant = "full", className = "" }: LogoProps) {
  if (variant === "monogram") {
    return (
      <a
        href="/"
        className={`flex items-center gap-2 ${className}`}
        aria-label={siteConfig.name}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-dark text-lg font-bold text-white">
          HS
        </div>
      </a>
    );
  }

  return (
    <a
      href="/"
      className={`flex items-center gap-3 ${className}`}
      aria-label={siteConfig.name}
    >
      <div className="flex h-10 w-10 items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          aria-hidden="true"
        >
          <polygon
            points="20,2 36,11 36,29 20,38 4,29 4,11"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-heading"
          />
          <line
            x1="14"
            y1="12"
            x2="14"
            y2="28"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="text-heading"
          />
          <line
            x1="26"
            y1="12"
            x2="26"
            y2="28"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="text-heading"
          />
          <line
            x1="14"
            y1="20"
            x2="26"
            y2="20"
            stroke="#00C2BA"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="hidden sm:block">
        <div className="text-lg font-bold leading-tight tracking-tight text-heading">
          HERMAN
        </div>
        <div className="text-[10px] font-light uppercase tracking-[3px] text-foreground">
          Software Solutions
        </div>
      </div>
    </a>
  );
}