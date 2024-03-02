import { cn } from "@/utils/cn";
import { LoginForm } from "./LoginForm";
import { getUserServerside } from "@/utils/getUserServerside";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getUserServerside();
  if (user) {
    redirect("/dashboard");
  }

  return (
    <div
      className={cn(
        "w-full",
        "min-h-[90svh]",
        "flex",
        "justify-start",
        "items-center",
        "px-16"
      )}
    >
      <div
        className={cn(
          "border-[1px]",
          "border-gray-6",
          "p-6",
          "flex",
          "flex-col",
          "rounded-[8px]",
          "w-[50%]",
          "md:w-[40%]",
          "lg:w-[30%]",
          "gap-y-2"
        )}
      >
        <LoginForm />
      </div>
    </div>
  );
}
