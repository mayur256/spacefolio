"use client";

import { motion } from "framer-motion";
import content from "@/../../content/portfolio.json";

const heroContent = content.hero;

interface HeroOverlayProps {
  opacity: number;
}

export default function HeroOverlay({ opacity }: HeroOverlayProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="relative z-10 flex h-screen items-center justify-center px-6 transition-opacity duration-700"
      style={{ opacity }}
    >
      <motion.div
        className="mx-auto max-w-4xl space-y-6 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="text-sm font-semibold uppercase tracking-wider text-[#22d3ee]"
          variants={item}
        >
          {heroContent.greeting}
        </motion.p>

        <motion.h1
          className="text-5xl font-bold leading-tight tracking-tight text-[#f1f5f9] md:text-7xl"
          variants={item}
        >
          <span className="gradient-text-cosmic">{heroContent.name}</span>
        </motion.h1>

        <motion.p
          className="text-xl font-light italic text-[#94a3b8] md:text-2xl"
          variants={item}
        >
          {heroContent.title}
        </motion.p>

        <motion.p
          className="mx-auto max-w-2xl font-light leading-relaxed text-[#94a3b8]"
          variants={item}
        >
          {heroContent.description}
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-6 pt-4 sm:flex-row sm:justify-center"
          variants={item}
        >
          {heroContent.buttons.map((button, index) => (
            <button
              key={button.label}
              className={`group relative overflow-hidden rounded-lg px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                button.variant === "primary"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-blue-500/50 hover:shadow-blue-500/70"
                  : "bg-gradient-to-r from-purple-500 to-pink-600 shadow-purple-500/50 hover:shadow-purple-500/70"
              }`}
            >
              <span className="relative z-10">{button.label}</span>
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  button.variant === "primary"
                    ? "bg-gradient-to-r from-blue-400 to-purple-500"
                    : "bg-gradient-to-r from-purple-400 to-pink-500"
                }`}
              />
            </button>
          ))}
        </motion.div>

        <motion.a
          href={heroContent.readMore.href}
          className="mt-4 inline-block text-sm text-purple-400 transition-colors hover:text-purple-300"
          variants={item}
        >
          {heroContent.readMore.label}
        </motion.a>
      </motion.div>
    </div>
  );
}
