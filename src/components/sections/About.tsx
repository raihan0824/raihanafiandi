"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { personalInfo, education, certifications } from "@/data/resume";
import { HiAcademicCap, HiBadgeCheck, HiLocationMarker, HiTranslate } from "react-icons/hi";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <AnimatedSection variant="slideLeft">
            <div className="space-y-6">
              <p className="text-text-muted leading-relaxed">
                I&apos;m <span className="text-text font-medium">{personalInfo.shortName}</span>, an{" "}
                {personalInfo.title.toLowerCase()} based in {personalInfo.location}.
                I specialize in building production-grade LLM platforms, AI agents, and
                scalable ML infrastructure.
              </p>
              <p className="text-text-muted leading-relaxed">
                With a background in Mathematics from ITB and hands-on experience deploying
                large-scale AI systems, I bridge the gap between cutting-edge AI research
                and real-world production deployments.
              </p>

              <div className="flex items-center gap-3 text-sm text-text-muted">
                <HiLocationMarker className="text-primary" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-muted">
                <HiTranslate className="text-primary" />
                <span>{personalInfo.languages.join(" | ")}</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Education & Certs */}
          <div className="space-y-6">
            {/* Education */}
            <AnimatedSection variant="slideRight">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <HiAcademicCap className="text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.institution}
                    className="flex items-center gap-3 rounded-lg bg-surface-light border border-surface-lighter/50 p-4"
                  >
                    {edu.logo ? (
                      <img
                        src={`/raihanafiandi${edu.logo}`}
                        alt={edu.institution}
                        className="w-10 h-10 rounded-lg object-contain shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-xs shrink-0">
                        {edu.institution[0]}
                      </div>
                    )}
                    <div>
                    <h4 className="font-medium text-text">{edu.degree}</h4>
                    <p className="text-sm text-primary-light">{edu.institution}</p>
                    <p className="text-xs text-text-muted mt-1">{edu.period}</p>
                    {edu.note && (
                      <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-accent/10 text-accent">
                        {edu.note}
                      </span>
                    )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Certifications */}
            <AnimatedSection variant="slideRight" delay={0.2}>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <HiBadgeCheck className="text-primary" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-3 rounded-lg bg-surface-light border border-surface-lighter/50 p-4"
                  >
                    {cert.logo ? (
                      <img
                        src={`/raihanafiandi${cert.logo}`}
                        alt={cert.issuer}
                        className="w-10 h-10 rounded-lg object-contain shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-xs shrink-0">
                        {cert.issuer[0]}
                      </div>
                    )}
                    <div>
                      <h4 className="font-medium text-text text-sm">{cert.name}</h4>
                      <p className="text-xs text-text-muted">{cert.issuer} Certified Associate</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
