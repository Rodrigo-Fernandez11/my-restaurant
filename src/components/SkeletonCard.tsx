export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-xl bg-charcoal-900 border border-charcoal-800 overflow-hidden">
      <div className="h-48 bg-charcoal-700" />
      <div className="p-4 space-y-3">
        <div className="h-5 bg-charcoal-700 rounded w-3/4" />
        <div className="h-3 bg-charcoal-700 rounded w-1/3" />
        <div className="h-3 bg-charcoal-700 rounded w-full" />
        <div className="h-3 bg-charcoal-700 rounded w-5/6" />
        <div className="flex gap-2 pt-1">
          <div className="h-3 bg-charcoal-700 rounded w-16" />
          <div className="h-3 bg-charcoal-700 rounded w-12" />
        </div>
      </div>
    </div>
  );
}
