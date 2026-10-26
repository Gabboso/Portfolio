"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/navLinks";
import { AnimatePresence, motion } from "motion/react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);

    // Diamo tempo al menu di iniziare a chiudersi prima di scorrere
    setTimeout(() => {
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
    }, 150);
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "close menu" : "open menu"}
        aria-expanded={open}
        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="absolute left-0 top-full w-full bg-background/95 backdrop-blur-md border-b border-border shadow-xl z-50"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <ul className="flex flex-col px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="block py-3 text-sm font-semibold text-muted-foreground hover:text-foreground border-l-2 border-transparent hover:border-primary pl-3 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;