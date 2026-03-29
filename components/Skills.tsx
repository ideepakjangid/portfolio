"use client";

import { motion } from "framer-motion";
import { SKILLS_CATEGORIES } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  const colorMap: Record<string, { border: string; glow: string; text: string; bg: string }> = {
    blue: {
      border: "border-t-[#58a6ff]",
      glow: "hover:shadow-[0_0_20px_rgba(88,166,255,0.2)]",
      text: "text-[#58a6ff]",
      bg: "bg-[#58a6ff]/10 border-[#58a6ff]/20",
    },
    green: {
      border: "border-t-[#3fb950]",
      glow: "hover:shadow-[0_0_20px_rgba(63,185,80,0.2)]",
      text: "text-[#3fb950]",
      bg: "bg-[#3fb950]/10 border-[#3fb950]/20",
    },
    orange: {
      border: "border-t-[#f78166]",
      glow: "hover:shadow-[0_0_20px_rgba(247,129,102,0.2)]",
      text: "text-[#f78166]",
      bg: "bg-[#f78166]/10 border-[#f78166]/20",
    },
    purple: {
      border: "border-t-[#bc8cff]",
      glow: "hover:shadow-[0_0_20px_rgba(188,140,255,0.2)]",
      text: "text-[#bc8cff]",
      bg: "bg-[#bc8cff]/10 border-[#bc8cff]/20",
    },
  };

  return (
    <section id="skills" className="py-24 px-6 relative bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <span className="text-accent-1 font-syne text-sm font-bold uppercase tracking-widest">
            // skills
          </span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-text-main mt-4">
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_CATEGORIES.map((category, idx) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-surface/50 backdrop-blur-sm border-x border-b border-border-subtle p-8 rounded-2xl border-t-4 transition-all duration-300 hover:-translate-y-2 ${colors.border} ${colors.glow}`}
              >
                <h3 className={`text-2xl font-syne font-bold mb-8 ${colors.text}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors hover:brightness-125 cursor-default ${colors.bg} ${colors.text}`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
