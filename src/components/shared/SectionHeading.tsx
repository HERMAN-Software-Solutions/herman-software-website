interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <h2 className="mb-3">{title}</h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-body-lg text-foreground">{subtitle}</p>
      )}
    </div>
  );
}