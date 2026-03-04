"use client";

import { motion } from "framer-motion";

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
          className="text-lg text-purple-300 md:text-xl"
          variants={item}
        >
          Hello, my name is
        </motion.p>

        <motion.h1
          className="text-5xl font-bold text-white drop-shadow-[0_0_30px_rgba(139,92,246,0.5)] md:text-7xl"
          variants={item}
        >
          Mayur Upadhayay
        </motion.h1>

        <motion.p className="text-xl text-gray-300 md:text-2xl" variants={item}>
          Senior Software Engineer
        </motion.p>

        <motion.p
          className="mx-auto max-w-2xl leading-relaxed text-gray-400"
          variants={item}
        >
          A passionate Full Stack JavaScript developer with expertise in React
          and Node. Currently leading an e-commerce project and consulting on
          complex user interfaces, I&apos;m on a mission to push boundaries and
          embrace continuous learning. I specialize in crafting cloud
          applications with Next.js and AWS Lambda functions, leveraging the
          power of innovation and technology.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-6 pt-4 sm:flex-row sm:justify-center"
          variants={item}
        >
          <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/70">
            <span className="relative z-10">Explore Universe</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>

          <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-3 font-semibold text-white shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/70">
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </motion.div>

        <motion.a
          href="#more"
          className="mt-4 inline-block text-sm text-purple-400 transition-colors hover:text-purple-300"
          variants={item}
        >
          Read more
        </motion.a>
      </motion.div>
    </div>
  );
}
