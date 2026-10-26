"use client";

import { motion } from "motion/react";
import Container from "@/components/container";
import Link from "next/link";
import { Hammer, Sparkles, ArrowRight, Code2, Layers, Cpu } from "lucide-react";

export default function WorkPage() {
  return (
    <div className="w-full bg-transparent text-zinc-100 font-sans py-12 lg:py-16 flex items-center">
      <Container className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-12"
        >
          <h1 className="text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white">
            My <span className="text-blue-500">work</span>.
          </h1>
          <p className="text-lg text-zinc-400 font-medium">
            A showcase of web applications, full-stack systems, and engineering
            projects I&apos;ve built.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative overflow-hidden bg-zinc-900/40 backdrop-blur-md rounded-3xl p-8 lg:p-14 border border-zinc-800/80 shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            Under Construction
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Curating the showcase.
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed font-medium">
                I am currently curating and documenting the best full-stack
                projects and web applications I&apos;ve built. This section will
                be updated shortly with detailed case studies, code
                architectures, and live demos!
              </p>

              <div className="pt-2">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  What&apos;s coming next
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-zinc-800/60 border border-zinc-700/60 rounded-xl text-sm font-semibold text-zinc-200">
                    <Code2 className="w-4 h-4 text-blue-400" />
                    Full-Stack Storefronts
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-zinc-800/60 border border-zinc-700/60 rounded-xl text-sm font-semibold text-zinc-200">
                    <Layers className="w-4 h-4 text-purple-400" />
                    Next.js & CMS Architectures
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-zinc-800/60 border border-zinc-700/60 rounded-xl text-sm font-semibold text-zinc-200">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    Systems & Algorithms
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  href="#about"
                  className="inline-flex items-center gap-2 bg-white text-zinc-900 font-bold py-3.5 px-6 rounded-xl hover:bg-zinc-200 transition-all shadow-md active:scale-[0.98]"
                >
                  Read About Me
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-zinc-900 text-zinc-100 border border-zinc-700 font-bold py-3.5 px-6 rounded-xl hover:bg-zinc-800 transition-all active:scale-[0.98]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full max-w-xs bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border border-blue-900/40 p-8 rounded-2xl text-center flex flex-col items-center justify-center relative overflow-hidden"
              >
                <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                  <Hammer className="w-10 h-10" />
                </div>
                <div className="flex items-center gap-1 text-blue-400 font-bold mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Work in Progress</span>
                </div>
                <p className="text-xs text-zinc-400 font-medium">
                  Stay tuned for live demos, GitHub repositories, and full case
                  studies.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
