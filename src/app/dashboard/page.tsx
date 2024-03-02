"use server";

import { getUserServerside } from "@/utils/getUserServerside";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await getUserServerside();
  if (!user) {
    redirect("/");
  }

  return <div>{user?.username}</div>;
}
