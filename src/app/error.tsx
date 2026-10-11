"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 text-center p-6">
      <h2 className="text-xl font-semibold text-ember-400">Something went wrong</h2>
      <p className="text-charcoal-300 text-sm max-w-sm">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-ember-600 text-white rounded-lg hover:bg-ember-500 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
