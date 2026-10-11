import type { PriceRange as PriceRangeType } from "@/types/restaurant";

interface PriceRangeProps {
  priceRange: PriceRangeType;
}

export default function PriceRange({ priceRange }: PriceRangeProps) {
  return (
    <span className="text-sm font-medium">
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className={i < priceRange ? "text-ember-500" : "text-charcoal-700"}>
          $
        </span>
      ))}
    </span>
  );
}
