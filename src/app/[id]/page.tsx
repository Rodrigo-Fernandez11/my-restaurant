import { getRestaurant, getRestaurants } from "@/api";
import { CopyLink } from "@/components/CopyLink";
import StarRating from "@/components/StarRating";
import PriceRange from "@/components/PriceRange";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params: { id } }: { params: { id: string } }) {
  const restaurant = getRestaurant(id);
  if (!restaurant) return {};
  return {
    title: `${restaurant.name} — My Restaurant`,
    description: restaurant.description,
  };
}

export function generateStaticParams() {
  return getRestaurants().map((r) => ({ id: r.id }));
}

export default function RestaurantPage({ params: { id } }: { params: { id: string } }) {
  const restaurant = getRestaurant(id);
  if (!restaurant) notFound();

  return (
    <article className="max-w-2xl mx-auto space-y-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-charcoal-400 hover:text-ember-400 transition-colors"
      >
        ← Back to restaurants
      </Link>

      <div className="rounded-xl overflow-hidden">
        <Image
          alt={restaurant.name}
          src={restaurant.image}
          width={800}
          height={400}
          className="w-full object-cover h-64 sm:h-80"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-3xl font-bold text-charcoal-50">{restaurant.name}</h1>
          <PriceRange priceRange={restaurant.priceRange} />
        </div>

        <div className="flex items-center gap-4">
          <StarRating score={restaurant.score} />
          <span className="text-sm text-charcoal-400">({restaurant.ratings} reviews)</span>
          <span className="text-sm capitalize text-ember-400 bg-ember-950 px-2 py-0.5 rounded-full">
            {restaurant.category}
          </span>
        </div>

        <p className="text-charcoal-200 leading-relaxed">{restaurant.description}</p>

        <p className="text-sm text-charcoal-400 flex items-center gap-2">
          <span>📍</span>
          <span>{restaurant.address}</span>
        </p>

        <CopyLink />
      </div>
    </article>
  );
}
