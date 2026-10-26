"use client";

import { motion } from "motion/react";
import Container from "@/components/container";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiSanity, 
  SiStripe,
  SiReact,
  SiPython
} from "react-icons/si";
import { FaDatabase, FaGitAlt, FaServer } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and animated user interfaces.",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-white" /> },
      { name: "React", icon: <SiReact className="w-6 h-6 text-blue-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" /> },
      { name: "Framer Motion", icon: <div className="w-6 h-6 font-bold text-xl leading-none text-white flex items-center justify-center">M</div> },
    ],
  },
  {
    title: "Backend & Integrations",
    description: "Managing data, CMS, and secure payment flows.",
    skills: [
      { name: "Sanity CMS", icon: <SiSanity className="w-6 h-6 text-red-400" /> },
      { name: "Stripe", icon: <SiStripe className="w-6 h-6 text-indigo-400" /> },
      { name: "Clerk Auth", icon: <FaServer className="w-6 h-6 text-purple-400" /> },
      { name: "Database Design", icon: <FaDatabase className="w-6 h-6 text-zinc-400" /> },
    ],
  },
  {
    title: "Engineering & Tools",
    description: "Algorithms, data analysis, and version control.",
    skills: [
      { name: "Python / Pandas", icon: <SiPython className="w-6 h-6 text-yellow-400" /> },
      { name: "Git & GitHub", icon: <FaGitAlt className="w-6 h-6 text-orange-400" /> },
      { name: "Cyber Risk Mgmt", icon: <FaServer className="w-6 h-6 text-slate-400" /> },
    ],
  }
];

export default function SkillsPage() {
  return (
    <div className="w-full bg-transparent text-zinc-100 font-sans py-12 lg:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <h1 className="text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white">
            My <span className="text-blue-500">skills</span>.
          </h1>
          <p className="text-lg text-zinc-400 font-medium">
            A look at the technologies and tools I use to build robust web applications and solve complex engineering problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: categoryIndex * 0.2 }}
              className="flex flex-col"
            >
              <h2 className="text-2xl font-bold mb-3 text-white">{category.title}</h2>
              <p className="text-zinc-400 mb-8 text-sm font-medium">{category.description}</p>
              
              <div className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-200"
                  >
                    <div className="w-12 h-12 bg-zinc-800/60 rounded-xl flex items-center justify-center border border-zinc-700/60">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-zinc-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}