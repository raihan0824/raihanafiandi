"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { personalInfo } from "@/data/resume";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  const nameChars = personalInfo.name.split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-light to-surface animate-gradient opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary-light text-lg mb-4"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Typewriter name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight text-text">
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.04, delay: 0.5 + i * 0.04 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-xl sm:text-2xl md:text-3xl text-text-muted font-light mb-6"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-text-muted max-w-2xl mx-auto mb-10 text-base sm:text-lg"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/chat/" className="group">
            <Button>
              Ask Raihan Assistant
              <HiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
