import SectionTitle from "./SectionTitle.jsx";

export default function Contact({ profile }) {
  const { socials } = profile;

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Contact"
        />

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/60 p-6">
            <h3 className="font-semibold">Direct</h3>
            <div className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <p>
                Email:{" "}
                <a className="underline" href={`mailto:${socials.email}`}>
                  {socials.email}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a className="underline" href={`tel:${socials.phone}`}>
                  {socials.phone}
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a className="underline" href={socials.linkedin} target="_blank" rel="noreferrer">
                  {socials.linkedin.replace("https://", "")}
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a className="underline" href={socials.github} target="_blank" rel="noreferrer">
                  {socials.github.replace("https://", "")}
                </a>
              </p>
            </div>

    
          </div>
        </div>
      </div>
    </section>
  );
}
