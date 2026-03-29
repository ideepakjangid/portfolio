"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { FolderGit2, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <span className="text-accent-1 font-syne text-sm font-bold uppercase tracking-widest">
            // projects
          </span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-text-main mt-4">
            Featured Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-surface/50 border border-border-subtle rounded-2xl p-8 backdrop-blur-sm group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(88,166,255,0.1)] hover:border-accent-1/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-accent-1/10 flex items-center justify-center text-accent-1">
                  <FolderGit2 size={24} />
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent-1 transition-colors"
                    >
                      <FiGithub size={22} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent-1 transition-colors"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-syne font-bold text-text-main mb-3 group-hover:text-accent-1 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted font-dm-sans mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <ul className="flex flex-col gap-2 mb-8 font-dm-sans text-sm text-muted font-light">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-accent-1 text-xs mt-1">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-dm-sans font-medium text-muted bg-background px-3 py-1 rounded-full border border-border-subtle">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-border-subtle pt-6">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-white bg-accent-1 hover:bg-accent-1/90 px-6 py-2 rounded-full transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-text-main border border-border-subtle hover:border-text-main hover:bg-surface px-6 py-2 rounded-full transition-all"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
