import { HiMail } from "react-icons/hi";
import { personalInfo } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-surface-lighter/30 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
        >
          <HiMail size={16} />
          {personalInfo.email}
        </a>
      </div>
    </footer>
  );
}
