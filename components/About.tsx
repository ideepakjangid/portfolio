"use client";

import { motion } from "framer-motion";
import { ABOUT_TEXT, STATS, ACHIEVEMENT, SKILLS_CATEGORIES } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-12"
        >
          <span className="text-accent-1 font-syne text-sm font-bold uppercase tracking-widest">
            // about
          </span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-text-main mt-4">
            Get To Know Me
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="w-full lg:w-[55%] flex flex-col gap-6"
          >
            {ABOUT_TEXT.map((paragraph, idx) => (
              <p key={idx} className="text-muted font-dm-sans font-light text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Right: Cards */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            {/* At a Glance */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-surface/50 border border-border-subtle rounded-2xl p-8 backdrop-blur-sm hover:border-accent-1/50 transition-colors"
            >
              <h3 className="text-xl font-syne font-bold text-text-main mb-6">At a Glance</h3>
              <div className="flex flex-wrap gap-8">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="text-3xl font-syne font-extrabold text-accent-1">
                      {stat.value}
                    </span>
                    <span className="text-sm text-muted font-dm-sans">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievement */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-surface/50 border border-border-subtle rounded-2xl p-6 backdrop-blur-sm flex items-center gap-6 hover:border-accent-2/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-accent-2/10 flex items-center justify-center text-3xl shrink-0">
                {ACHIEVEMENT.icon}
              </div>
              <div>
                <h4 className="text-lg font-syne font-bold text-text-main">
                  {ACHIEVEMENT.title}
                </h4>
                <p className="text-muted text-sm font-dm-sans">{ACHIEVEMENT.company}</p>
              </div>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-surface/50 border border-border-subtle rounded-2xl p-8 backdrop-blur-sm hover:border-accent-3/50 transition-colors"
            >
              <h3 className="text-xl font-syne font-bold text-text-main mb-6">Core Tech Stack</h3>
              <div className="flex gap-4 flex-wrap">
                {SKILLS_CATEGORIES.slice(0, 3).map((cat, idx) => {
                  const colorMap: Record<string, string> = {
                    blue: "text-accent-1 bg-accent-1/10 border-accent-1/20",
                    green: "text-accent-2 bg-accent-2/10 border-accent-2/20",
                    orange: "text-accent-3 bg-accent-3/10 border-accent-3/20",
                    purple: "text-purple-400 bg-purple-400/10 border-purple-400/20",
                  };
                  return (
                    <div
                      key={idx}
                      className={`px-4 py-2 rounded-full border text-sm font-medium ${colorMap[cat.color]}`}
                    >
                      {cat.title}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
