import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Projects" subtitle="A few things I’ve built recently." />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
              className="rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white/70 dark:bg-zinc-950/60 shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[16/10] bg-zinc-100 dark:bg-zinc-900">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-500 text-sm">
                    Add screenshot (optional)
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 line-clamp-4">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  {p.live ? (
                    <a
                      href={p.live}
                      className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90 transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live <ExternalLink size={16} />
                    </a>
                  ) : null}

                  {p.source ? (
                    <a
                      href={p.source}
                      className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code <Github size={16} />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>


      </div>
    </section>
  );
}
