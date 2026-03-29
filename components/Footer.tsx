import { PERSONAL_INFO } from "@/lib/data";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-background py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-6">
        <h2 className="text-2xl font-bold font-syne text-text-main">
          <span className="text-accent-1">D</span>J
        </h2>

        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent-1 transition-colors"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent-1 transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-muted hover:text-accent-1 transition-colors"
          >
            <FiMail size={20} />
          </a>
        </div>

        <p className="text-muted text-sm font-dm-sans">
          Designed & Built by {PERSONAL_INFO.name}
        </p>
        <p className="text-muted/60 text-xs font-dm-sans">
          &copy; {year} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
