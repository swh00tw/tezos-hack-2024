import { cn } from "@/utils/cn";
import { LoginForm } from "./LoginForm";

export default function Home() {
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
