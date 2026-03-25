"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/resume";
import { HiMail, HiLocationMarker, HiChat } from "react-icons/hi";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface-light/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-text-muted mb-12 max-w-xl mx-auto">
            Interested in collaborating or have a question? Feel free to reach out
            or chat with my AI assistant.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto mb-10">
            <div className="rounded-xl bg-surface-light border border-surface-lighter/50 p-6 flex flex-col items-center gap-3">
              <HiMail className="text-primary text-2xl" />
              <p className="text-sm text-text-muted">Email</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-text hover:text-primary transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
            <div className="rounded-xl bg-surface-light border border-surface-lighter/50 p-6 flex flex-col items-center gap-3">
              <HiLocationMarker className="text-primary text-2xl" />
              <p className="text-sm text-text-muted">Location</p>
              <p className="text-sm text-text">{personalInfo.location}</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <Link href="/chat/">
            <Button size="lg">
              <HiChat className="mr-2" />
              Chat with Raihan Assistant
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
