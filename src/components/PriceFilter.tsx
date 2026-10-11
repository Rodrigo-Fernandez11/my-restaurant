"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const PRICE_OPTIONS = [1, 2, 3, 4] as const;

export default function PriceFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("price") ? Number(searchParams.get("price")) : null;

  const select = useCallback(
    (price: number | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (price) params.set("price", String(price));
      else params.delete("price");
      router.push(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <div className="flex gap-2">
      <button
        onClick={() => select(null)}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          !active
            ? "bg-ember-600 text-white"
            : "bg-charcoal-800 text-charcoal-300 hover:bg-charcoal-700"
        }`}
      >
        Any
      </button>
      {PRICE_OPTIONS.map((p) => (
        <button
          key={p}
          onClick={() => select(p)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            active === p
              ? "bg-ember-600 text-white"
              : "bg-charcoal-800 text-charcoal-300 hover:bg-charcoal-700"
          }`}
        >
          {"$".repeat(p)}
        </button>
      ))}
    </div>
  );
}
