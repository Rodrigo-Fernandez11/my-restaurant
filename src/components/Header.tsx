import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-200 bg-white/90 dark:border-charcoal-800 dark:bg-charcoal-950/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-ember-600 hover:text-ember-500 dark:text-ember-400 dark:hover:text-ember-300 transition-colors"
        >
          🍽 My Restaurant
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/favorites"
            className="text-sm text-charcoal-600 hover:text-ember-600 dark:text-charcoal-300 dark:hover:text-ember-400 transition-colors"
          >
            Favorites
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
