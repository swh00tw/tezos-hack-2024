import "server-only";
import { cookies } from "next/headers";
import { userInfoTable } from "@/mockdata/user";

export async function getUserServerside() {
  const username = cookies().get("username")?.value;
  const address = cookies().get("address")?.value;
  return username && address ? userInfoTable[username] : null;
}
