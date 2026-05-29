import { useEffect, useState } from "react";

export default function SideNav({ sections }) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.45) {
          current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <aside className="fixed left-5 top-0 h-full z-40 hidden lg:flex items-center pointer-events-none">
      <div className="relative flex flex-col items-center gap-14 pointer-events-auto">
        {/* Single continuous vertical line */}
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800" />

        {sections.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className="group relative z-10 flex items-center"
              aria-label={label}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {/* Dot */}
              <div
                className={`rounded-full transition-all duration-300 ease-out ${
                  isActive
                    ? "w-3 h-3 bg-sky-400 shadow-[0_0_10px_3px_rgba(56,189,248,0.4)]"
                    : "w-2 h-2 bg-zinc-300 dark:bg-zinc-700 group-hover:bg-zinc-400 dark:group-hover:bg-zinc-500"
                }`}
              />

              {/* Label — floats right, no layout impact */}
              <span
                className={`absolute left-5 text-xs whitespace-nowrap font-medium transition-all duration-200 ease-out ${
                  isActive
                    ? "opacity-100 translate-x-0 text-sky-400"
                    : "opacity-0 translate-x-1 text-zinc-400 dark:text-zinc-500 group-hover:opacity-70 group-hover:translate-x-0"
                }`}
              >
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
