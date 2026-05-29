export default function Footer({ profile }) {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Built with React + Tailwind + Framer Motion
        </p>
      </div>
    </footer>
  );
}
