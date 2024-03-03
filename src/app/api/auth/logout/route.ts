"use server";

import { cookies } from "next/headers";

export async function GET(request: Request) {
  cookies().delete("username");
  cookies().delete("address");

  return Response.json({ success: true });
}
