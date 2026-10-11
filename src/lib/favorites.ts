export const FAVORITES_KEY = "my-restaurant:favorites";

export function getFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as string[];
  } catch {
    return [];
  }
}

export function toggleFavorite(id: string): void {
  if (typeof window === "undefined") return;
  const current = getFavorites();
  const next = current.includes(id)
    ? current.filter((fav) => fav !== id)
    : [...current, id];
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
  } catch {
    // localStorage unavailable; silently no-op
  }
}

export function isFavorite(id: string): boolean {
  return getFavorites().includes(id);
}
