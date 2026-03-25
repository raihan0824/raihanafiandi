"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import type { WorkExperience } from "@/data/resume";

interface ExperienceModalProps {
  experience: WorkExperience | null;
  onClose: () => void;
}

export default function ExperienceModal({
  experience,
  onClose,
}: ExperienceModalProps) {
  if (!experience) return null;

  return (
    <AnimatePresence>
      {experience && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 sm:w-full sm:max-w-2xl sm:max-h-[85vh] bg-surface border border-surface-lighter/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 pb-4 border-b border-surface-lighter/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-lighter flex items-center justify-center text-primary font-bold text-lg">
                  {experience.company[0]}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-text">
                    {experience.role}
                  </h2>
                  <p className="text-sm text-primary-light">
                    {experience.company}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">
                    {experience.period}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-text-muted hover:text-text transition-colors p-1 rounded-lg hover:bg-surface-light"
                aria-label="Close"
              >
                <HiX size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* All bullets */}
              <div>
                <h3 className="text-sm font-semibold text-text mb-3 uppercase tracking-wider">
                  Responsibilities & Achievements
                </h3>
                <ul className="list-disc list-outside ml-4 space-y-3 marker:text-primary">
                  {experience.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="text-sm text-text-muted leading-relaxed pl-1"
                    >
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Full tech stack */}
              <div>
                <h3 className="text-sm font-semibold text-text mb-3 uppercase tracking-wider">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experience.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
