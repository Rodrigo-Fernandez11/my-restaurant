import "server-only";

export function getRevalidateSecret(): string {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    throw new Error(
      "REVALIDATE_SECRET is not configured. Add it to your .env.local file."
    );
  }
  return secret;
}
