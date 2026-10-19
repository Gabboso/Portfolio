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
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
      { name: "React", icon: <SiReact className="w-6 h-6 text-blue-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" /> },
      { name: "Framer Motion", icon: <div className="w-6 h-6 font-bold text-xl leading-none">M</div> },
    ],
  },
  {
    title: "Backend & Integrations",
    description: "Managing data, CMS, and secure payment flows.",
    skills: [
      { name: "Sanity CMS", icon: <SiSanity className="w-6 h-6 text-red-500" /> },
      { name: "Stripe", icon: <SiStripe className="w-6 h-6 text-indigo-500" /> },
      { name: "Clerk Auth", icon: <FaServer className="w-6 h-6 text-purple-500" /> },
      { name: "Database Design", icon: <FaDatabase className="w-6 h-6 text-gray-600" /> },
    ],
  },
  {
    title: "Engineering & Tools",
    description: "Algorithms, data analysis, and version control.",
    skills: [
      { name: "Python / Pandas", icon: <SiPython className="w-6 h-6 text-yellow-500" /> },
      { name: "Git & GitHub", icon: <FaGitAlt className="w-6 h-6 text-orange-500" /> },
      { name: "Cyber Risk Mgmt", icon: <FaServer className="w-6 h-6 text-slate-700" /> },
    ],
  }
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans py-20 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-20"
        >
          <h1 className="text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            My <span className="text-blue-600">skills</span>.
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            A look at the technologies and tools I use to build robust web applications and solve complex engineering problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: categoryIndex * 0.2 }}
              className="flex flex-col"
            >
              <h2 className="text-2xl font-bold mb-3">{category.title}</h2>
              <p className="text-gray-500 mb-8 text-sm font-medium">{category.description}</p>
              
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 5, backgroundColor: "rgb(249 250 251)" }}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-colors"
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-gray-800">{skill.name}</span>
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