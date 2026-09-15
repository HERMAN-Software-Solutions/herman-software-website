import Link from "next/link";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  slug?: string;
}

export function TeamCard({ name, role, bio, image, slug }: TeamCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const content = (
    <div className="card-base flex flex-col items-center p-6 text-center transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1">
      <div className="mb-4 h-20 w-20 overflow-hidden rounded-full bg-navy-dark relative">
        {image ? (
          <Image src={image} alt={name} fill className="object-cover" sizes="80px" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-white">
            {initials}
          </div>
        )}
      </div>
      <h3 className="text-h4 group-hover:text-teal transition-colors">{name}</h3>
      <p className="mb-3 text-body-sm font-medium text-teal">{role}</p>
      <p className="text-body-sm text-foreground line-clamp-3">{bio}</p>
      {slug && (
        <span className="mt-3 text-body-sm font-medium text-teal opacity-0 group-hover:opacity-100 transition-opacity">
          View Profile →
        </span>
      )}
    </div>
  );

  if (slug) {
    return (
      <Link href={`/team/${slug}`} className="group block">
        {content}
      </Link>
    );
  }

  return content;
}