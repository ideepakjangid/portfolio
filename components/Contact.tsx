"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/data";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { toast } from "react-hot-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const response = await fetch("https://getform.io/f/amdkrvpb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      toast.success("Message sent successfully! I'll get back to you soon.");
      form.reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <span className="text-accent-1 font-syne text-sm font-bold uppercase tracking-widest">
            // contact
          </span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-text-main mt-4 mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-muted font-dm-sans max-w-2xl mx-auto">
            Open to full-time roles, freelance projects, and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 flex flex-col gap-6"
          >
            <a href={`mailto:${PERSONAL_INFO.email}`} className="bg-surface/50 border border-border-subtle rounded-2xl p-6 flex items-start gap-4 hover:border-accent-1/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-accent-1/10 flex items-center justify-center text-accent-1 shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-text-main font-syne font-bold mb-1">Email</h4>
                <p className="text-muted text-sm font-dm-sans break-all">{PERSONAL_INFO.email}</p>
              </div>
            </a>

            <div className="bg-surface/50 border border-border-subtle rounded-2xl p-6 flex items-start gap-4 hover:border-accent-2/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-accent-2/10 flex items-center justify-center text-accent-2 shrink-0 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-text-main font-syne font-bold mb-1">Phone</h4>
                <p className="text-muted text-sm font-dm-sans">{PERSONAL_INFO.phone}</p>
              </div>
            </div>

            <div className="bg-surface/50 border border-border-subtle rounded-2xl p-6 flex items-start gap-4 hover:border-accent-3/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-accent-3/10 flex items-center justify-center text-accent-3 shrink-0 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-text-main font-syne font-bold mb-1">Location</h4>
                <p className="text-muted text-sm font-dm-sans">{PERSONAL_INFO.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4 px-2">
              <h4 className="text-text-main font-syne font-bold mr-2">Social Profiles</h4>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-muted hover:text-accent-1 hover:border-accent-1 transition-all">
                <FiGithub size={20} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-muted hover:text-accent-1 hover:border-accent-1 transition-all">
                <FiLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="bg-surface/50 backdrop-blur-sm border border-border-subtle rounded-2xl p-8 lg:p-10 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-main font-dm-sans">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-background border border-border-subtle rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent-1 focus:ring-1 focus:ring-accent-1 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-main font-dm-sans">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-background border border-border-subtle rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent-1 focus:ring-1 focus:ring-accent-1 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-text-main font-dm-sans">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full bg-background border border-border-subtle rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent-1 focus:ring-1 focus:ring-accent-1 transition-all"
                  placeholder="Hey, let's connect!"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-text-main font-dm-sans">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-background border border-border-subtle rounded-lg px-4 py-3 text-text-main resize-none focus:outline-none focus:border-accent-1 focus:ring-1 focus:ring-accent-1 transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-accent-1 hover:bg-accent-1/90 text-surface font-syne font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
