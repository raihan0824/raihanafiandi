"use client";

import { motion } from "framer-motion";
import type { WorkExperience } from "@/data/resume";

interface TimelineItemProps {
  experience: WorkExperience;
  index: number;
  onViewMore: () => void;
}

export default function TimelineItem({ experience, index, onViewMore }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8"
    >
      {/* Left content / spacer */}
      <div className={isLeft ? "hidden md:block md:text-right" : "hidden md:block"}>
        {isLeft && <TimelineContent experience={experience} align="right" onViewMore={onViewMore} />}
      </div>

      {/* Center dot */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary border-4 border-surface shadow-lg shadow-primary/50" />
        <div className="w-0.5 flex-1 bg-surface-lighter/50" />
      </div>

      {/* Right content / spacer */}
      <div className={!isLeft ? "hidden md:block" : "hidden md:block"}>
        {!isLeft && <TimelineContent experience={experience} align="left" onViewMore={onViewMore} />}
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <TimelineContent experience={experience} align="left" onViewMore={onViewMore} />
      </div>
    </motion.div>
  );
}

function TimelineContent({
  experience,
  align,
  onViewMore,
}: {
  experience: WorkExperience;
  align: "left" | "right";
  onViewMore: () => void;
}) {
  return (
    <div
      className={`rounded-xl bg-surface-light border border-surface-lighter/50 p-6 ${
        align === "right" ? "md:mr-4" : "md:ml-4"
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        {experience.logo ? (
          <img
            src={`/raihanafiandi${experience.logo}`}
            alt={experience.company}
            className="w-10 h-10 rounded-lg object-contain"
          />
        ) : (
          <div className="w-10 h-10 rounded-lg bg-surface-lighter flex items-center justify-center text-primary font-bold text-sm">
            {experience.company[0]}
          </div>
        )}
        <div>
          <h3 className="font-semibold text-text">{experience.role}</h3>
          <p className="text-sm text-primary-light">{experience.company}</p>
        </div>
      </div>
      <p className="text-xs text-text-muted mb-3">{experience.period}</p>
      <ul className="list-disc list-outside ml-4 space-y-2 mb-4 marker:text-primary">
        {experience.bullets.slice(0, 3).map((bullet, i) => (
          <li key={i} className="text-sm text-text-muted leading-relaxed pl-1">
            {bullet}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {experience.techStack.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary-light"
          >
            {tech}
          </span>
        ))}
        {experience.techStack.length > 6 && (
          <span className="text-xs px-2 py-0.5 rounded bg-surface-lighter text-text-muted">
            +{experience.techStack.length - 6}
          </span>
        )}
      </div>
      {(experience.bullets.length > 3 || experience.techStack.length > 6) && (
        <button
          onClick={onViewMore}
          className="text-xs font-medium text-primary hover:text-primary-light transition-colors cursor-pointer"
        >
          View more &rarr;
        </button>
      )}
    </div>
  );
}
