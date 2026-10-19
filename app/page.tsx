"use client";

import { motion } from "motion/react";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans py-20 lg:py-32 flex flex-col justify-center">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 py-12">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full max-w-xl space-y-10"
          >
            <div className="text-6xl lg:text-7xl font-extrabold tracking-tight">
              <p>Hi,</p>
              <p className="leading-tight mt-2">
                i&apos;m <span className="text-blue-600">Gabriele</span>, a full
              </p>
              <p className="leading-tight mt-2">
                stack developer.
              </p>
            </div>
            
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md shadow-blue-600/20"
              >
                Contact
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="h-full flex justify-center items-center relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/profile_picture.jpeg"
                alt="Gabriele Di Mezza"
                width={500}
                height={500}
                className="rounded-full object-cover shadow-2xl shadow-blue-900/10"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-20 md:mt-28 flex space-x-8"
        >
          {[
            { href: "https://github.com/gabrieledimezza", src: "/socials/github.svg", alt: "GitHub" },
            { href: "https://linkedin.com/in/gabrieledimezza", src: "/socials/linkedin.svg", alt: "LinkedIn" },
            { href: "https://twitter.com/gabrieledimezza", src: "/socials/twitter.svg", alt: "Twitter" },
          ].map((social) => (
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
                width={32} 
                height={32} 
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}