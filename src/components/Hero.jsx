import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Hero({ profile }) {
  const { name, title, tagline, socials, resumeUrl, current, location } = profile;

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full blur-3xl opacity-30 bg-sky-400" />
        <div className="absolute top-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-25 bg-fuchsia-400" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm tracking-widest uppercase text-zinc-600 dark:text-zinc-400">
              {title}
            </p>

            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
              {name}
              <span className="text-sky-500">.</span>
            </h1>

            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{location}</p>

            <p className="mt-5 text-lg text-zinc-700 dark:text-zinc-300 max-w-xl">
              {tagline}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 text-white hover:bg-sky-500 transition"
              >
                View Projects <ArrowRight size={18} />
              </a>

              <a
                href={resumeUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <SocialIcon href={socials.github} label="GitHub" icon={<Github size={18} />} />
              <SocialIcon href={socials.linkedin} label="LinkedIn" icon={<Linkedin size={18} />} />
              <SocialIcon href={socials.scholar} label="Google Scholar" icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
                </svg>
              } />
              <SocialIcon href={`mailto:${socials.email}`} label="Email" icon={<Mail size={18} />} />
              <SocialIcon href={`tel:${socials.phone}`} label="Phone" icon={<Phone size={18} />} />
            </div>
          </motion.div>

          <motion.div
            className="md:justify-self-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-col items-center gap-8">
  {/* Bouncy avatar with animated glow */}
  <motion.div
    animate={{ y: [0, -14, 0] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    className="relative"
  >
    {/* Outer animated glow */}
    <motion.div
      animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -inset-10 rounded-full blur-3xl bg-sky-500/30 dark:bg-sky-400/25"
    />

    {/* Secondary glow layer */}
    <motion.div
      animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -inset-6 rounded-full blur-2xl bg-fuchsia-500/25 dark:bg-fuchsia-400/20"
    />

    {/* Gradient ring */}
    <div className="relative w-80` h-80 md:w-[420px] md:h-[420px] rounded-full p-[3px] bg-gradient-to-br from-sky-400 via-fuchsia-400 to-emerald-300 shadow-2xl">
      
      {/* Image container */}
      <div className="w-full h-full rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <img
          src="/me.jpg"  // place your image in public/me.jpg
          alt="Ruthwik portrait"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </motion.div>
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
      target={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "noreferrer"}
    >
      {icon}
    </a>
  );
}
