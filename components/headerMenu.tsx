"use client";

import Link from "next/link";
import { navLinks } from "@/lib/navLinks";

const HeaderMenu = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    window.history.pushState(null, "", href);
  };

  return (
    <nav className="hidden md:flex items-center gap-10 text-base font-semibold">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={(e) => handleScroll(e, link.href)}
          className="relative group text-muted-foreground hover:text-foreground transition-colors duration-300 ease-in-out py-1"
        >
          {link.label}
          <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
        </Link>
      ))}
    </nav>
  );
};

export default HeaderMenu;