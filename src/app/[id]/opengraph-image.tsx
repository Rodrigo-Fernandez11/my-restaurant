import { ImageResponse } from "next/og";
import api from "@/api";

export const runtime = "edge";
// Image metadata
export const alt = "Image restaurant";

export const contentType = "image/png";

export default async function getServerSideProps({
  params: { id },
}: {
  params: { id: string };
}) {
  const restaurant = await api.fetch(id);

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 50,
          background: "black",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          alt={restaurant.name}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
          src={restaurant.image}
        />
        <h2
          style={{
            display: "flex",
            gap: "2px",
            fontSize: "18px",
            lineHeight: "28px",
            fontWeight: "700",
          }}
        >
          <span>{restaurant.name}</span>
          <small style={{ display: "flex", gap: "10px" }}>
            <span>⭐</span>
            <span>{restaurant.score}</span>
            <span style={{ fontWeight: 400, opacity: 0.75 }}>
              ({restaurant.ratings})
            </span>
          </small>
        </h2>
        <p style={{ opacity: 0.9, fontSize: "20px" }}>
          {restaurant.description}
        </p>
      </div>
    )
  );
}
