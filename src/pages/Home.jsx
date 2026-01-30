import { motion } from "motion/react";

const text = "Program do liczenia pieniędzy";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.h1
        className="text-2xl xl:text-4xl font-bold flex"
        aria-label={text}
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.03 } },
        }}
      >
        {text.split("").map((ch, i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
