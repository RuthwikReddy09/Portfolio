import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";

export default function Experience({ items }) {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Experience"
          subtitle="Research, internships, and impact highlights."
        />

        <div className="mt-10 relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-8">
            {items.map((x, idx) => (
              <motion.article
                key={x.org + x.role}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 -translate-x-1/2">
                  <div className="h-3 w-3 rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(56,189,248,0.15)] dark:shadow-[0_0_0_4px_rgba(56,189,248,0.18)]" />
                </div>

                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/60 p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{x.role}</h3>
                      <p className="text-zinc-700 dark:text-zinc-300">{x.org}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {x.location}
                      </p>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {x.dates}
                    </p>
                  </div>

                  <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {x.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
