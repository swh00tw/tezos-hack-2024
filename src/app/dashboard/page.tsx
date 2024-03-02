"use server";

import { cookies } from "next/headers";

export default async function Dashboard() {
  const username = cookies().get("username");
  return <div>{username?.value}</div>;
}
