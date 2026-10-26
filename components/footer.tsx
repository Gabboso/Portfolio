"use client";

import Link from "next/link";
import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

  const navLinks = [
    { label: "Home", href: "#home", external: false },
    { label: "About", href: "#about", external: false },
    {
      label: "Resume PDF",
      href: "/documents/Gabriele_Di_Mezza_Resume.pdf",
      external: true,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub Profile",
      href: "https://github.com/Gabboso",
      icon: FaGithub,
      download: false,
    },
    {
      name: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/gabriele-di-mezza-70111a391",
      icon: FaLinkedin,
      download: false,
    },
    {
      name: "Twitter Profile",
      href: "https://x.com/MezzaGabri72753",
      icon: FaTwitter,
      download: false,
    },
    {
      name: "Send Email",
      href: "mailto:gabrieledimezza05@gmail.com",
      icon: Mail,
      download: false,
    },
    {
      name: "Download Resume",
      href: "/documents/Gabriele_Di_Mezza_Resume.pdf",
      icon: FileText,
      download: true,
    },
  ];

  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-950 text-zinc-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Info Personali */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Gabriele Di Mezza
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Computer Engineering Student &amp; Front-end Developer.
              Passionate about web development, algorithms, and cybersecurity.
            </p>
          </div>

          {/* Navigazione */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors duration-200 font-medium"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="text-zinc-400 hover:text-white transition-colors duration-200 font-medium inline-block cursor-pointer"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.download ? undefined : "_blank"}
                    rel={item.download ? undefined : "noopener noreferrer"}
                    download={
                      item.download ? "Gabriele_Di_Mezza_Resume.pdf" : undefined
                    }
                    aria-label={item.name}
                    className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Gabriele Di Mezza. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{" "}
            <span className="text-zinc-300 font-semibold">Next.js</span> &amp;{" "}
            <span className="text-zinc-300 font-semibold">Tailwind CSS</span>
              ciao
          </p>
        </div>
      </div>
    </footer>
  );
}