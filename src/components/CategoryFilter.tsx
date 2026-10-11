"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface CategoryFilterProps {
  categories: string[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("category");

  const select = useCallback(
    (cat: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (cat) params.set("category", cat);
      else params.delete("category");
      router.push(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4">
      <button
        onClick={() => select(null)}
        className={`shrink-0 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          !active
            ? "bg-ember-600 text-white"
            : "bg-charcoal-800 text-charcoal-300 hover:bg-charcoal-700"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => select(cat)}
          className={`shrink-0 px-3 py-1 rounded-full text-sm font-medium capitalize transition-colors ${
            active === cat
              ? "bg-ember-600 text-white"
              : "bg-charcoal-800 text-charcoal-300 hover:bg-charcoal-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
