"use client";

import { motion } from "motion/react";
import Container from "@/components/container";
import { Download, GraduationCap, Code } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans py-20 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <h1 className="text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              About <span className="text-blue-600">me</span>.
            </h1>
            
            <div className="space-y-6 text-lg text-gray-600 font-medium mb-10">
              <p>
                Hi, I&apos;m Gabriele. I am a Computer Engineering student at Sapienza University of Rome, currently broadening my horizons on an Erasmus+ exchange at TU Delft in the Netherlands.
              </p>
              <p>
                I am a <strong>Full Stack Web Developer</strong> passionate about building end-to-end applications. I love creating fast, accessible user interfaces with Next.js and Tailwind CSS, while engineering secure backend architectures, managing databases, and integrating payment systems like Stripe.
              </p>
              <p>
                Beyond the web, I have a solid foundation in algorithms, systems programming, and control theory. I&apos;m actively seeking a remote role where I can apply my full stack skills while continuing my academic journey toward an M.Sc. in Control Engineering.
              </p>
            </div>

            <a 
              href="/documents/Gabriele_Di_Mezza_Resume.pdf" 
              download="Gabriele_Di_Mezza_Resume.pdf"
              className="inline-flex items-center gap-3 bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md shadow-blue-600/20"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 space-y-12 pt-4 lg:pt-0 lg:pl-10 lg:border-l border-gray-100"
          >
            
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-2xl font-bold border-b border-gray-100 pb-4">
                <GraduationCap className="w-7 h-7 text-blue-600" />
                <h2>Education</h2>
              </div>

              <div className="relative pl-6 border-l-2 border-gray-100 space-y-10">
                <div className="relative">
                  <div className="absolute w-4 h-4 bg-white border-4 border-blue-600 rounded-full -left-[35px] top-1"></div>
                  <p className="text-sm font-bold text-blue-600 mb-1">Sep 2026 &mdash; Feb 2027</p>
                  <h3 className="text-xl font-bold text-gray-900">TU Delft</h3>
                  <p className="text-gray-500 font-medium mb-3">Erasmus+ Exchange (Faculty of Technology, Policy & Management)</p>
                  <p className="text-gray-600 leading-relaxed">
                    Studying Cyber Crime Science, Machine Learning for Socio-technical Systems, Ethics of AI, and Game Theory. Also completed EconSec101x (Economics of Cybersecurity).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute w-4 h-4 bg-white border-4 border-gray-300 rounded-full -left-[35px] top-1"></div>
                  <p className="text-sm font-bold text-gray-500 mb-1">Expected Summer 2027</p>
                  <h3 className="text-xl font-bold text-gray-900">Sapienza University of Rome</h3>
                  <p className="text-gray-500 font-medium mb-3">B.Sc. in Computer Engineering</p>
                  <p className="text-gray-600 leading-relaxed">
                    Focus on Algorithms & Data Structures, Operating Systems, Networks, AI Fundamentals, Control Systems, Security, Databases (SQL), and C/x86 Assembly programming.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 pt-6">
              <div className="flex items-center gap-3 text-2xl font-bold border-b border-gray-100 pb-4">
                <Code className="w-7 h-7 text-blue-600" />
                <h2>Experience & Projects</h2>
              </div>

              <div className="relative pl-6 border-l-2 border-gray-100 space-y-10">
                <div className="relative">
                  <div className="absolute w-4 h-4 bg-white border-4 border-blue-600 rounded-full -left-[35px] top-1"></div>
                  <p className="text-sm font-bold text-blue-600 mb-1">Recent Project</p>
                  <h3 className="text-xl font-bold text-gray-900">Tulos E-Commerce</h3>
                  <p className="text-gray-500 font-medium mb-3">Next.js, TypeScript, Tailwind v4, Sanity CMS</p>
                  <p className="text-gray-600 leading-relaxed">
                    Built a full-stack storefront featuring custom API routes, Stripe webhook integrations, GROQ queries, Clerk authentication, client-side filtering, and fluid UI animations.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute w-4 h-4 bg-white border-4 border-gray-300 rounded-full -left-[35px] top-1"></div>
                  <p className="text-sm font-bold text-gray-500 mb-1">Ongoing</p>
                  <h3 className="text-xl font-bold text-gray-900">Freelance Full Stack Developer & Tutor</h3>
                  <p className="text-gray-500 font-medium mb-3">Independent</p>
                  <p className="text-gray-600 leading-relaxed">
                    Designing and developing full-stack applications for clients and personal projects. Additionally, providing one-to-one tutoring to students to clarify complex technical concepts and programming fundamentals.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </Container>
    </div>
  );
}