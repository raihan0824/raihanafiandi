"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TimelineItem from "@/components/ui/TimelineItem";
import ExperienceModal from "@/components/ui/ExperienceModal";
import { workExperience, type WorkExperience } from "@/data/resume";

export default function Experience() {
  const [selected, setSelected] = useState<WorkExperience | null>(null);

  return (
    <section id="experience" className="py-24 bg-surface-light/30">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-16" />
        </AnimatedSection>

        <div className="space-y-8">
          {workExperience.map((exp, i) => (
            <TimelineItem
              key={exp.company}
              experience={exp}
              index={i}
              onViewMore={() => setSelected(exp)}
            />
          ))}
        </div>
      </div>

      <ExperienceModal
        experience={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
