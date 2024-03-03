"use server";

import { cookies } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");

  if (!address) {
    return Response.json({ success: false }, { status: 400 });
  }

  cookies().set("address", address);

  return Response.json({ success: true });
}
