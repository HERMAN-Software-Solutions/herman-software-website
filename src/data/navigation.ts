export interface NavLink {
  label: string;
  href: string;
  isButton?: boolean;
}

export const defaultNavigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Internships", href: "/internships" },
  { label: "Contact", href: "/contact" },
];

export const defaultNavigationButtons: NavLink[] = [
  { label: "Client Portal", href: "/client-portal", isButton: true },
  { label: "Get a Quote", href: "/get-quote", isButton: true },
];