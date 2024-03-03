"use server";

import { getUserServerside } from "@/utils/getUserServerside";
import { redirect } from "next/navigation";
import CurrentBill from "./CurrentBill";

export default async function Dashboard() {
  const user = await getUserServerside();
  if (!user) {
    redirect("/");
  }

  return (
    <div>
      <CurrentBill />
    </div>
  );
}
