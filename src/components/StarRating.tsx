interface StarRatingProps {
  score: number;
}

export default function StarRating({ score }: StarRatingProps) {
  const stars = score / 2;
  const full = Math.floor(stars);
  const half = stars % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  return (
    <span className="flex items-center gap-1 text-ember-400" title={`${score}/10`}>
      <span>{"★".repeat(full)}</span>
      {half ? <span>½</span> : null}
      <span className="text-charcoal-600">{"☆".repeat(empty)}</span>
      <span className="text-xs text-charcoal-400 ml-1">{score}/10</span>
    </span>
  );
}
