import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-teal text-white hover:bg-teal-dark shadow-button",
    secondary: "border-2 border-heading text-heading hover:bg-heading hover:text-surface",
    ghost: "text-teal hover:underline",
  };

  const combined = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
}