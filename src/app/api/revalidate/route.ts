import { getRevalidateSecret } from "@/lib/env";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let secret: string;
  try {
    secret = getRevalidateSecret();
  } catch {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  revalidatePath("/");
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
