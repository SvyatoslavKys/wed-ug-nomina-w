import { motion } from "motion/react";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const { theme, t } = useOutletContext();

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-950 text-slate-100"
          : "bg-slate-50 text-slate-950"
      }`}
    >
      <motion.h1
        className={`text-2xl xl:text-4xl font-bold flex ${
          theme === "dark" ? "text-white" : "text-slate-950"
        }`}
        aria-label={t?.welkameText ?? "Program do liczenia pieniędzy"}
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.03 } },
        }}
      >
        {(t?.welkameText ?? "Program do liczenia pieniędzy").split("").map((ch, i) => (
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
