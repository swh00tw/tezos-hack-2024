import "server-only";
import { cookies } from "next/headers";
import { userInfoTable } from "@/mockdata/user";

export async function getUserServerside() {
  const username = cookies().get("username")?.value;
  return username ? userInfoTable[username] : null;
}
