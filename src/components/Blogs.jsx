import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";

export default function Blogs({ blogs }) {
  return (
    <section id="blogs" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Blog"
          subtitle="Writing about AI, LLMs, and things I've built."
        />

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {blogs.map((blog, idx) => (
            <motion.a
              key={blog.url}
              href={blog.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
              className="group rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/60 overflow-hidden shadow-sm hover:shadow-lg hover:border-sky-500/40 dark:hover:border-sky-500/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[16/8] bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-400 text-sm">
                    No preview
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold leading-snug group-hover:text-sky-500 transition-colors duration-200">
                    {blog.title}
                  </h3>
                  <ExternalLink
                    size={15}
                    className="shrink-0 mt-0.5 text-zinc-400 group-hover:text-sky-400 transition-colors duration-200"
                  />
                </div>

                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                  {blog.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
