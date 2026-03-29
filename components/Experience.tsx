"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/data";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <span className="text-accent-1 font-syne text-sm font-bold uppercase tracking-widest">
            // experience
          </span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-text-main mt-4">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-border-subtle md:border-l-0 md:after:content-[''] md:after:absolute md:after:w-0.5 md:after:bg-border-subtle md:after:top-0 md:after:bottom-0 md:after:left-[50%] md:after:-ml-[1px]">
          {EXPERIENCES.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative pl-8 md:pl-0 mb-16 md:mb-24 w-full md:w-[50%] ${
                  isEven ? "md:pr-12 md:pl-0 md:ml-0 md:text-right" : "md:pl-12 md:mr-0 md:ml-[50%] md:text-left"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute w-10 h-10 rounded-full bg-surface border-4 border-accent-1 flex items-center justify-center -left-5 md:left-auto text-accent-1 shadow-[0_0_15px_rgba(88,166,255,0.4)] z-10 ${
                    isEven ? "md:-right-5" : "md:-left-5"
                  }`}
                >
                  <Briefcase size={16} />
                </div>

                <div className="bg-surface/40 backdrop-blur-md border border-border-subtle rounded-2xl p-8 hover:border-accent-1/50 transition-colors group">
                  <h3 className="text-2xl font-syne font-bold text-text-main mb-2">
                    {exp.role}
                  </h3>
                  
                  <div className={`flex flex-wrap items-center gap-4 mb-4 text-sm text-muted font-dm-sans ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                    <span className="font-medium text-accent-1 flex items-center gap-1">
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {exp.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>

                  <ul className={`flex flex-col gap-3 mb-6 font-dm-sans text-muted font-light leading-relaxed my-4 ${isEven ? "md:items-end text-left md:text-right" : "text-left"}`}>
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="flex gap-2">
                        {!isEven && <span className="text-accent-1 mt-1 shrink-0">▹</span>}
                        <span>{bullet}</span>
                        {isEven && <span className="text-accent-1 mt-1 shrink-0 lg:hidden inline-block md:hidden">▹</span>}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                    {exp.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-accent-1/10 text-accent-1 text-xs font-medium rounded-full border border-accent-1/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
