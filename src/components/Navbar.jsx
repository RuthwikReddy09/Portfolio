import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function Navbar({ sections, dark, setDark }) {
  const [hovered, setHovered] = useState(null);

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-950/70">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">
          Ruthwik<span className="text-sky-500">.</span>
        </a>

        <nav className="flex items-center gap-2">
          <div
            className="hidden md:flex items-center gap-1"
            onMouseLeave={() => setHovered(null)}
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="relative px-3 py-2 rounded-lg text-sm transition-colors duration-150"
                onMouseEnter={() => setHovered(s.id)}
              >
                <AnimatePresence>
                  {hovered === s.id && (
                    <motion.span
                      className="absolute inset-0 rounded-lg bg-zinc-100 dark:bg-zinc-800"
                      layoutId="navbar-hover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">{s.label}</span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setDark((v) => !v)}
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label="Toggle theme"
            type="button"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
