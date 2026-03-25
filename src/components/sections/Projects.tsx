"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
