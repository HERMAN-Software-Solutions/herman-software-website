import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function ServiceCard({ icon, title, description, href, className }: ServiceCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "card-base group flex flex-col items-start gap-4 p-6 transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-h4 transition-colors group-hover:text-teal">{title}</h3>
      <p className="text-body-sm text-foreground">{description}</p>
      <span className="mt-auto text-body-sm font-medium text-teal group-hover:underline">
        Learn more →
      </span>
    </a>
  );
}