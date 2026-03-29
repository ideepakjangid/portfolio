"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = sections[0];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-surface/80 backdrop-blur-md border-b border-border-subtle py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" onClick={(e) => handleNavClick(e, "#home")} className="text-2xl font-bold font-syne text-text-main group">
          <span className="text-accent-1">D</span>J
          <span className="w-1.5 h-1.5 rounded-full bg-accent-1 inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm font-medium transition-colors hover:text-accent-1 ${activeSection === link.href.substring(1) ? "text-accent-1" : "text-muted"}`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-1 rounded-full"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-6 py-2 rounded-full border border-accent-1 text-accent-1 text-sm font-medium hover:bg-accent-1 hover:text-surface transition-all duration-300 hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-main p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-lg border-b border-border-subtle p-6 flex flex-col md:hidden shadow-lg"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block text-lg font-medium ${activeSection === link.href.substring(1) ? "text-accent-1" : "text-text-main"}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-6 px-6 py-3 rounded-full bg-accent-1 text-surface text-center font-medium"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
