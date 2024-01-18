import type { CollectionEntry } from "astro:content";
import { motion } from "framer-motion";
import { CardStack } from "./CardStack";

const grad1 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["0%", "0%", "200%"],
    x2: ["0%", "0%", "180%"],
    y1: ["80%", "0%", "0%"],
    y2: ["100%", "20%", "20%"],
  },
};

const grad2 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};
const grad3 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};
const grad4 = {
  initial: {
    x1: "40%",
    x2: "50%",
    y1: "160%",
    y2: "180%",
  },
  animate: {
    x1: "0%",
    x2: "10%",
    y1: "-40%",
    y2: "-20%",
  },
};
const grad5 = {
  initial: {
    x1: "-40%",
    x2: "-10%",
    y1: "0%",
    y2: "20%",
  },
  animate: {
    x1: ["40%", "0%", "0%"],
    x2: ["10%", "0%", "0%"],
    y1: ["0%", "0%", "180%"],
    y2: ["20%", "20%", "200%"],
  },
};

type Props = {
  items: CollectionEntry<"blog">[];
};

export const PulseBeamsWithCard = ({ items }: Props) => {
  return (
    <>
      <div className="relative flex h-[500px] w-full  items-center justify-center overflow-hidden antialiased md:h-[400px]">
        <button className="group relative z-40 mt-72 inline-block h-[100px] w-[220px] cursor-pointer rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 text-white  no-underline shadow-2xl shadow-zinc-900  md:mt-48 md:h-[120px] md:w-[320px]">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative z-10 flex h-[100px] w-[220px] items-center justify-center space-x-2 rounded-full  border-2 border-slate-800 bg-zinc-950 px-4 py-0.5 text-center md:h-[120px] md:w-[320px]">
            <span className="inline-block bg-gradient-to-r from-neutral-300 via-neutral-600 to-neutral-300 bg-clip-text text-2xl text-transparent md:text-4xl">
              <a href="/posts">All posts</a>
            </span>
          </div>
        </button>
        {/* Core SVGs component */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
          <CardStack items={items} />
          <SVGs />
        </div>
      </div>
    </>
  );
};

export const SVGs = () => {
  return (
    <>
      <svg
        width="858"
        height="200"
        viewBox="0 0 858 200"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden h-[200px] w-full flex-shrink-0 !fill-none text-white md:flex md:h-[200px]"
      >
        <path d="M320 100L20 100V-50" stroke="var(--slate-700)" />
        <path d="M439 100L838 100V-50" stroke="var(--slate-700)" />

        {/* Gradient Beams */}

        <path d="M320 100L20 100V-50" stroke="url(#grad3-desktop)" />
        <path d="M439 100L838 100V-50" stroke="url(#grad4-desktop)" />

        <defs>
          <motion.linearGradient
            variants={grad5}
            animate="animate"
            initial="initial"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              repeatDelay: 2,
              delay: Math.random() * 2,
            }}
            id="grad5-desktop"
          >
            <GradientColors />
          </motion.linearGradient>
          <motion.linearGradient
            variants={grad1}
            animate="animate"
            initial="initial"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              repeatDelay: 2,
              delay: Math.random() * 2,
            }}
            id="grad1-desktop"
          >
            <GradientColors />
          </motion.linearGradient>
          <motion.linearGradient
            variants={grad2}
            animate="animate"
            initial="initial"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              repeatDelay: 2,
              delay: Math.random() * 2,
            }}
            id="grad2-desktop"
          >
            <GradientColors />
          </motion.linearGradient>
          <motion.linearGradient
            variants={grad3}
            animate="animate"
            initial="initial"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              repeatDelay: 2,
              delay: Math.random() * 2,
            }}
            id="grad3-desktop"
          >
            <GradientColors />
          </motion.linearGradient>
          <motion.linearGradient
            variants={grad4}
            animate="animate"
            initial="initial"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              repeatDelay: 2,
              delay: Math.random() * 2,
            }}
            id="grad4-desktop"
          >
            <GradientColors />
          </motion.linearGradient>
        </defs>
      </svg>
      <svg
        width="858"
        height="200"
        viewBox="0 0 858 200"
        xmlns="http://www.w3.org/2000/svg"
        className="flex h-[200px] w-full flex-shrink-0 !fill-none text-white md:hidden"
      >
        <path d="M340 100L40 100V-100" stroke="var(--slate-700)" />
        <path d="M439 100L818 100V-100" stroke="var(--slate-700)" />

        {/* Gradient Beams */}

        <path d="M340 100L40 100V-100" stroke="url(#grad3)" />
        <path d="M439 100L818 100V-100" stroke="url(#grad4)" />

        <defs>
          <motion.linearGradient
            variants={grad5}
            animate="animate"
            initial="initial"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              repeatDelay: 2,
              delay: Math.random() * 2,
            }}
            id="grad5-desktop"
          >
            <GradientColors />
          </motion.linearGradient>
          <motion.linearGradient
            variants={grad1}
            animate="animate"
            initial="initial"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              repeatDelay: 2,
              delay: Math.random() * 2,
            }}
            id="grad1"
          >
            <GradientColors />
          </motion.linearGradient>
          <motion.linearGradient
            variants={grad2}
            animate="animate"
            initial="initial"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              repeatDelay: 2,
              delay: Math.random() * 2,
            }}
            id="grad2"
          >
            <GradientColors />
          </motion.linearGradient>
          <motion.linearGradient
            variants={grad3}
            animate="animate"
            initial="initial"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              repeatDelay: 2,
              delay: Math.random() * 2,
            }}
            id="grad3"
          >
            <GradientColors />
          </motion.linearGradient>
          <motion.linearGradient
            variants={grad4}
            animate="animate"
            initial="initial"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              repeatDelay: 2,
              delay: Math.random() * 2,
            }}
            id="grad4"
          >
            <GradientColors />
          </motion.linearGradient>
        </defs>
      </svg>
    </>
  );
};
const GradientColors = () => {
  return (
    <>
      <stop stopColor="#18CCFC" stopOpacity="0"></stop>
      <stop stopColor="#18CCFC"></stop>
      <stop offset="0.325" stopColor="#6344F5"></stop>
      <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
    </>
  );
};
