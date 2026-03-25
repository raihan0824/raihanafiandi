"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

type VariantName = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";

const variants: Record<VariantName, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  variant?: VariantName;
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
