export default function Footer() {
  return (
    <footer className="border-t border-charcoal-200 bg-white dark:border-charcoal-800 dark:bg-charcoal-950 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-charcoal-400 dark:text-charcoal-500">
        © {new Date().getFullYear()} My Restaurant — Find your next favorite spot
      </div>
    </footer>
  );
}
