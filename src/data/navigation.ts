export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Chat", href: "/chat/", isExternal: true },
];
