import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";

export default function Publications({ items }) {
  return (
    <section id="publications" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Publications"
          subtitle="Selected publication and research contributions."
        />

        <div className="mt-10 space-y-6">
          {items.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
              className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/60 overflow-hidden flex flex-col md:flex-row"
            >
              {p.image && (
                <div className="md:w-80 shrink-0 bg-zinc-100 dark:bg-zinc-900 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800">
                  <img
                    src={p.image}
                    alt={`${p.title} figure`}
                    className="w-full h-56 md:h-full object-cover object-top"
                  />
                </div>
              )}
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 text-sm font-medium text-sky-500 hover:text-sky-400 transition"
                    >
                      Read Paper →
                    </a>
                  )}
                </div>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{p.venue}</p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.authors}</p>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
