"use client";

import { motion } from "motion/react";
import Container from "@/components/container";
import Link from "next/link";
import { Hammer, Sparkles, ArrowRight, Code2, Layers, Cpu } from "lucide-react";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans py-20 lg:py-32 flex items-center">
      <Container className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-12"
        >
          <h1 className="text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            My <span className="text-blue-600">work</span>.
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            A showcase of web applications, full-stack systems, and engineering
            projects I&apos;ve built.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative overflow-hidden bg-white rounded-3xl p-8 lg:p-14 border border-gray-100 shadow-[0_10px_40px_rgb(0,0,0,0.06)]"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            Under Construction
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                Curating the showcase.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Sto attualmente selezionando e documentando i migliori progetti
                full-stack e le applicazioni web che ho sviluppato. La sezione
                sarà aggiornata a breve con casi studio dettagliati,
                architetture di codice e demo live!
              </p>

              <div className="pt-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  What&apos;s coming next
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-gray-700">
                    <Code2 className="w-4 h-4 text-blue-600" />
                    Full-Stack Storefronts
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-gray-700">
                    <Layers className="w-4 h-4 text-purple-600" />
                    Next.js & CMS Architectures
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-gray-700">
                    <Cpu className="w-4 h-4 text-emerald-600" />
                    Systems & Algorithms
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-black text-white font-bold py-3.5 px-6 rounded-xl hover:bg-gray-800 transition-all shadow-md active:scale-[0.98]"
                >
                  Read About Me
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-black border border-gray-200 font-bold py-3.5 px-6 rounded-xl hover:bg-gray-50 transition-all active:scale-[0.98]"
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
                className="w-full max-w-xs bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-8 rounded-2xl text-center shadow-inner flex flex-col items-center justify-center relative overflow-hidden"
              >
                <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                  <Hammer className="w-10 h-10" />
                </div>
                <div className="flex items-center gap-1 text-blue-600 font-bold mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Work in Progress</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">
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