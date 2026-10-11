"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams.toString());
      if (e.target.value) {
        params.set("search", e.target.value);
      } else {
        params.delete("search");
      }
      router.push(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <input
      type="search"
      placeholder="Search restaurants..."
      defaultValue={searchParams.get("search") ?? ""}
      onChange={handleChange}
      className="w-full max-w-md px-4 py-2 rounded-lg border border-charcoal-600 bg-charcoal-800 text-charcoal-100 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-ember-500"
    />
  );
}
