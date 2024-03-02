import { cn } from "@/utils/cn";
import { Text, Flex } from "@radix-ui/themes";
import { UserInfoSection } from "./UserInfoSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col p-8 min-h-[90svh] gap-y-4">
      <Flex className="min-h-[70svh] justify-between">
        <div className="flex w-full md:w-[60%]">{children}</div>
        <div className="flex w-full md:w-[35%]">
          <UserInfoSection />
        </div>
      </Flex>
      <div
        className={cn(
          "bg-accent-4",
          "p-4",
          "rounded-4",
          "flex",
          "flex-col",
          "gap-y-2"
        )}
      >
        <Text className="text-[16px] text-gray-12" weight={"medium"}>
          💡 Did you know?
        </Text>
        <Text className="text-[14px] text-gray-11">
          Random BS Random BS Random BS Random BS Random BS
        </Text>
      </div>
    </div>
  );
}
