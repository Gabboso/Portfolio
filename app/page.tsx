"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import AboutPage from "./about/page";
import SkillsPage from "./skills/page";
import WorkPage from "./work/page";
import ContactPage from "./contact/page";

export default function HomePage() {
  const socialLinks = [
    {
      href: "https://github.com/Gabboso",
      src: "/socials/github.svg",
      alt: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/gabriele-di-mezza-70111a391",
      src: "/socials/linkedin.svg",
      alt: "LinkedIn",
    },
    {
      href: "https://x.com/MezzaGabri72753",
      src: "/socials/twitter.svg",
      alt: "Twitter",
    },
  ];

  return (
    <div className="flex flex-col gap-28">
      {/* 1. SEZIONE HERO (HOME) */}
      <section id="home" className="scroll-mt-24 py-6 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 text-center lg:text-left">
          {/* Colonna Testo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start space-y-6"
          >
            <div className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              <p>Hi,</p>
              <p className="mt-1">
                i&apos;m <span className="text-blue-500">Gabriele</span>, a full
              </p>
              <p className="mt-1">
                stack{" "}
                <span className="bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-rainbow">
                  developer.
                </span>
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-600/25"
              >
                Contact me
              </Link>
            </div>
          </motion.div>

          {/* Colonna Foto Profilo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center items-center relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Bagliore di sfondo sfumato per la dark mode */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 opacity-20 blur-xl"></div>

              <Image
                src="/profile_picture.jpeg"
                alt="Gabriele Di Mezza"
                width={400}
                height={400}
                className="relative rounded-full object-cover w-48 h-48 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] border-2 border-zinc-800 shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Link Social centrate su mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-10 lg:mt-16 flex justify-center lg:justify-start space-x-6"
        >
          {socialLinks.map((social) => (
            <Link
              key={social.alt}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-1.5 transition-transform duration-300"
            >
              <Image
                src={social.src}
                alt={social.alt}
                width={30}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300 invert"
              />
            </Link>
          ))}
        </motion.div>
      </section>
      {/* 2. SEZIONE ABOUT */}
      <section id="about" className="scroll-mt-24">
        <AboutPage />
      </section>

      {/* 3. SEZIONE SKILLS */}
      <section id="skills" className="scroll-mt-24">
        <SkillsPage />
      </section>

      {/* 5. SEZIONE WORK */}
      <section id="work" className="scroll-mt-24">
        <WorkPage />
      </section>

      {/* 6. SEZIONE CONTACT */}
      <section id="contact" className="scroll-mt-24">
        <ContactPage />
      </section>
    </div>
  );
}
