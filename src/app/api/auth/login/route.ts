"use server";

import { cookies } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return Response.json({ success: false }, { status: 400 });
  }

  cookies().set("username", username);
  console.log("set cookie", username);

  return Response.json({ success: true });
}
