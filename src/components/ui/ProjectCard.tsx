"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative rounded-xl bg-surface-light border border-surface-lighter/50 p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10"
    >
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <CardContent project={project} />
        </a>
      ) : (
        <CardContent project={project} />
      )}
    </motion.div>
  );
}

function CardContent({ project }: { project: Project }) {
  return (
    <>
      <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary-light"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}
