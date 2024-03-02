"use server";

import { cookies } from "next/headers";

export async function GET(request: Request) {
  cookies().delete("username");

  return Response.json({ success: true });
}
