"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/navLinks";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-12 text-base font-bold">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative group transition-colors duration-300 ease-in-out ${
              isActive ? "text-blue-600" : "text-gray-500 hover:text-black"
            }`}
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 origin-center transition-transform duration-300 ease-out rounded-full ${
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default HeaderMenu;