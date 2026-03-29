"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaReact, FaNodeJs, FaVuejs } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiAdonisjs, SiMysql, SiRedis } from "react-icons/si";
import { PERSONAL_INFO, TYPEWRITER_TEXTS, HERO_CODE_BLOCK } from "@/lib/data";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const elem = document.getElementById(target.replace("#", ""));
    if (elem) window.scrollTo({ top: elem.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-1/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-2/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="w-full lg:w-[60%] flex flex-col items-start pt-12 lg:pt-0"
        >
          {/* Availability Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-2/30 bg-accent-2/10 text-accent-2 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-2 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-2"></span>
            </span>
            👋 Available for work
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-xl md:text-2xl text-muted font-dm-sans mb-2">
            Hi, I&apos;m
          </motion.h2>

          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl font-syne font-extrabold text-text-main mb-4 leading-tight">
            {PERSONAL_INFO.name}
          </motion.h1>

          <motion.div variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl font-dm-sans font-medium text-accent-1 mb-6 flex gap-2">
            <Typewriter
              options={{
                strings: TYPEWRITER_TEXTS,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </motion.div>

          <motion.p variants={fadeUp} className="text-lg text-muted max-w-xl mb-10 leading-relaxed font-dm-sans font-light">
            Building scalable web apps with clean code & modern tech. Turning complex problems into elegant UI and efficient backend architectures.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "#projects")}
              className="px-8 py-3 rounded-full bg-accent-1 text-surface font-medium transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(88,166,255,0.3)]"
            >
              View Projects
            </a>
            <a
              href="/Deeepak_Jangid_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-border-subtle text-text-main font-medium transition-all hover:-translate-y-1 hover:border-text-main hover:bg-surface"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeUp} className="flex items-center gap-5">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-accent-1 transition-colors hover:-translate-y-1">
              <FiGithub size={24} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-accent-1 transition-colors hover:-translate-y-1">
              <FiLinkedin size={24} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2 text-muted hover:text-accent-1 transition-colors hover:-translate-y-1">
              <FiMail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side Visuals (40%) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-[40%] hidden md:flex justify-center relative h-[400px]"
        >
          <div className="relative w-[300px] h-[300px] bg-gradient-to-br from-surface to-background border border-border-subtle rounded-3xl shadow-2xl flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px] rounded-3xl opacity-50" />
            <pre className="text-accent-1 text-sm font-mono overflow-hidden whitespace-pre-wrap p-6 opacity-70">
              {HERO_CODE_BLOCK}
            </pre>
          </div>

          {/* Floating Icons Orbit */}
          {/* Top Edge */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="absolute -top-6 right-16 p-3 bg-surface rounded-2xl border border-border-subtle shadow-xl text-[#61DAFB]">
            <FaReact size={28} />
          </motion.div>
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.8 }} className="absolute -top-4 -left-6 p-3 bg-surface rounded-2xl border border-border-subtle shadow-xl text-[#3178C6]">
            <SiTypescript size={28} />
          </motion.div>

          {/* Left Edge */}
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 1.5 }} className="absolute top-24 -left-14 p-4 bg-surface rounded-2xl border border-border-subtle shadow-xl text-[#47A248]">
            <SiMongodb size={32} />
          </motion.div>
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }} className="absolute bottom-24 -left-12 p-3 bg-surface rounded-2xl border border-border-subtle shadow-xl text-[#41B883]">
            <FaVuejs size={28} />
          </motion.div>

          {/* Bottom Edge */}
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 2.1 }} className="absolute -bottom-6 left-8 p-3 bg-surface rounded-2xl border border-border-subtle shadow-xl text-[#DC382D]">
            <SiRedis size={28} />
          </motion.div>
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }} className="absolute -bottom-8 right-16 p-4 bg-surface rounded-2xl border border-border-subtle shadow-xl text-[#339933]">
            <FaNodeJs size={32} />
          </motion.div>

          {/* Right Edge */}
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut", delay: 0.3 }} className="absolute bottom-20 -right-14 p-3 bg-surface rounded-2xl border border-border-subtle shadow-xl text-[#4479A1]">
            <SiMysql size={28} />
          </motion.div>
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.2 }} className="absolute top-20 -right-12 p-3 bg-surface rounded-2xl border border-border-subtle shadow-xl text-[#220052] dark:text-[#5A45FF]">
            <SiAdonisjs size={28} />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
