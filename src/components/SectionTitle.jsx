export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        {subtitle ? (
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
